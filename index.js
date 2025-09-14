import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys";
import OpenAI from "openai";

// ⚡ Configure ta clé OpenAI dans Render
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Historique par utilisateur
const conversations = {};

// ================= Bot WhatsApp =================
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("session");
  const sock = makeWASocket({ auth: state });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe) return;

    const sender = m.key.remoteJid;
    const text = m.message.conversation || m.message.extendedTextMessage?.text || "";
    if (!text) return;

    if (!conversations[sender]) conversations[sender] = [];

    try {
      // Envoi à OpenAI GPT-3.5/4
      const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Tu es un assistant intelligent et poli, comme ChatGPT. Réponds à toutes les questions clairement et de manière conviviale."
          },
          ...conversations[sender],
          { role: "user", content: text }
        ]
      });

      const reply = response.choices[0].message.content;

      // Mettre à jour l’historique
      conversations[sender].push({ role: "user", content: text });
      conversations[sender].push({ role: "assistant", content: reply });

      // Limiter l’historique à 12 messages pour économiser la mémoire
      if (conversations[sender].length > 12) {
        conversations[sender] = conversations[sender].slice(-12);
      }

      // Envoyer la réponse sur WhatsApp
      await sock.sendMessage(sender, { text: reply });

    } catch (err) {
      console.error("Erreur OpenAI:", err);
      await sock.sendMessage(sender, { text: "⚠️ Erreur IA" });
    }
  });
}

// Démarrage du bot
startBot();
