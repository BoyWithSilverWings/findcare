const constants = require("../constants");
const Hospitals = require("../models/Hospitals");

function suggestions(req, res) {
  const body = {
    _source: "suggest",
    suggest: {
      hospital: {
        prefix: req.body.q,
        completion: {
          field: "name.raw",
          size: 5,
          fuzzy: {
            fuzziness: 2
          }
        }
      }
    }
  };
  Hospitals.search(constants.INDEX, body).then(data => {
    const resData = data.suggest.hospital[0].options;
    res.status(200).json(data);
  });
}

function search(req, res) {
  const body = {
    size: 20,
    from: req.body.from || 0,
    query: {
      bool: {
        must: {
          multi_match: {
            "query": req.body.query,
            "fields": ["name", "address", "state", "location"]
          },
        },
        filter: {
          term: {
            "state": req.body.state ? req.body.state:'*'
          }
        }
      }
    }
  };
  Hospitals.search(constants.INDEX, body).then(data => {
    const response = [];
    if (!data.hits) {
      res.status(200).json({ message: "Data not found" });
    }
    data.hits.hits.forEach(hit => {
      response.push(hit._source);
    });
    res.status(200).json(response);
  });
}

function nearestHospital(req, res) {
  const body = {
    size: 20,
    from: req.body.from || 0,
    query: {},
    sort: {
      _geo_distance: {
        coordinates: req.body.query,
        order: "asc",
        unit: "km",
        distance_type: "plane"
      }
    }
  };
  Hospitals.search(constants.INDEX, body)
    .then(data => {
      const response = [];
      if (!data.hits) {
        res.status(200).json({ message: "Data not found" });
      }
      data.hits.hits.forEach(hit => {
        response.push(hit._source);
      });
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

module.exports = {
  suggestions,
  search,
  nearestHospital
};
