const esClient = require('./esClient');

class Hospitals {
  static search(index, body) {
    return esClient.search({ index, body });
  }
}

module.exports = Hospitals;