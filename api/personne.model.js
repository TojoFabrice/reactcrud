const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Personne = new Schema({
  nom: {
    type: String
  },
  age: {
    type: Number
  },
  adress: {
    type: String
  }
},{
    collection: 'personne'
});

module.exports = mongoose.model('Personne', Personne);