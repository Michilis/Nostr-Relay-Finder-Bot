require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { handleStart, handleSetPub, handleGetRelays, handleUserInfo, handlePaidRelays, handleFreeRelays, handlePingRelay, handleCheckRelay } = require('./commands');
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Start Command
bot.onText(/\/start/, (msg) => handleStart(bot, msg));

// SetPub Command
bot.onText(/\/setpub (.+)/, (msg, match) => handleSetPub(bot, msg, match[1]));

// GetRelays Command
bot.onText(/\/getrelays/, (msg) => handleGetRelays(bot, msg));

// UserInfo Command
bot.onText(/\/userinfo(@[\w\d_]+)?( .+)?/, (msg, match) => handleUserInfo(bot, msg, match));

// PaidRelays Command
bot.onText(/\/paidrelays/, (msg) => handlePaidRelays(bot, msg));

// FreeRelays Command
bot.onText(/\/freerelays/, (msg) => handleFreeRelays(bot, msg));

// PingRelay Command
bot.onText(/\/ping (.+)/, (msg, match) => handlePingRelay(bot, msg, match[1]));

// CheckRelay Command
bot.onText(/\/checkrelay (.+)/, (msg, match) => handleCheckRelay(bot, msg, match[1]));

// Default fallback for unrecognized commands
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, "Sorry, I didn't understand that command. Use /help to see available commands.");
});
