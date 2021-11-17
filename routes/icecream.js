var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();

/* GET bottle */

router.get('/', icecream_controlers.icecream_view_all_Page );

/* GET detail costume page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);

/* GET create costume page */
router.get('/create', icecream_controlers.icecream_create_Page);

module.exports = router;
