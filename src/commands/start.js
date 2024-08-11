module.exports = (bot, msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome to Nostr Relay Finder! Use /setpub to set your Npub and /userinfo to see user details.");
};
