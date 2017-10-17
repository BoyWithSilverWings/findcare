const constants = require('../constants');

function suggestions(req, res) {
  res.end('Done');
}

function search(req, res) {
  let body = {
    size: 20,
    from: 0,
    query: {
      multi_match: {
        query: 'Lakeshore',
        fields: ['title', 'authors.*name'],
        fuzziness: 2
      }
    }
  };
}

module.exports = {
  suggestions,
  search
}