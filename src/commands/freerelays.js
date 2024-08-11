const relayService = require('../services/relayService');

module.exports = async (bot, msg) => {
  const chatId = msg.chat.id;

  const freeRelays = await relayService.getFreeRelays();
  bot.sendMessage(chatId, `Free relays:\n${freeRelays.join('\n')}`);
};
