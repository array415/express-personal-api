// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

var profile =
  {name: 'Aaron',
   github: 'https://github.com/array415',
   city: 'San Francisco',
   pets: [{name: 'Dottie', type: 'Chihuaha'},
          {name: 'Stormy aka. Little Fat', type: 'Siamese'}
         ]
   };

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
     // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/array415/express-personal-api", // CHANGE ME
    base_url: "https://secret-temple-93426.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/animals", description: "List all Australian animals"},
      {method: "GET", path: "/api/animals/:id", description: "Find one animal"}
       // CHANGE ME
    ]
  });
});

//get my profile
app.get('/api/profile', function (req, res) {
  res.json(profile);
});
//get all animals
app.get('/api/animals', function (req, res) {
  db.Animal.find(function(err, animals){
    console.log(animals);
    if(err){
      return "error " + err;
    }
    res.json(animals);
  });
});
// //get animal by id #
app.get('/api/animals/:_id', function (req, res){
  var animalId = req.params._id;
  db.Animal.findOne({_id: animalId}, function(err, animal){
    res.json(animal);
  });

});
// //add animals
// app.post('/api/animals', function (req, res){
//    ausAnimals.push({name: 'wow', test: 'testOne', id: '7'});  // change hard value to input values
//   res.json(ausAnimals);
// });
// //delete by id
// app.delete('/api/animals/:id', function (req, res){
//   res.send('deleted');
// });
//
// app.put('/api/animals/:id', function (req, res){
//
// });
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
