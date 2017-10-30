const fs = require("fs");
const esClient = require("../models/esClient");
const { MongoClient } = require("mongodb");
const { MONGO_URL } = require("../constants");

const bulkIndex = function bulkIndex(index, type, data) {
  const bulkBody = [];

  data.forEach(item => {
    bulkBody.push({
      index: {
        _index: index,
        _type: type
      }
    });

    bulkBody.push(item);
  });

  esClient
    .bulk({ body: bulkBody })
    .then(response => {
      let errorCount = 0;
      response.items.forEach(item => {
        if (item.index && item.index.error) {
          console.log(++errorCount, item.index.error);
        }
      });
      console.log(
        `Successfully indexed ${data.length -
          errorCount} out of ${data.length} items`
      );
    })
    .catch(console.err);
};

// only for initialising purposes
// all calls should be initiated through the module
const initialize = function test() {
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) throw err;
    db
      .collection("hospitals")
      .find(
        {},
        {
          pin: false,
          tele: false,
          fax: false,
          state_ID: false,
          district_ID: false
        }
      )
      .toArray((err, results) => {
        if (err) throw err;
        results.forEach(result => {
          result.id = result._id;
          delete result._id;
        });
        bulkIndex("findhospitals", "hospital", results);
      });
  });
};

initialize();

module.exports = {
  bulkIndex
};
