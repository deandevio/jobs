const User = require("../models/User");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getLogin = (req, res, next) => {
  res.render("login");
};

exports.getAbout = (req, res, next) => {
  res.render("about");
};

exports.getJobs = (req, res, next) => {
  res.render("jobs");
};

exports.getSignup = (req, res, next) => {
  res.render("signup");
};

exports.postSignup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).exec();
    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    res.status(200).json({ success: true, user: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: `The user ${user.email} with the id of ${user.id} is deleted` });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
