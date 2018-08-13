const User = require('../models/User.js');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = '7e4f867ff7e3af6c53ae70f415b2ab4dc0fec486';
module.exports.controller = (app) => {
    passport.use(new LocalStrategy({
      usernameField: 'user',
      passwordField: 'password',     }, (email, password, done) => {
      User.getUserByEmail(email, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        User.comparePassword(password, user.password, (error, isMatch) => {
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false);
        });
        return true;
      })
    }))

  app.post('/users/register', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
      name,
      email,
      password,
    });
    User.createUser(newUser, (error, user) => {
      if (error) {
        res.status(422).json({
          message: 'Something went wrong. Please try again after some time!!',
        });
      }
      res.send({ user });
    })
  });


  app.post('/users/login', (req, res) => {
    passport.authenticate('local', { failureRedirect: '/users/login' }, (req, res) => {
      res.redirect('/');
    });
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user);
      });
    });
  });
}
