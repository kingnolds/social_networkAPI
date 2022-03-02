const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Add users to the collection and await the results
  await User.collection.insertMany(userData);

  console.table(userData);
  // console.table(thoughtData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});