const TelegramBot = require("node-telegram-bot-api");
const { createCanvas, loadImage, registerFont } = require("canvas");
const fs = require("fs");

TOKEN = "7191038827:AAF6QQ2STbDByBnQ9Exzss2lJJ12MFyE2ws";
const bot = new TelegramBot(TOKEN, { polling: true });

let state = {};

// ======================Generate IMage=====================================

async function generateRamadan1(name, userId, chatId) {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  const image1 = await loadImage("img/ramazon1.jpg");

  canvas.width = image1.width;
  canvas.height = image1.height;
  ctx.drawImage(image1, 0, 0);

  let fontSize = 70;
  let text = name;
  let font = `${fontSize}px Arial`;
  const text_color = "#dda15e";

  const textWidth = ctx.measureText(text).width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height / 1.7;

  ctx.font = font;
  ctx.fillStyle = text_color;
  ctx.fillText(text, x, y);

  const buffer = canvas.toBuffer("image/jpeg");
  fs.writeFileSync(`${userId}.jpg`, buffer);

  bot
    .sendPhoto(chatId, fs.createReadStream(`${userId}.jpg`))
    .then(() => {
      fs.unlink(`${userId}.jpg`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Image deleted successfully");
      });
    })
    .catch((error) => {
      console.error("Error sending photo:", error);
    });
}

async function generateRamadan2(name, userId, chatId) {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  const image1 = await loadImage("img/ramazon2.jpg");

  canvas.width = image1.width;
  canvas.height = image1.height;
  ctx.drawImage(image1, 0, 0);

  let fontSize = 70;
  let text = name;
  let font = `${fontSize}px Arial`;
  const text_color = "#dda15e";

  const textWidth = ctx.measureText(text).width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height / 1.7;

  ctx.font = font;
  ctx.fillStyle = text_color;
  ctx.fillText(text, x, y);

  const buffer = canvas.toBuffer("image/jpeg");
  fs.writeFileSync(`${userId}r2.jpg`, buffer);

  bot
    .sendPhoto(chatId, fs.createReadStream(`${userId}r2.jpg`))
    .then(() => {
      fs.unlink(`${userId}r2.jpg`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Image deleted successfully");
      });
    })
    .catch((error) => {
      console.error("Error sending photo:", error);
    });
}

async function generateJuma1(name, userId, chatId) {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  const image1 = await loadImage("img/juma1.jpg");

  canvas.width = image1.width;
  canvas.height = image1.height;
  ctx.drawImage(image1, 0, 0);

  let fontSize = 70;
  let text = name;
  let font = `${fontSize}px Arial`;
  const text_color = "#dda15e";

  const textWidth = ctx.measureText(text).width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height / 1.7;

  ctx.font = font;
  ctx.fillStyle = text_color;
  ctx.fillText(text, x, y);

  const buffer = canvas.toBuffer("image/jpeg");
  fs.writeFileSync(`${userId}j1.jpg`, buffer);

  bot
    .sendPhoto(chatId, fs.createReadStream(`${userId}j1.jpg`))
    .then(() => {
      fs.unlink(`${userId}j1.jpg`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Image deleted successfully");
      });
    })
    .catch((error) => {
      console.error("Error sending photo:", error);
    });
}

async function generateJuma2(name, userId, chatId) {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  const image1 = await loadImage("img/juma2.jpg");

  canvas.width = image1.width;
  canvas.height = image1.height;
  ctx.drawImage(image1, 0, 0);

  let fontSize = 70;
  let text = name;
  let font = `${fontSize}px Arial`;
  const text_color = "#dda15e";

  const textWidth = ctx.measureText(text).width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height / 1.7;

  ctx.font = font;
  ctx.fillStyle = text_color;
  ctx.fillText(text, x, y);

  const buffer = canvas.toBuffer("image/jpeg");
  fs.writeFileSync(`${userId}j2.jpg`, buffer);

  bot
    .sendPhoto(chatId, fs.createReadStream(`${userId}j2.jpg`))
    .then(() => {
      fs.unlink(`${userId}j2.jpg`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Image deleted successfully");
      });
    })
    .catch((error) => {
      console.error("Error sending photo:", error);
    });
}

// ==========================================================================

function sendMessageClickStart(chatId) {
  const message = `👋 ASSALOMU ALAYKUM

😊 O'zingizga kerakli bo'limga kirib ismingizni rasmga yozdirib olishingiz mumkin ⤵️`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Ramazon", callback_data: "ramazon:tme" }],
        [{ text: "Juma", callback_data: "juma:tme" }],
      ],
    },
  };

  bot.sendMessage(chatId, message, options);
}

function clickRamazonButton(chatId, msg) {
  const message = `✍️ Ismingizni yozing:
    
⚠️ Eslatma: Ismingizni imlo xatolarsiz yozing, siz yozgan ism rasmga kiritiladi`;

  const options = {
    reply_markup: {
      inline_keyboard: [[{ text: "Ortga", callback_data: "ortga:tme" }]],
    },
  };

  state[msg.from.id] = "ramadan_mamiroff";

  bot.sendMessage(chatId, message, options);
}

function clickJumaButton(chatId, msg) {
  const message = `✍️ Ismingizni yozing:
    
⚠️ Eslatma: Ismingizni imlo xatolarsiz yozing, siz yozgan ism rasmga kiritiladi`;

  const options = {
    reply_markup: {
      inline_keyboard: [[{ text: "Ortga", callback_data: "ortga:tme" }]],
    },
  };

  state[msg.from.id] = "juma_mamiroff";

  bot.sendMessage(chatId, message, options);
}

//==========================================================

bot.on("text", (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [[{ text: "Ortga", callback_data: "ortga:tme" }]],
    },
  };

  if (msg.text === "/start") {
    sendMessageClickStart(chatId);
    console.log(state);
  } else {
    const currentState = state[msg.from.id];
    if (currentState === "ramadan_mamiroff") {
      generateRamadan1(msg.text, msg.from.id, chatId);
      generateRamadan2(msg.text, msg.from.id, chatId);
    } else if (currentState === "juma_mamiroff") {
      generateJuma1(msg.text, msg.from.id, chatId);
      generateJuma2(msg.text, msg.from.id, chatId);
    }
    bot.sendMessage(
      chatId,
      "Boshqa bolimga otish uchun tugmani bosing",
      options
    );
  }
});
//===========================================================

bot.on("callback_query", (msg) => {
  const data = msg.data;
  const chatId = msg.message.chat.id;

  if (data == "ramazon:tme") {
    // const lang = data.slice(0, 2);
    // updateLang(msg.from.id, lang);

    bot
      .deleteMessage(chatId, msg.message.message_id)
      .then(() => {
        console.log("Message deleted successfully.");
        clickRamazonButton(chatId, msg);
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
  }

  if (data == "juma:tme") {
    bot
      .deleteMessage(chatId, msg.message.message_id)
      .then(() => {
        console.log("Message deleted successfully.");
        clickJumaButton(chatId, msg);
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
  }

  if (data == "ortga:tme") {
    bot
      .deleteMessage(chatId, msg.message.message_id)
      .then(() => {
        console.log("Message deleted successfully.");
        sendMessageClickStart(chatId);
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
  }
});
