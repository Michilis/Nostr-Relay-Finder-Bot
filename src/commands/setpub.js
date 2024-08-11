const userService = require('../services/userService');
const validateNpub = require('../utils/validateNpub');

module.exports = async (bot, msg, npub) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (!npub) {
    return bot.sendMessage(chatId, "Please provide a valid Npub. Usage: /setpub npub...");
  }

  const valid = validateNpub(npub);
  if (!valid) {
    return bot.sendMessage(chatId, "The Npub you provided is invalid. Please try again.");
  }

  await userService.saveUserNpub(userId, npub);
  bot.sendMessage(chatId, `Your Npub has been set: ${npub}`);
};
