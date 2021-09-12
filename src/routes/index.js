import etniaRouters from "./Etnia/etnia.routes";

export function setUpRoutes(app) {
  app.use("/etnia", etniaRouters);
}
