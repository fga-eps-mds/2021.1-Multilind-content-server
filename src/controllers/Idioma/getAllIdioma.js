import Idioma from "../../models/Idioma";

export async function getAll(request, response) {
  const { id_lingua, id_localidade } = request.query;
  let query = {};
  id_lingua && (query.id_lingua = id_lingua);
  id_localidade && (query.id_localidade = id_localidade);

  const idiomasEncontrados = await Idioma.searchAll(query);
  response.send(idiomasEncontrados);
}
