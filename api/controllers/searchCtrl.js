const constants = require('../constants');
const Hospitals = require('../models/Hospitals');

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
        fields: ['name', 'location', 'discipline', 'address', 'state', 'district', 'specialities']
      }
    }
  };
  Hospitals.search(constants.INDEX, body).then((data)=>{
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
          "lat": 9.9312328,
          "lon": 76.26730409999999,
        },
        "order": "asc",
        "unit": "km",
        "distance_type": "plane"
      }
    }
  }
  Hospitals.search(constants.INDEX, body)
    .then((data) => {
      const response = [];
      if (!data.hits) {
        res.status(200).json({ message: 'Data not found' });
      }
      data.hits.hits.forEach((hit) => {
      response.push(hit._source);
    });
    res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = {
  suggestions,
  search,
  nearestHospital,
}