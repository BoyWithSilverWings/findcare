const esClient = require('./esClient');

const searchHospitals = function search(index, body) {
  return esClient.search({ index, body });
};

module.exports = searchHospitals;

