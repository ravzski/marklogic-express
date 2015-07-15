exports.connection = function() {
  var conn =  {
    database: "Documents", // Each connection can specify its own database
    host: "localhost",     // The host against which queries will be run
    port: 8000,            // By default port 8000 accepts Client API requests
    user: "admin",        // A user with at least the rest-writer role
    password: "admin",  // Probably not your password
    authType: "DIGEST"     // The default auth
  }
  return conn;
}

