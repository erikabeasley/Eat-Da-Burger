// Import express create express route
const express = require('express');
const router = express.Router();

const burger = require('../models/burgers.js');

// Routes
router.get('/', (req, res) => {
    burger.all((data) => {
      let hbsObj = {
        burgers: data
      };
      console.log(hbsObj)
      res.render('index', hbsObj);
    });
  });
  
  // Make new burger
  router.post('/api/burgers', (req, res) => {
    burger.create(
      ['burger_name', 'isDevoured'],
      [req.body.burger_name, req.body.isDevoured],
      (result) => {
 
        res.json({ id: result.insertId });
      }
    );
  });
  
  router.put('/api/burgers/:id', (req, res) => {
    let condition = `id = ${req.params.id}`;
  
    burger.update(
      {
        isDevoured: req.body.isDevoured
      },
      condition,
      (result) => {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else res.status(200).end();
      }
    );
  
    res.end();
  });

// Export router for server
module.exports = router;