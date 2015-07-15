var marklogic = require("marklogic");
var conn = require("../marklogic/connector.js").connection;
  var conn =  {
    database: "Documents", // Each connection can specify its own database
    host: "localhost",     // The host against which queries will be run
    port: 8000,            // By default port 8000 accepts Client API requests
    user: "admin",        // A user with at least the rest-writer role
    password: "admin",  // Probably not your password
    authType: "DIGEST"     // The default auth
  }
var db = marklogic.createDatabaseClient(conn);
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
  )

}
