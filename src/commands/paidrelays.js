const relayService = require('../services/relayService');

module.exports = async (bot, msg) => {
  const chatId = msg.chat.id;

  const paidRelays = await relayService.getPaidRelays();
  bot.sendMessage(chatId, `Paid relays:\n${paidRelays.join('\n')}`);
};
