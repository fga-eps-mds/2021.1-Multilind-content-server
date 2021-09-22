import Tronco from "../../models/Tronco";
import { HttpException } from "../../error/HttpException";

export async function update(request, response) {
  const { nome } = request.body;
  if (!nome) {
    throw new HttpException(400, "Nome inválido - Tronco");
  }

  const nameAlreadyExists = await Tronco.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Tronco - ${nome}`);
  }

  const { id_tronco } = request.params;
  const idValido = await Tronco.searchById(id_tronco);

  if (!id_tronco || !idValido) {
    throw new HttpException(400, `ID inválido - Tronco - ID ${id_tronco}`);
  }

  await Tronco.editById({ nome }, id_tronco);

  const tronco = await Tronco.searchById(id_tronco);

  response.send(tronco);
}
