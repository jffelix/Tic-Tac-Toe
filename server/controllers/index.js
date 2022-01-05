const controllers = {
    getData: function(req, res) {
        res.status(200).send("Tic-Tac-Toe");
    }
}

module.exports = controllers;