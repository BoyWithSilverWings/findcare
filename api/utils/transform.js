const fs = require('fs');

const articlesRaw = fs.readFileSync('hospital.json');
const articles = JSON.parse(articlesRaw);

articles.forEach(item => {
  delete item.no;
});

fs.writeFileSync('hospital.json', JSON.stringify(articles));