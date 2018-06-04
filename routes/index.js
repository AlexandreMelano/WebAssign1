const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);

/*Route the aboutme, contact, project and services pages*/
router.get('/aboutMe', indexController.aboutMe);
router.get('/contactMe', indexController.contactMe);
router.get('/project', indexController.project);
router.get('/services', indexController.services);
router.get('/assign', indexController.assign);



module.exports = router;
