const express = require('express');
const bodyParser = require('body-parser');
const gpuRoutes = require('./routes/gpuRoutes');
const nvidiaRoutes =  require('./routes/nvidiaRoutes');
const config = require ('./config/config')
const telegramService = require('./services/telegramService'); //test
telegramService.sendMessage(`${config.pcuser} -> nvidia-smi failed. Proceeding reboot!`);//test

const app = express();

app.use(bodyParser.json());

app.use('/gpu', gpuRoutes); //Routes for GPU monitoring
app.use('/nvidia', nvidiaRoutes); //Routes for NVIDIA update

const port = config.port;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;