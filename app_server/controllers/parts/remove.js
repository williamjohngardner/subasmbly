const remove = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function (req, res) {
    remove(res, 200, { "status": "success" });
};