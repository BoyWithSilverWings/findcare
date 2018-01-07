const constants = require("../constants");
const Hospitals = require("../models/Hospitals");

function getHospital(req, res) {
  console.log(req.params.id);
  Hospitals.get(req.params.id).then((result) => {
    res.status(200).json(result);
  });
}

module.exports = {
  getHospital
}