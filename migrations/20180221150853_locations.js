exports.up = function(knex, Promise) {
  return knex.schema.createTable("locations", table => {
    table.increments("id").primary();
    table.text("name");
    table.text("countryCode");
    table.text("url");
    table.text("country");
    table.text("parentid");
    table.text("placeType");
    table.text("woeid");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("locations");
};
