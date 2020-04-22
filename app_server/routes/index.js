const express = require('express');
const router = express.Router();
// const ctrlMain = require('../controllers/main');
const dashboard = require('./dashboard')
const parts = require('./part');
const projects = require('./project');
const subassembly = require('./subassembly');

/* Dashboard API */
router.get('/', dashboard.get);

/* Assembly API */
router.get('/assembly', subassembly.get);
router.get('/assembly/:id', subassembly.getById);
router.post('/assembly', subassembly.create);
router.put('/assembly/:id', subassembly.modify);
router.delete('/assembly/:id', subassembly.remove);

/* Parts API */
router.get('/part', parts.get);
router.get('/part/:id', parts.getById);
router.post('/part', parts.create);
router.put('/part/:id', parts.modify);
router.delete('/part/:id', parts.remove);

/* Projects API */
router.get('/project', projects.get);
router.get('/project/:id', projects.getById);
router.post('/project', projects.create);
router.put('/project/:id', projects.modify);
router.delete('/project/:id', projects.remove);

/* Purchase API */
router.get('/purchase', purchase.get);
router.get('/purchase/:id', purchase.getById);
router.post('/purchase', purchase.create);
router.put('/purchase/:id', purchase.modify);
router.delete('/purchase/:id', purchase.remove);

/* Subassembly API */
router.get('/subassembly', subassembly.get);
router.get('/subassembly/:id', subassembly.getById);
router.post('/subassembly', subassembly.create);
router.put('/subassembly/:id', subassembly.modify);
router.delete('/subassembly/:id', subassembly.remove);

/* Supply API */
router.get('/supply', supply.get);
router.get('/supply/:id', supply.getById);
router.post('/supply', supply.create);
router.put('/supply/:id', supply.modify);
router.delete('/supply/:id', supply.remove);

module.exports = router;
