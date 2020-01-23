/* GET home page */
module.exports.dashboard = function(req, res) {
    // index is the Jade view template to display
    res.render('index', { title: 'Dashboard' });
};

module.exports.projects = function(req, res) {
    res.render('index', { title: 'Projects' });
};

module.exports.subassemblies = function(req, res) {
    res.render('index', { title: 'Subassembly' });
};

module.exports.parts = function(req, res) {
    res.render('parts', { title: 'Parts Listing' });
};