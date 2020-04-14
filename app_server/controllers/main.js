/* GET home page */
module.exports.dashboard = function (req, res) {
    // index is the Jade view template to display
    res.render('index', { title: 'Dashboard' });
};

module.exports.projects = function (req, res) {
    res.render('index', { title: 'Projects' });
};

module.exports.subassemblies = function (req, res) {
    res.render('index', { title: 'Subassembly' });
};

module.exports.parts = function (req, res) {
    res.render('parts', {
        title: 'Parts Listing',
        pageHeader: {
            title: 'subasmbly Piece Parts',
            strapline: 'Here is a listing of your parts'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }],
    });
};