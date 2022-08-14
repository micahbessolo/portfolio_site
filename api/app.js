const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

//this is to process environmental variables
//config gets info from .env
require('dotenv').config();

// 
const port = process.env.PORT || '3010';

// Load middleware
app.use(bodyParser.json());

// Cors Header Middleware
app.use(function(req, res, next) {
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Load in the mongoose models/schemas
const { Feed } = require('./db/models/feed.model');

// GET /feeds
app.get('/feeds', (req, res) => {
  // return all the feeds
  Feed.find({}).then((feeds) => {
    res.send(feeds);
  });
})

// POST /feeds
app.post('/feeds', (req, res) => {
  // to create a new feed with contact information
  // The feed info will be passed in via the JSON request body
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  let newFeed = new Feed({
    name, email, message
  });
  newFeed.save().then((listDoc) => {
    // the feed document is returned including id
    res.send(listDoc);
  })
});

// DELETE /feeds/:id
app.delete('/feeds/:id', (req, res) => {
  // to delete the specified feed (document with id in the URL)
  Feed.findOneAndRemove({
    _id: req.params.id
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  })
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
})
