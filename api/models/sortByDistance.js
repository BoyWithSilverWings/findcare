const esClient = require('./esClient');

function sortByDistance(index, body) {
  return esClient.search({ index, body });
};

module.exports = sortByDistance;