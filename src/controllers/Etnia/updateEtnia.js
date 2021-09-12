import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

export async function update(request, response) {
  const { body } = request;
  if (!body.nome) {
    throw new HttpException(400, "Nome inválido - Etnia");
  }

  const nameAlreadyExists = await Etnia.searchByName(body.nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Etnia - ${body.nome}`);
  }

  const { id_etnia } = request.params;
  const idValido = await Etnia.searchById(id_etnia);

  if (!id_etnia || !idValido) {
    throw new HttpException(400, `ID inválido - Etnia - ID ${id_etnia}`);
  }

  await Etnia.editById(body, id_etnia);

  const etnia = await Etnia.searchById(id_etnia);

  response.send(etnia);
}
