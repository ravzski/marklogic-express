var User = require('../../models/user')

exports.index = function (req, res) {

  User.get()
    .result( function(results) { 
      res.json(results);
    });

}

