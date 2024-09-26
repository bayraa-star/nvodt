const gpuService = require('../services/gpuService');

exports.getGPUTemperature = async (req, res) => {
    try {
        const result = await gpuService.checkTemperature();
        res.status(200).json(result);
        console.log(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};