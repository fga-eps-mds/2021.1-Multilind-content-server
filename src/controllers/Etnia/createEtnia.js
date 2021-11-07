import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

/* istanbul ignore file */

export async function create(request, response) {
  const { nome } = request.body;
  if (!nome) {
    throw new HttpException(400, `Nome inválido - Etnia - ${nome}`);
  }

  const nameAlreadyExists = await Etnia.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Etnia - ${nome}`);
  }

  const etnia = await Etnia.create({
    nome,
  });

  response.send(etnia);
}
