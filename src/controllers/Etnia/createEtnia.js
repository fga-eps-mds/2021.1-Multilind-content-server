import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { body } = request;
  if (!body.nome) {
    throw new HttpException(400, "Nome inválido - Etnia");
  }

  const nameAlreadyExists = await Etnia.searchByName(body.nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, "Nome já existente - Etnia");
  }

  const etnia = await Etnia.create(body);

  response.send(etnia);
}
