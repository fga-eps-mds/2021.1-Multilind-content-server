import Tronco from "../../models/Tronco";
import { HttpException } from "../../error/HttpException";

export async function getTroncoByLang(request, response) {
  const { id_lingua } = request.params;

  if (!id_lingua) {
    throw new HttpException(400, `ID inválido - ID Lingua - ${id_lingua}`);
  }

  const troncoFound = await Tronco.getTrunkByLanguage(id_lingua);
  if (!troncoFound) {
    throw new HttpException(
      404,
      `Tronco não encontrado - ID Lingua - ${id_lingua}`
    );
  }

  response.send(troncoFound);
}
