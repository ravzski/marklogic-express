var User = require('../../models/user')

exports.destroy = function (req, res) {
  User.remove(req.body).result()
    .then(function success(response){
      res.json({success: 200});
    });
}