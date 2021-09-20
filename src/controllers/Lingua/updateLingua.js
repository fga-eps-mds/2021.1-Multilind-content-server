import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function update(request, response) {
  const { nome } = request.body;
  if (!nome) {
    throw new HttpException(400, "Nome inválido - Lingua");
  }

  const nameAlreadyExists = await Lingua.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Lingua - ${nome}`);
  }

  const { id_lingua } = request.params;
  const idValido = await Lingua.searchById(id_lingua);

  if (!id_lingua || !idValido) {
    throw new HttpException(400, `ID inválido - Lingua - ID ${id_lingua}`);
  }

  await Lingua.editById({ nome }, id_lingua);

  const lingua = await Lingua.searchById(id_lingua);

  response.send(lingua);
}
