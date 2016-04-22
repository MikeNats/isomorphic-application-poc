'use strict';

export default (req, res) => { //search if user exist in DB
  User.find({email: req.body.email, passWord: req.body.passWord}, (err, docs) => {
    if (err) { //if DB error
      res.json({
        success: false
      });
    } else if (docs.length !== 0) { //if user exists, send user obj
      res.json(docs);
    } else { //if user don't exists save it
      res.json({
        success: false
      });
    }
  });
}