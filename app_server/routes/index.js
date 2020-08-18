const express = require('express');
const router = express.Router();
const assembly = require('./assembly');
const dashboard = require('./dashboard');
const finish = require('./finish');
const integration = require('./integration')
const material = require('./material')
const parts = require('./part');
const projects = require('./project');
const subassembly = require('./subassembly');
const vendor = require('./vendor');
const customer = require('./customer');

/* Dashboard API */
router.get('/dashboard', dashboard.get);

/* integrations API */
router.get('/integration', integration.get);
router.get('/integration/:id', integration.getById);
router.post('/integration', integration.create);
router.put('/integration/:id', integration.modify);
router.delete('/integration/:id', integration.remove);

/* Inventory/Assembly API */
router.get('/assembly', assembly.get);
router.get('/assembly/:id', assembly.getById);
router.post('/assembly', assembly.create);
router.put('/assembly/:id', assembly.modify);
router.delete('/assembly/:id', assembly.remove);

/* Inventory/Finishes API */
router.get('/finish', finish.get);
router.get('/finish/:id', finish.getById);
router.post('/finish', finish.create);
router.put('/finish/:id', finish.modify);
router.delete('/finish/:id', finish.remove);

/* Inventory/Parts API */
router.get('/material', material.get);
router.get('/material/:id', material.getById);
router.post('/material', material.create);
router.put('/material/:id', material.modify);
router.delete('/material/:id', material.remove);

/* Inventory/Parts API */
router.get('/part', parts.get);
router.get('/part/:id', parts.getById);
router.post('/part', parts.create);
router.put('/part/:id', parts.modify);
router.delete('/part/:id', parts.remove);

/* Inventory/Subassembly API */
router.get('/subassembly', subassembly.get);
router.get('/subassembly/:id', subassembly.getById);
router.post('/subassembly', subassembly.create);
router.put('/subassembly/:id', subassembly.modify);
router.delete('/subassembly/:id', subassembly.remove);

/* Projects API */
router.get('/project', projects.get);
router.get('/project/:id', projects.getById);
router.post('/project', projects.create);
router.put('/project/:id', projects.modify);
router.delete('/project/:id', projects.remove);

/* Sourcing/Customer API */
router.get('/customer', customer.get);
router.get('/customer/:id', customer.getById);
router.post('/customer', customer.create);
router.put('/customer/:id', customer.modify);
router.delete('/customer/:id', customer.remove); 

/* Sourcing/Vendor API */
router.get('/vendor', vendor.get);
router.get('/vendor/:id', vendor.getById);
router.post('/vendor', vendor.create);
router.put('/vendor/:id', vendor.modify);
router.delete('/vendor/:id', vendor.remove);

module.exports = router;
