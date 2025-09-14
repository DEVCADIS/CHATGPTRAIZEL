import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys";
import OpenAI from "openai";
import chalk from "chalk";
import pino from "pino";

// ⚡ OpenAI
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Config
const config = {
  PREFIXE_COMMANDE: process.env.PREFIXE || "!",
  DOSSIER_AUTH: process.env.DOSSIER_AUTH || "auth_baileys",
  NUMBER: process.env.NUMBER,
  USE_QR: process.env.USE_QR === "true",
  LOG_LEVEL: process.env.LOG_LEVEL || "silent",
  RECONNECT_DELAY: parseInt(process.env.RECONNECT_DELAY) || 5000,
  STATUS_REACT: process.env.STATUS_REACT || "❤️"
};

// Logger
const logger = pino({ level: config.LOG_LEVEL });

// Historique par utilisateur
const conversations = {};

// === Pairing code ===
async function requestPairingCode(sock) {
  try {
    logger.info("Demande de code pairing pour " + config.NUMBER);
    const pairingCode = await sock.requestPairingCode(config.NUMBER);

    console.log("\n======================================");
    console.log("🆑 CODE WHATSAPP (Pairing) : " + chalk.cyan(pairingCode));
    console.log("👉 Ouvre WhatsApp > Paramètres > Appareils liés > Lier un appareil");
    console.log("⚠️ Ce code expire dans 20 secondes !");
    console.log("======================================\n");
  } catch (error) {
    logger.error({ error }, "❌ Échec de la demande de code pairing");
  }
}

// ================= Bot WhatsApp =================
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState(config.DOSSIER_AUTH);
  const sock = makeWASocket({ auth: state, logger });

  sock.ev.on("creds.update", saveCreds);

  // Pairing si USE_QR=false
  if (!config.USE_QR) {
    await requestPairingCode(sock);
  }

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe) return;

    const sender = m.key.remoteJid;
    const text = m.message.conversation || m.message.extendedTextMessage?.text || "";
    if (!text) return;

    if (!conversations[sender]) conversations[sender] = [];

    try {
      const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Tu es un assistant poli et intelligent, comme ChatGPT." },
          ...conversations[sender],
          { role: "user", content: text }
        ]
      });

      const reply = response.choices[0].message.content;

      // Mise à jour historique
      conversations[sender].push({ role: "user", content: text });
      conversations[sender].push({ role: "assistant", content: reply });
      if (conversations[sender].length > 12) conversations[sender] = conversations[sender].slice(-12);

      await sock.sendMessage(sender, { text: reply });

    } catch (err) {
      logger.error(err, "Erreur OpenAI");
      await sock.sendMessage(sender, { text: "⚠️ Erreur IA" });
    }
  });
}

// Démarrage
startBot();
