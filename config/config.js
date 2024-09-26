module.exports = {
    mongodbUri: process.env.MONGODB_URI,
    port: process.env.PORT,
    telegram: {
        botToken: process.env.TELEGRAM_BOT_TOKEN,
        chatId: process.env.TELEGRAM_CHAT_ID
    },
    gpuThreshold: process.env.TEMP_THRESHOLD
};