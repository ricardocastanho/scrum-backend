const { buildServer } = require('./server')
const { logger } = require('./support/logger')

buildServer({ logger })
  .then(server => {
    return server.listen(process.env.PORT || 2121)
  })
  .then(({ url }) => {
    logger.info({ NODE_ENV: process.env.NODE_ENV }, `🚀  Server ready at ${url}`)
    process.send && process.send('ready')
  })
