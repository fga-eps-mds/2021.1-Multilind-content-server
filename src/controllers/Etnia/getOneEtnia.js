/* istanbul ignore file */

import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

export async function getOne(request, response) {
  const { id_etnia } = request.params;

  if (!id_etnia) {
    throw new HttpException(400, `ID inválido - Etnia - ID ${id_etnia}`);
  }

  const etniaEncontrada = await Etnia.searchById(id_etnia);
  if (!etniaEncontrada) {
    throw new HttpException(
      404,
      `Etnia não encontrada - Etnia - ID ${id_etnia}`
    );
  }

  response.send(etniaEncontrada);
}
