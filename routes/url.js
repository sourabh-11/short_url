const express = require('express');
const { handleShorturl,handleGetAnalytics } = require('../controllers/url')
const router = express.Router();

router.post('/',handleShorturl);

router.get('/analytics/:shortId',handleGetAnalytics)





module.exports = router;