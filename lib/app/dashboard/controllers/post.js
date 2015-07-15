var marklogic = require("marklogic");
var cfg = require('_/config');
var db = marklogic.createDatabaseClient(cfg.connection);
var q = marklogic.queryBuilder;
var User = require('../../models/user')

exports.post = function (req, res) {


  var documents = [
    { uri: '/gs/aardvark.json',
      content: {
        name: 'aardvark',
        kind: 'mammal',
        desc: 'The aardvark is a medium-sized burrowing, nocturnal mammal.'
      }
    },
    { uri: '/gs/bluebird.json',
      content: {
        name: 'bluebird',
        kind: 'bird',
        desc: 'The bluebird is a medium-sized, mostly insectivorous bird.'
      }
    },
    { uri: '/gs/cobra.json',
      content: {
        name: 'cobra',
        kind: 'mammal',
        desc: 'The cobra is a venomous, hooded snake of the family Elapidae.'
      }
    },
  ];

  console.log(req.body);
  User.create(req.body).result( 
    function(response) {
      res.json({success: 200});
    }, 
    function(error) {
      console.log(JSON.stringify(error, null, 2));
    }
  );
}