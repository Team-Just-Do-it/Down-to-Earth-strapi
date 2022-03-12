module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '525a849f02b62bb2cecf3061cda75439'),
  },
});
