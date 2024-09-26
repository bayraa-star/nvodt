const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello from GPU Routes');
});

module.exports = router;  // Export the router
