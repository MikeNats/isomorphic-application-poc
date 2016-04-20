'use strict';

export default (app) => {
  app.get('/sign-in', function(req, res) {
    console.log(req, res);
  });
}

