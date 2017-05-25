/**
 * Created by ps23 on 5/24/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('page1', { title: 'University Division Advising' });
});

module.exports = router;
