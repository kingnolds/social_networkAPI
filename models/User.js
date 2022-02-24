const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends:[
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
      }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// userSchema.virtual('friends',{
//     ref: 'User',
//     localField: '_id',
//     foreignField: 'friends',
 
//     justOne: false,
//  },{ toJSON: { virtuals: true } });

const User = model('user', userSchema);

module.exports = User;