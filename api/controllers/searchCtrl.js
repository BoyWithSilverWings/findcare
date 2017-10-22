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
    const response = [];
    if(!data.hits) {
      res.status(200).json({message: 'Data not found'});
    }
    console.log(data.hits.hits);
    data.hits.hits.forEach((hit)=>{
      response.push(hit._source);
    });
    res.status(200).json(response);
  });
}

function nearestHospital(req, res) {
  const body = {
    size: 20,
    from: req.body.from||0,
    query: {

    },
    sort: {
      "_geo_distance": {
        "coordinates": {
          "lat": 10.177,
          "lon": 76.210
        },
        "order": "asc",
        "unit": "km",
        "distance_type": "plane"
      }
    }
  }
  searchHospitals(constants.INDEX, body).then((data) => {
    const response = [];
    if (!data.hits) {
      res.status(200).json({ message: 'Data not found' });
    }
    console.log(data.hits.hits);
    data.hits.hits.forEach((hit) => {
      response.push(hit._source);
    });
    res.status(200).json(response);
  })
}

module.exports = {
  suggestions,
  search,
  nearestHospital,
}