const create = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function (req, res) {
    create(res, 200, { "status": "success" });
};