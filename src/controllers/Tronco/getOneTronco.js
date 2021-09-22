import Tronco from "../../models/Tronco";
import { HttpException } from "../../error/HttpException";

export async function getOne(request, response) {
  const { id_tronco } = request.params;

  if (!id_tronco) {
    throw new HttpException(400, `ID inválido - Tronco - ID ${id_tronco}`);
  }

  const troncoFound = await Tronco.searchById(id_tronco);
  if (!troncoFound) {
    throw new HttpException(
      404,
      `Tronco não encontrado - Tronco - ID ${id_tronco}`
    );
  }

  response.send(troncoFound);
}
