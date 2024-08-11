module.exports = {
  dbUri: process.env.MONGODB_URI,
  botToken: process.env.TELEGRAM_BOT_TOKEN,
  env: process.env.NODE_ENV || 'development'
};
