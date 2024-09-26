const { exec } = require('child_process');
const temperatureModel = require('../models/temperature');
const telegramService = require('./telegramService');
const config = require ('../config/config');

exports.checkTemperature = async () => {
    return new Promise((resolve, reject) => {
        exec('nvidia-smi --query-gpu=temperature.gpu --format=csv, noheader, nounits', async (error, stdout, stderr) => {
            if (error) {
                reject(`Error fetching GPU temperature: ${stderr}`);
                return;
            }

            const temperature = parseInt(stdout.trim(), 10);
            const createDate = new Date ();

            //Save in db
            await temperatureModel.create({ temperature, createDate });

            if (temperature > config.gpuThreshold) {
                const message = `Warning! GPU temperature is ${temperature}°C, exceeding ${config.gpuThreshold}°C`;
                await telegramService.sendMessage(message);
            }

            resolve({ temperature, message: 'Temperature checked'});
        });
    });
};