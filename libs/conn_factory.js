const pg = require('pg');
const conString = 'postgres://postgres:12345@localhost:5432/ServiceEcommerceDBNC';

const mongoose = require('mongoose');
const url = "mongodb://localhost/service-ecommerce-dbnc";

const neo4j = require('neo4j-driver').v1;

let single_connection;

function factory(type_conn) {
  if(type_conn == 1) single_connection = pg.connect(conString);
  else if(type_conn == 2) single_connection = mongoose.connect(url);
  else if(type_conn == 3) {
    const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic("neo4j", "12345"));
    single_connection = driver.session();
  }

  return single_connection;
}

module.exports = () => {
  return factory;
}
