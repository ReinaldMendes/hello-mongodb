const Pet = require("../models/pet_models");

const store = async (req, resp) => {
  Pet.create(req.body);
  resp.json();
};
const index = async (req, resp) => {
  const content = Pet.find().exec();
  resp.json(content);
};
const show = async (req, resp) => {
  const content = Pet.findById(req.params.id).exec();
  resp.json(content);
};
const update = async (res, resp) => {
  Pet.findByIdAndUpdate(req.params.id, req.body).exec();
  resp.json();
};
const destroy = async (req, resp) => {
  Pet.findByIdAndDelete(req.params.id).exec();
  resp.json();
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
