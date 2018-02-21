exports.seed = function(knex, Promise) {
  return knex("locations")
    .del()
    .then(function() {
      return knex("locations").insert([
        {
          name: "United States",
          countryCode: "US",
          url: "http://where.yahooapis.com/v1/place/23424977",
          country: "United States",
          parentid: 1,
          placeType: { code: 12, name: "Country" },
          woeid: 23424977
        },
        {
          name: "San Francisco",
          countryCode: "US",
          url: "http://where.yahooapis.com/v1/place/2487956",
          country: "United States",
          parentid: 23424977,
          placeType: { code: 7, name: "Town" },
          woeid: 2487956
        },
        {
          name: "Bangkok",
          countryCode: "TH",
          url: "http://where.yahooapis.com/v1/place/1225448",
          country: "Thailand",
          parentid: 23424960,
          placeType: { code: 7, name: "Town" },
          woeid: 1225448
        }
      ]);
    });
};
