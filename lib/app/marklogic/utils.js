var marklogic = require("marklogic");
var cfg = require('_/config');


exports.db = function() {
  return marklogic;
}

exports.q = function() {
  var q = marklogic.queryBuilder; 
  console.log(q);
  return q;
}