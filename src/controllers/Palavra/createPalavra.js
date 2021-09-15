import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { body } = request;
  if (!body.nome) {
    throw new HttpException(400, `Palavra inválida - Palavra - ${body.nome}`);
  }

  const nameAlreadyExists = await Palavra.searchByName(body.nome);
  if (nameAlreadyExists) {
    throw new HttpException(
      400,
      `Palavra já existente - Palavra - ${body.nome}`
    );
  }

  const palavra = await Palavra.create({
    nome: body.nome,
  });

  response.send(palavra);
}
