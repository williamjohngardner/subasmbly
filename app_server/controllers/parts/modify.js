const modify = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function (req, res) {
    modify(res, 200, { "status": "success" });
};