var push = require('web-push')

let vapidKeys={
    publicKey: 'BLSxos0g_qbsjSbW-LoQE9Mp8cTatvMS3l3OxczYQRjqwebOMtMkyIraTFK6bTtbOX4jw7k78lFxMKM2MqN-Z0U',
    privateKey: 'txr2bUEUmcUC_dRVxOa7f8Tg5gEKDt6d5LuBU1u4Spw'
  }

  push.setVapidDetails('mainto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey);

  push.sendNotification(sub,'test message')