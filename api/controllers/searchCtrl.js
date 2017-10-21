const constants = require('../constants');
const searchHospitals = require('../models/searchHospitals');

function suggestions(req, res) {
  res.end('Done');
}

function search(req, res) {
  const body = {
    size: 20,
    from: req.body.from||0,
    query: {
      multi_match: {
        query: req.body.query,
        fields: ['name', 'location', 'discipline', 'address', 'state', 'district', 'specialities'],
        fuzziness: 2
      }
    }
  };
  searchHospitals(constants.INDEX, body).then((data)=>{
    res.status(200).json(data);
  })
}

module.exports = {
  suggestions,
  search
}