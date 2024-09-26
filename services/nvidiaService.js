const { exec } = require('child_process');
const telegramService = require('./telegramService');

exports.updateDrivers = async () => {
    return new Promise((resolve, reject) => {
        exec(`sudo apt update && sudo ubuntu-drivers autoinstall`, async (error, stdout, stderr) => {
            if (error) {
                const message = `NVIDIA driver update failed: ${stderr}`;
                await telegramService.sendMessage(message);
                reject(message);
                return;
            }

            const message = 'NVIDIA drivers updated successfully. Rebooting now.';
            await telegramService.sendMessage(message);

            //Reboot the system
            exec('sudo reboot', (error, stdout, stderr) => {
                if (error) {
                    reject(`Failed to reboot: ${stderr}`);
                }
                resolve('System rebooting...');
            });
        });
    });
};