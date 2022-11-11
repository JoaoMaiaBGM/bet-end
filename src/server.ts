import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  const PORT = process.env.PORT || 3000;

  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source initialized");
    })
    .catch((err) => {
      console.log("Error during Data Source initialization", err);
    });

  app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
  });
})();
