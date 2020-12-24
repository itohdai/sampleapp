module.exports = (/*options*/) => {
  // Use options.server to access http.Server. Example with socket.io:
  //     const io = require('socket.io')(options.server)
  const app = require('express')()

  app.get('/', (req, res) => {
    // Use req.log (a `pino` instance) to log JSON:
    req.log.info({message: 'Hello from Appsody! I Love Appsody.'});
    res.send('Hello from Appsody! I Love Appsody.');
  });

  return app;
};
