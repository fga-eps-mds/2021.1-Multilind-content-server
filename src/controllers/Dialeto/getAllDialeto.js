import Dialeto from "../../models/Dialeto";

export async function getAll(request, response) {
  const { id_lingua, id_etnia } = request.query;
  let query = {};
  id_lingua && (query.id_lingua = id_lingua);
  id_etnia && (query.id_etnia = id_etnia);
  const dialetosEncontrados = await Dialeto.searchAll(query);
  response.send(dialetosEncontrados);
}
