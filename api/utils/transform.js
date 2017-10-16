const fs = require('fs');

const articlesRaw = fs.readFileSync('hospital.json');
const articles = JSON.parse(articlesRaw);

articles.forEach(item => {
  const keys = Object.keys(item);
  keys.map((key)=>{
    if (!key === 'coordinates') {
      item[key] = item[key].trim();
    }
    switch(item[key]) {
      case '0':
      case 'NA':
      case '  ':
      case '':
      case 'Error':
        delete item[key];
        break;
      default:
        ;
    }
    return [];
  })
});

fs.writeFileSync('hospital.json', JSON.stringify(articles));