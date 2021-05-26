const express = require("express");
const router = express.Router();
const { getLogin, getIndex, getAbout, getJobs, getSignup, postSignup, getUser, deleteUser, getAllUsers } = require("../controllers/controllers");

router.route("/").get(getIndex);
router.route("/login").get(getLogin);
router.route("/about").get(getAbout);
router.route("/jobs").get(getJobs);
router.route("/signup").get(getSignup).post(postSignup);
router.route("/user/:id").get(getUser).delete(deleteUser);
router.route("/users").get(getAllUsers);

module.exports = router;
