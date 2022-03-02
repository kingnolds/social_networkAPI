const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user,

          })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //update user by id
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { username: req.body.username })
      .select('-__v')
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user,

          })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Add a friend
  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $push: { friends: req.params.friendId } })
      .then(() => User.findOneAndUpdate({ _id: req.params.friendId }, { $push: { friends: req.params.userId } }))

      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a Friend
  deleteFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } })
      .then(() => User.findOneAndUpdate({ _id: req.params.friendId }, { $pull: { friends: req.params.userId } }))

      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then(async (user) => {
        await Thought.deleteMany({ username: user.username })
        console.log(user.username)
        console.log('Associated Thoughts Deleted')

        return !user
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json({ message: 'User successfully deleted' })

      })

      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


};