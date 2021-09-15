import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function update(request, response) {
  const { body } = request;
  if (!body.nome) {
    throw new HttpException(400, `Palavra inválida - Palavra ${body.nome}`);
  }

  const nameAlreadyExists = await Palavra.searchByName(body.nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Palavra já existente - Palavra ${body.nome}`);
  }

  const { id_palavra } = request.params;
  const idValido = await Palavra.searchById(id_palavra);

  if (!id_palavra || !idValido) {
    throw new HttpException(400, `ID inválido - Palavra - ID ${id_palavra}`);
  }

  await Palavra.editById(body, id_palavra);

  const palavra = await Palavra.searchById(id_palavra);

  response.send(palavra);
}
