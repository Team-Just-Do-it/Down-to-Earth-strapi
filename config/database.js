module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "reNewServer"),
      user: env("DATABASE_USERNAME", "root"),
      password: process.env.DATABASE_PASSWORD,
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
