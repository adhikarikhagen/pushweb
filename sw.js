/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-restricted-globals
self.addEventListener("push", function (event) {
    if (event.data) {
      console.log("This push event has data: ", event.data.text());
      const title = event.data.text();
      const options = {
        body: "TicketId",
        icon:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        badge:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        silent: false,
        actions: [
          {
            action: "coffee-action",
            title: "Coffee",
            icon: "/images/demos/action-1-128x128.png",
          },
          {
            action: "doughnut-action",
            title: "Doughnut",
            icon: "/images/demos/action-2-128x128.png",
          },
        ],
  
        timestamp: Date.parse('01 Jan 2000 00:00:00')
      };
  
      // eslint-disable-next-line no-restricted-globals
      self.registration.showNotification(title, options);
    } else {
      console.log("This push event has no data.");
    }
  });
  
  self.addEventListener("notificationclick", function (event) {
    if (!event.action) {
      // Was a normal notification click
      console.log("Notification Click.");
      return;
    }
  
    switch (event.action) {
      case "coffee-action":
        console.log("User ❤️️'s coffee.");
        break;
      case "doughnut-action":
        console.log("User ❤️️'s doughnuts.");
        break;
      case "gramophone-action":
        console.log("User ❤️️'s music.");
        break;
      case "atom-action":
        console.log("User ❤️️'s science.");
        break;
      default:
        console.log(`Unknown action clicked: '${event.action}'`);
        break;
    }
  });
  