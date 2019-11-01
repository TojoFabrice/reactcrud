const express = require('express');
const personneRoutes = express.Router();

// Require Personne model in our routes module
let Personne = require('./personne.model');

// Defined store route
personneRoutes.route('/add').post(function (req, res) {
  let personne = new Personne(req.body);
  personne.save()
    .then(personne => {
      res.status(200).json({'personne': 'personne in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
personneRoutes.route('/').get(function (req, res) {
    Personne.find(function(err, personnees){
    if(err){
      console.log(err);
    }
    else {
      res.json(personnees);
    }
  });
});

// Defined edit route
personneRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Personne.findById(id, function (err, personne){
      res.json(personne);
  });
});

//  Defined update route
personneRoutes.route('/update/:id').post(function (req, res) {
    Personne.findById(req.params.id, function(err, personne) {
    if (!personne)
      res.status(404).send("data is not found");
    else {
        personne.nom = req.body.nom;
        personne.age = req.body.age;
        personne.adress = req.body.adress;

        personne.save().then(personne => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
personneRoutes.route('/delete/:id').get(function (req, res) {
    Personne.findByIdAndRemove({_id: req.params.id}, function(err, personne){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = personneRoutes;