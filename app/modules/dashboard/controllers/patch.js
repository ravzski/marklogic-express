var User = require('../../models/user')

exports.post = function (req, res) {

  User.update(req.body).result( 
    function(response) {
      res.json({success: 200});
    }, 
    function(error) {
      console.log(JSON.stringify(error, null, 2));
    }
  );
}