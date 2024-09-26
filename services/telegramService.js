const axios = require('axios');
const config = require('../config/config');

exports.sendMessage = async (message) => {
    const url = `https://api.telegram.org/bot${config.telegram.botToken}/sendMessage`;
    const params = {
        chat_id: config.telegram.chatId,
        text: message
    };

    try {
        await axios.post(url, params);
        console.log('Message sent to Telegram:', message);
    } catch (error) {
        console.error('Error sending message to Telegram:', error.message);
        throw error;
    }
}