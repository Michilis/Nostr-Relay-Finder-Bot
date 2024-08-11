const relayService = require('../services/relayService');

module.exports = async (bot, msg, relayUrl) => {
  const chatId = msg.chat.id;

  const uptime = await relayService.getRelayUptime(relayUrl);
  bot.sendMessage(chatId, `Uptime for ${relayUrl}: ${uptime}%`);
};
