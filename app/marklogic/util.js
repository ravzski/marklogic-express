var marklogic = require("marklogic");
var cfg = require('../../../config');


exports.db = function() {
  return marklogic;
}

exports.q = function() {
  var q = marklogic.queryBuilder; 
  console.log(q);
  console.log("00000");
  return q;
}