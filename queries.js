const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table);
  },
  read(id, table) {
    return database(table)
      .where("id", id)
      .first();
  },
  createLocations(locations) {
    return database("locations")
      .insert(locations)
      .returning("*")
      .then(record => record[0]);
  },
  updateLocations(id, request) {
    return database("locations")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  deleteLocations(id) {
    return database("locations")
      .delete()
      .where("id", id);
  }
};
