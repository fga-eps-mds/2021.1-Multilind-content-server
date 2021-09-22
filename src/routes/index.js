import etniaRouters from "./Etnia/etnia.routes";
import palavraRouters from "./Palavra/palavra.routes";
import linguaRouters from "./Lingua/lingua.routes";

export function setUpRoutes(app) {
  app.use("/etnia", etniaRouters);
  app.use("/palavra", palavraRouters);
  app.use("/lingua", linguaRouters);
  app.use("/teste", (req, res) => res.send("ta funcionando"));
}
