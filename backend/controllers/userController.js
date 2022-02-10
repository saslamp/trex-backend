const pg = require("pg");

const conString = process.env.CONN;
const client = new pg.Client(conString);
client.connect(function(err) {
    if (err) {
        return console.error("could not connect to postgres", err);
    }
});

const getUsers = (req, res) => {
    client.query("select * from users", function(err, result) {
        if (err) {
            return console.error("error running query", err);
        }
        res.status(200).json(result.rows);
        client.end();
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    client.query('SELECT * FROM users WHERE id = $1', [id], (err, result) => {
        if (err) {
            return console.error('error', err);
        }
        res.status(200).json(result.rows);
    })
}

module.exports = {
    getUsers,
    getUserById
};