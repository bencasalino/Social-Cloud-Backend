module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///social_cloud"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
