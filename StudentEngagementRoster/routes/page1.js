/**
 * Created by ps23 on 5/24/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('page1', { title: 'University Division Advising' });
});

/* Route the request coming from button click on page 1 to page 2*/
router.get('/page1', function(req, res, next) {
    console.log("Routing it to page 2");
    res.render('page2', { title: 'Pre-Semester Roster Review' });
});

/* Route the request coming from button click on page 1 to page 2*/
router.get('/page3', function(req, res, next) {
    console.log("Routing it to page 3");
    res.render('page3', { title: 'Pre-Semester Roster Review' });
});

module.exports = router;
