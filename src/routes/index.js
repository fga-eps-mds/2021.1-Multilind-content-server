const etniaRouters = require('./etnia/etnia.routes');

export function setUpRoutes(app) {
  app.use(etniaRouters);
}
