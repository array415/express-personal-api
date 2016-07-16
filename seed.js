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

var ausAnimals = [{name: 'Koala',
                   test: 'testOne',
                   id: 1
                   },
                  {name: 'Emu',
                   test: 'testOne',
                   id: 2},
                  {name: 'Kangaroo',
                   test: 'testOne',
                   id: 3,
                   img: 'https://en.wikipedia.org/wiki/Kangaroo#/media/File:Kangur.rudy.drs.jpg'},
                  {name: 'Quokka',
                   test: 'testOne',
                   id: 4},
                  {name: 'Echidna',
                   test: 'testOne',
                   id: 5,
                   img: 'https://en.wikipedia.org/wiki/Echidna#/media/File:Long-beakedEchidna.jpg'},
                  {name: 'Wallaby',
                   test: 'testOne',
                   id: 6,
                   img: 'https://en.wikipedia.org/wiki/Wallaby#/media/File:Macropus_agilis.jpg'}
                ];

db.Animal.remove({}, function(err, animals){
  console.log('removed all animals');
})
db.Animal.create(ausAnimals, function(err, ausAnimals){
  if(err){
    return "error thrown " + err;
  }
  console.log('created list of animals');
  process.exit();
});
