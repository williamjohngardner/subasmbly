const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET dashboard page. */
router.get('/', ctrlMain.dashboard);

/* GET projects page. */
router.get('/projects', ctrlMain.projects);

/* GET subassemblies page. */
router.get('/subassemblies', ctrlMain.subassemblies);

/* GET parts page. */
router.get('/parts', ctrlMain.parts);

module.exports = router;
