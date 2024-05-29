const db = require('../config/dbConfig');

exports.getColumns = (req, res) => {
  const query = 'SHOW COLUMNS FROM users';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};