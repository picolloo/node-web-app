'use strict';
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/')

const fastify = require('fastify')({
  logger: true
});

fastify.get('/', async (req, res) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen(8080)
    fastify.log.info(`Server listenning on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()