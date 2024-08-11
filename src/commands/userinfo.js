const userService = require('../services/userService');
const nostrService = require('../services/nostrService');

module.exports = async (bot, msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const input = match[2]?.trim();
  const usernameMention = match[1];

  if (!input && !usernameMention) {
    // Case 1: /userinfo
    const user = await userService.getUserById(userId);
    if (user) {
      const nostrInfo = await nostrService.getNostrInfo(user.npub);
      bot.sendMessage(chatId, formatUserInfo(nostrInfo));
    } else {
      bot.sendMessage(chatId, "You haven't set your Npub yet. Please set it using /setpub npub...");
    }
  } else if (input && validateNpub(input)) {
    // Case 2: /userinfo npub...
    const nostrInfo = await nostrService.getNostrInfo(input);
    bot.sendMessage(chatId, formatUserInfo(nostrInfo));
  } else if (usernameMention) {
    // Case 3: /userinfo @username
    const username = usernameMention.replace('@', '');
    const user = await userService.getUserByUsername(username);
    if (user) {
      const nostrInfo = await nostrService.getNostrInfo(user.npub);
      bot.sendMessage(chatId, formatUserInfo(nostrInfo));
    } else {
      bot.sendMessage(chatId, `No Npub data found for @${username}.`);
    }
  } else {
    bot.sendMessage(chatId, "Invalid command usage. Please provide a valid Npub or username.");
  }
};
