/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-restricted-globals

self.addEventListener("install", function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", function (event) {
  if (event.data) {
    let data = event.data.json();
    let dts = Math.floor(Date.now());
    const title = data.title;
    const options = {
      body: data.body,
      icon: "./SmallLogo.png",
      timestamp: dts,
      tag: "push-notification-tag",
      data: {
        url: "https://localhost:44390/assigned-tickets",
      },
    };

    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(title, options);
  } else {
    console.log("This push event has no data.");
  }
});

self.addEventListener("notificationclick", function (event) {
  event.waitUntil(
    self.clients.matchAll().then(function (clientList) {
      // if (clientList.length > 0) {
      //   return clientList[0].focus();
      // }

      return self.clients.openWindow("../assignedTickets");
    })
  );
});
