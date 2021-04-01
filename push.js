var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BLSxos0g_qbsjSbW-LoQE9Mp8cTatvMS3l3OxczYQRjqwebOMtMkyIraTFK6bTtbOX4jw7k78lFxMKM2MqN-Z0U",
  privateKey: "txr2bUEUmcUC_dRVxOa7f8Tg5gEKDt6d5LuBU1u4Spw",
};

push.setVapidDetails(
  "mainto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fx1-2MAnwPY:APA91bE-uWJWPDC3Rydw7Q2HFA5LJfqEnLluywvwSpvxkSvtIAP918BCUjieoQ6-Pc01DKlTYSX4hgI34TCjJlB4MCglp7MEaNd0g8UxiKpZFoz19xUNFuBhn1-C7H8pDFjebGhpSzlk",
  expirationTime: null,
  keys: {
    p256dh:
      "BB2SyhmzXL9QIAm6gKoK0tc-G5OmmMwTsI1-TjTFg622GMCypEEmVtNZV5IcvwoarYsx2Rl0PMJ79LsHVSzm9A0",
    auth: "ZyZowfj5VvVcUSKxqHiZ2Q",
  },
};
let data = { title: "Khagendra", body: "kfjdlaksjdfla" };
push.sendNotification(sub, JSON.stringify(data));
