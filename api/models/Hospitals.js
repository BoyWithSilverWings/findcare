const esClient = require('./esClient');
const mongo = require('mongodb');
const constant = require('../constants');

class Hospitals {
  static search(index, body) {
    return esClient.search({ index, body });
  }

  static get(id) {
    return new Promise((resolve, reject)=> {
      mongo.MongoClient.connect(constant.MONGO_URL, (err, db) => {
        if (err) throw err;
        db.collection("hospitals").findOne({ '_id': new mongo.ObjectID(id) }, (error, result) => {
          if (error) {
            reject(error);
            throw error;
          }
          db.close();
          resolve(result);
        });
      });
    });
  }
}

module.exports = Hospitals;