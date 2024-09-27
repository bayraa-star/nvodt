require('dotenv').config();

module.exports = {
    mongodbUri: process.env.MONGODB_URI,
    port: process.env.PORT,
    pcuser: process.env.PCUSER,
    telegram: {
        botToken: process.env.TELEGRAM_BOT_TOKEN,
        chatId: process.env.TELEGRAM_CHAT_ID
    },
    gpuThreshold: process.env.TEMP_THRESHOLD
};