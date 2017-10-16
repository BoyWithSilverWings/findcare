const fs = require('fs');
const esClient = require('../controllers/esClient');

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

  esClient.bulk({body: bulkBody})
  .then(response => {
    let errorCount = 0;
    response.items.forEach(item => {
      if (item.index && item.index.error) {
        console.log(++errorCount, item.index.error);
      }
    });
    console.log(`Successfully indexed ${data.length - errorCount} out of ${data.length} items`);
  })
  .catch(console.err);
};

// only for testing purposes
// all calls should be initiated through the module
const test = function test() {
  const articlesRaw = fs.readFileSync('hospital.json');
  const articles = JSON.parse(articlesRaw);
  console.log(`${articles.length} items parsed from data file`);
  bulkIndex('hospital', 'article', articles);
};

test();

module.exports = {
  bulkIndex
};

