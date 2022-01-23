var express = require('express');
var Router = express.Router();
// var User = require('../models/user');

Router.route('/')
    .get((req, res) => {
        res.render('index.ejs')
    });

Router.route('/products')
    .get((req, res) => {
        res.render('products.ejs')
    })
Router.route('/signup')
    .get((req, res) => {
        res.render('registration.ejs')
    })
Router.route('/login')
    .get((req, res) => {
        res.render('login.ejs')
    })
module.exports = Router;