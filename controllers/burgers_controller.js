var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });
  
router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
    });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
    });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
console.log(req);
    burger.devour(req.params.id, function(result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
        });
});

router.put("/burgers/devoured/:id", function (req, res) {
    burger.regurgitate(req.params.id, function(result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
        });
});

  // Export routes for server.js to use.
  module.exports = router;

