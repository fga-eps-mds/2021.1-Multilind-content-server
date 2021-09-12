import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { body } = request;
  if (!body.nome) {
    throw new HttpException(400, `Nome inválido - Etnia - ${body.nome}`);
  }

  const nameAlreadyExists = await Etnia.searchByName(body.nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Etnia - ${body.nome}`);
  }

  const etnia = await Etnia.create({
    nome: body.nome,
  });

  response.send(etnia);
}
