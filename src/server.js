"use strict";
const mongoose = require("mongoose");
const fastify = require("fastify")({
  logger: true
});

mongoose
  .connect(
    "mongodb://localhost:27017/r&m",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

fastify.get("/", async (req, res) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await fastify.listen(8080);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
