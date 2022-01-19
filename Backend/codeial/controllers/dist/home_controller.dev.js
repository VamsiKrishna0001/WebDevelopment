"use strict";

var Post = require("../models/posts");

var User = require('../models/users');

module.exports.home = function (req, res) {
  // without using ejs we write in this way whether it is checking or not
  //return res.end('<h1>Express is in Codeial</h1>');
  //To use ejs
  // Post.find({},(err,posts)=>{
  //     return res.render('home',{
  //         title:"Codieal | Home",
  //         posts : posts
  //     });
  // })
  // populate the user of each post
  Post.find({}).populate('user').populate({
    path: 'comments',
    populate: {
      path: 'user'
    }
  }).exec(function (err, posts) {
    User.find({}, function (err, users) {
      return res.render('home', {
        title: "Home",
        posts: posts,
        all_users: users
      });
    });
  });
};