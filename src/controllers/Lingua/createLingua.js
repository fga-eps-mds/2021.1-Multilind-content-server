import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { body } = request;
  if (!body.nome) {
    throw new HttpException(400, `Nome inválido - Lingua - ${body.nome}`);
  }

  const nameAlreadyExists = await Lingua.searchByName(body.nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Lingua - ${body.nome}`);
  }

  const lingua = await Lingua.create({
    nome: body.nome,
  });

  response.send(lingua);
}
