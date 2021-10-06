import Dialeto from "../../models/Dialeto";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { id_lingua, id_etnia } = request.body;
  if (!id_etnia || !id_lingua) {
    throw new HttpException(400, `Parâmetros inválidos - Dialeto - id_etnia: ${id_etnia}, id_lingua: ${id_lingua}`);
  }
  const dialeto = await Dialeto.create({
    id_etnia, id_lingua
  });

  response.send(dialeto);
}
