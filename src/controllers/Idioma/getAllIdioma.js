import Idioma from "../../models/Idioma";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const { id_lingua, id_localidade } = request.query;
  if (!id_localidade && !id_lingua) {
    throw new HttpException(400, `Parâmetros inválidos - Idioma - id_localidade: ${id_localidade}, id_lingua: ${id_lingua}`);
  }
  let query = {};
  id_lingua && (query.id_lingua = id_lingua);
  id_localidade && (query.id_localidade = id_localidade);
  const idiomasEncontrados = await Idioma.searchAll(query);
  response.send(idiomasEncontrados);
}
