const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userData, thoughtData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // // Create empty array to hold the users
  // const users = [];

  // // Get some random assignment objects using a helper function that we imported from ./data
  // const assignments = getRandomAssignments(20);

  // // Loop 20 times -- add users to the users array
  // for (let i = 0; i < 20; i++) {
  //   const fullName = getRandomName();
  //   const first = fullName.split(' ')[0];
  //   const last = fullName.split(' ')[1];
  //   const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  //   users.push({
  //     first,
  //     last,
  //     github,
  //     assignments,
  //   });
  // }

  // Add users to the collection and await the results
  await User.collection.insertMany(userData);

  // Add thoughts to the collection and await the results
  // await Thought.collection.insertMany(thoughtData)
  
  // const thoughtSeed = await Thought.find()

  // await thoughtData.forEach(element => {
  //    User.findOneAndUpdate({username: element.username}, {$push:{thoughts: element._id}})
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(userData);
  // console.table(thoughtData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});