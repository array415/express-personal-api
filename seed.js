// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var ausAnimals = [{
                   name: 'Koala',
                   fact: 'Sleeps 18 to 20 hours a day and smells like cough drops',
                   diet: 'Eucalyptus Leaves',
                   wiki: 'https://en.wikipedia.org/wiki/Koala',
                   gif: 'http://i.giphy.com/n2zM47kbTZP6o.gif'
                  },
                  {
                   name: 'Emu',
                   fact: 'Emus swallow large pebbles to help their stomach grind up food.',
                   diet: 'Omnivore',
                   wiki: 'https://en.wikipedia.org/wiki/Emu',
                   gif: 'http://i.giphy.com/gMe3JlwaLB5AI.gif'
                  },
                  {
                   name: 'Kangaroo',
                   fact: 'There are more kangaroos than humans in Australia',
                   diet: 'Herbivore',
                   wiki: 'https://en.wikipedia.org/wiki/Kangaroo',
                   gif: 'http://i.giphy.com/yTVe3xfjFyLIY.gif'
                  },
                  {
                    name: 'Quokka',
                    fact: 'You can go to jail for touching a Quokka',
                    diet: 'Herbivore',
                    wiki: 'https://en.wikipedia.org/wiki/Quokka',
                    gif: 'http://i.giphy.com/E6AKG0k1r2vx6.gif'
                  },
                  {
                   name: 'Echidna',
                   fact: 'One of two egg laying mammals',
                   diet: 'Insectivore',
                   wiki: 'https://en.wikipedia.org/wiki/Echidna',
                   gif: 'http://i.giphy.com/TcqxrHaty9tCw.gif'
                  },
                  {
                   name: 'Platypus',
                   fact: 'Two of two egg laying mammals',
                   diet: 'Carnivore',
                   wiki: 'https://en.wikipedia.org/wiki/Platypus',
                   gif: 'http://i.giphy.com/w8jZINLNDD4aI.gif'
                  },
                   {name: 'Drop Bear',
                    fact: 'Vegemite is a natural deterant',
                    diet: 'Tourists',
                    wiki: 'https://en.wikipedia.org/wiki/Drop_bear',
                    gif: 'http://i.giphy.com/nLAHHLbJWl6lW.gif'

                  }
                ];

db.Animal.remove({}, function(err, animals){
  console.log('removed all animals');
});

db.Animal.create(ausAnimals, function(err, ausAnimals){
  if(err){
    return "error thrown " + err;
  }
  console.log('created list of animals');
  process.exit();
});
