import etniaRouters from "./Etnia/etnia.routes";
import palavraRouters from "./Palavra/palavra.routes";
import linguaRouters from "./Lingua/lingua.routes";
import localidadeRouters from "./Localidade/localidade.routes";
import faladaRouters from "./Falada/falada.routes";

export function setUpRoutes(app) {
  app.use("/etnia", etniaRouters);
  app.use("/palavra", palavraRouters);
  app.use("/lingua", linguaRouters);
  app.use("/localidade", localidadeRouters);
  app.use("/falada", faladaRouters);
}
