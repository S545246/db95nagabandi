var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();

/* GET bottle */

router.get('/', icecream_controlers.icecream_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('icecream', { title: 'Search Results icecream' });
});

// GET request for one icecream.
router.get('/icecream/:id', icecream_controlers.icecream_detail);

module.exports = router;
