const server = require("./server");

const mongoDb = require("./lib/mongoDb");
const configEnv = require("./config/config");

(async () => {
  // Connect to MongoDB
  await mongoDb(configEnv.mongoose.url);

  server.listen().then(({ url }) => {
    console.log("Server listening at: " + url);
  });
})();
