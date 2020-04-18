const getById = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function (req, res) {
    getById(res, 200, { "status": "success" });
};