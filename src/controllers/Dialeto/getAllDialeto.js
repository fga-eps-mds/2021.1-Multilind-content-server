import Dialeto from "../../models/Dialeto";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const { id_lingua, id_etnia } = request.query;
  if (!id_etnia && !id_lingua) {
    throw new HttpException(400, `Parâmetros inválidos - Dialeto - id_etnia: ${id_etnia}, id_lingua: ${id_lingua}`);
  }
  let query = {};
  id_lingua && (query.id_lingua = id_lingua);
  id_etnia && (query.id_etnia = id_etnia);
  const dialetosEncontrados = await Dialeto.searchAll(query);
  response.send(dialetosEncontrados);
}
