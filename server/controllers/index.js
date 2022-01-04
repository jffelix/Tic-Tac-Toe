const controllers = {
    getData: function(req, res) {
        res.status(200).send("Tic-Tac-Toe (Redux)");
    }
}

module.exports = controllers;