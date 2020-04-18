const modify = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports = modify;