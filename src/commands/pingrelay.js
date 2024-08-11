const relayService = require('../services/relayService');

module.exports = async (bot, msg, relayUrl) => {
  const chatId = msg.chat.id;

  const pingResult = await relayService.pingRelay(relayUrl);
  bot.sendMessage(chatId, `Ping result for ${relayUrl}: ${pingResult}ms`);
};
