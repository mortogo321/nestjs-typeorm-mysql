export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: process.env.DATABASE_DRIVER,
  },
});
