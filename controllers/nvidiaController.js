const nvidiaService = require('../services/nvidiaService');

exports.updateNvidiaDrivers = async (req, res) => {
    try {
        const result = await nvidiaService.updateDrivers();
        res.status(200).json(result);
    } catch (error) { 
        res.status(500).json({ msg: error.message })
    }
}