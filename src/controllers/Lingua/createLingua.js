import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { nome } = request.body;
  if (!nome) {
    throw new HttpException(400, `Nome inválido - Lingua - ${nome}`);
  }

  const nameAlreadyExists = await Lingua.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Lingua - ${nome}`);
  }

  const lingua = await Lingua.create({
    nome,
  });

  response.send(lingua);
}
