const mongoose = require("mongoose");

const todoTaskSchema = new mongoose.Schema({
  userIdentifier: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  profimg: {
    type: String,
  },
  mainimg: {
    type: Buffer,
  },
  location: {
    type: String,
  },
  caption: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("TodoTask", todoTaskSchema);

// https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039
