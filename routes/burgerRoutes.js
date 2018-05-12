const express = require("express");
const router = express.Router();
const _ = require("lodash");
const db = require("../models/index");

router.get("/", (req, res, next) => {
    db.Burger.findAll({}).then(burger => {
        let burgerObj = {
            burgers: burger
        };
        res.render("dashboard/index", burgerObj)
    });
});

router.post("/addBurger", (req, res, next) => {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(() => {
        res.redirect('/');
    }).catch(err => console.log(err));

});

router.put("/devour/:Id", (req, res, next) => {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.Id
        }
    }).then(() => {
        return db.Burger.findAll();
      })
      .then(burger => {
          let burgerObj = {
              burgers: burger
          };
          res.render("dashboard/index", burgerObj)
      })
      .catch(err => console.log(err));
});

module.exports = router;