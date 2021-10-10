import etniaRouters from "./Etnia/etnia.routes";
import palavraRouters from "./Palavra/palavra.routes";
import linguaRouters from "./Lingua/lingua.routes";
import troncoRouters from "./Tronco/tronco.routes";
import dialetoRouters from "./Dialeto/dialeto.routes";
import idiomaRouters from "./Idioma/idioma.routes";
import localidadeRouters from "./Localidade/localidade.routes";

export function setUpRoutes(app) {
  app.use("/etnia", etniaRouters);
  app.use("/palavra", palavraRouters);
  app.use("/lingua", linguaRouters);
  app.use("/tronco", troncoRouters);
  app.use("/dialeto", dialetoRouters);
  app.use("/localidade", localidadeRouters);
  app.use("/idioma", idiomaRouters);
}
