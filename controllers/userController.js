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
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Add a friend
    addFriend(req, res) {
        User.findOneAndUpdate({_id: req.params.userId}, {$push:{friends: req.params.friendId}})
        .then(()=>User.findOneAndUpdate({_id: req.params.friendId}, {$push:{friends: req.params.userId}}))
        
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate({_id: req.params.userId}, {$pull:{friends: req.params.friendId}})
        .then(()=>User.findOneAndUpdate({_id: req.params.friendId}, {$pull:{friends: req.params.userId}}))
        
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a user and remove them from the course
    deleteUser(req, res) {
      User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>{
        
          return !user 
            ? res.status(404).json({ message: 'No such user exists' }) 
           : res.json({ message: 'User successfully deleted' })
            
            // : Thought.findOneAndUpdate(
            //     { username: user.username },
            //     { $pull: { users: req.params.userId } },
            //     { new: true }
            //   )
        })
        // .then((course) =>
        //   !course
        //     ? res.status(404).json({
        //         message: 'User deleted, but no courses found',
        //       })
        //     : res.json({ message: 'User successfully deleted' })
        // )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  
    // Add an assignment to a user
    addAssignment(req, res) {
      console.log('You are adding an assignment');
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { assignments: req.body } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Remove assignment from a user
    // removeAssignment(req, res) {
    //   User.findOneAndUpdate(
    //     { _id: req.params.userId },
    //     { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
    //     { runValidators: true, new: true }
    //   )
    //     .then((user) =>
    //       !user
    //         ? res
    //             .status(404)
    //             .json({ message: 'No user found with that ID :(' })
    //         : res.json(user)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
  };