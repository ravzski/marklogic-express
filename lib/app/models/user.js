var marklogic = require("marklogic");
var cfg = require('_/config');
var db = marklogic.createDatabaseClient(cfg.connection);
var q = marklogic.queryBuilder;

exports.get = function() {

  return db.documents.query(
    q.where(
      q.byExample(
        {
          gender: "male",
          age: { $gt: 25 },
          tags: ["ex"],
          $filtered: true
        }   
      )
    )
  );

}


exports.create = function(document) {
  return db.documents.write(document);
}

