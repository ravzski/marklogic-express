var User = require('../../models/user')

exports.index = function (req, res) {

  User.get().stream().
    on("data", function(document) {
      res.json(document);
    }).
    on("error", function(error) {
      console.error(error)
    });

}