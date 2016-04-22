'use strict';

import User from '../../schema/userModel';

let newUser = (req) => { //return new user
  return new User({
    userName: req.body.userName,
    email: req.body.email,
    passWord: req.body.passWord,
    projects: []
  });
};

export default (docs) => {
  newUser(req).save((err) => { // Store user
    if (err) { //if error
      throw err;
    }
  });
}