const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.get('/aboutMe', indexController.aboutMe);
router.get('/contactMe', indexController.contactMe);
router.get('/project', indexController.project);
router.get('/services', indexController.services);

module.exports = router;
