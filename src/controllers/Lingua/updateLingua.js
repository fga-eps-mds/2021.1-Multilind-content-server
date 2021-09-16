import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function update(request, response) {
  const { body } = request;
  if (!body.nome) {
    throw new HttpException(400, "Nome inválido - Lingua");
  }

  const nameAlreadyExists = await Lingua.searchByName(body.nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Lingua - ${body.nome}`);
  }

  const { id_lingua } = request.params;
  const idValido = await Lingua.searchById(id_lingua);

  if (!id_lingua || !idValido) {
    throw new HttpException(400, `ID inválido - Lingua - ID ${id_lingua}`);
  }

  await Lingua.editById(body, id_lingua);

  const lingua = await Lingua.searchById(id_lingua);

  response.send(lingua);
}
