const nostrService = require('../services/nostrService');
const userService = require('../services/userService');
const formatResponse = require('../utils/formatResponse');

module.exports = async (bot, msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  const user = await userService.getUserById(userId);
  if (user) {
    const relayRecommendations = await nostrService.getTopRelays(user.npub);
    bot.sendMessage(chatId, formatResponse(relayRecommendations));
  } else {
    bot.sendMessage(chatId, "You haven't set your Npub yet. Please set it using /setpub npub...");
  }
};
