const express = require('express');
const router = express.Router();
// const ctrlMain = require('../controllers/main');
const dashboard = require('../controllers/dashboard')
const parts = require('../controllers/parts');
const projects = require('../controllers/projects');
const subassemblies = require('../controllers/subassemblies');

/* Dashboard API */
router.get('/', dashboard.get);

/* Projects API */
router.get('/projects', projects.get);
router.get('/projects/:id', projects.getById);
router.post('/projects', projects.create);
router.put('/projects/:id', projects.modify);
router.delete('/projects/:id', projects.remove);

/* Subassemblies API */
router.get('/subassemblies', subassemblies.get);
router.get('/subassemblies/:id', subassemblies.getById);
router.post('/subassemblies', subassemblies.create);
router.put('/subassemblies/:id', subassemblies.modify);
router.delete('/subassemblies/:id', subassemblies.remove);

/* Parts API */
router.get('/parts', parts.get);
router.get('/parts/:id', parts.getById);
router.post('/parts', parts.create);
router.put('/parts/:id', parts.modify);
router.delete('/parts/:id', parts.remove);

module.exports = router;
