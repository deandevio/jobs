const mongoose = require("mongoose");

const DB_CONNECT = async () => {
  const db = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log(`Successfully connected to mongodb on ${db.connection.host}`.cyan.bold);
};

module.exports = DB_CONNECT;
