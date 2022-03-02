# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
This is an express app utilizing mongoDB and mongoose to create a Social Network API where you can create Users who can be updated, removed, friend each other, and have Thoughts and Reactions. Thoughts are linked to each user and can be updated and removed. Reactions are by users added onto Thoughts and can be added and deleted. Both Users and Thoughts can be found by all, or by single using the respective ids. When a user is deleted their respective thoughts are also deleted. This is purely a back end app with no front end.
## Table of Contents
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Credits](#credits)
- [License](#license)

## Usage
once you have Cloned the Repository,
with nodeJS installed run these commands in the integrated terminal.


```
npm i 
```
there are some seeded users that can be created, if desired, using 
```
 npm run seed
```
Then to start the app enter
```
npm run start
```
and because this is a back end only app, all routes must be used with Insomnia or a similar app.

## Demonstration
Start up command
![App Start Up](/images/startApp.png?raw=true)


User Routes

[![User Demonstration Video](./images/UserRoutes.gif)](https://drive.google.com/file/d/1lxw-RpUIh0vv0_OAKUPcH0rlDLsUZtXB/view)

Thought Routes

[![Thoughts Demonstration Video](./images/ThoughtRoutes.gif)](https://drive.google.com/file/d/12oh3mVoh_RouQXFV2RKk7lrlmvwzqUz_/view)

Reaction Routes

[![Thoughts Demonstration Video](./images/ReactionRoutes.gif)](https://drive.google.com/file/d/1ERgD9ZJsZS7DpQJJraP5kmVoLvT7yBWY/view)

## Credits

nodeJS
https://nodejs.org/en/  

npm
https://www.npmjs.com/

MongoDB
https://www.mongodb.com/

Mongoose
https://mongoosejs.com/

## License
      MIT License

      Copyright (c) [2022] [Spencer Nelson]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.