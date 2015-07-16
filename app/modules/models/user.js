var marklogic = require("marklogic");
var cfg = require('../../../config');
var db = marklogic.createDatabaseClient(cfg.connection);
var q = marklogic.queryBuilder;

var x =  require("../marklogic/utils");


var COLLECTION = ['users']

exports.get = function() {
  console.log("eeee");
  var x =  require("../marklogic/utils").q();

  return db.documents.query(
    x.where(
      x.byExample(
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

exports.find = function(uri) {
  return db.documents.query(uri);
}

exports.create = function(document) {
  document.collections = COLLECTION;
  return db.documents.write(document);
}

exports.update = function(document) {
  document.collections = COLLECTION;
  return db.documents.patch(document);
}

exports.update = function(document) {
  document.collections = COLLECTION;
  return db.documents.patch(document);
}

exports.remove = function(uri) {
  document.collections = COLLECTION;
  return db.documents.remove({uri: uri});
}

