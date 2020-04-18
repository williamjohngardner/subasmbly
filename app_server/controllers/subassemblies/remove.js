const remove = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports = remove;