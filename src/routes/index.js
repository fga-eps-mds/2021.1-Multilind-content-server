import etniaRouters from "./etnia/etnia.routes";

export function setUpRoutes(app) {
  app.use(etniaRouters);
}
