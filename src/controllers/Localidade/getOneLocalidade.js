/* istanbul ignore file */

import Localidade from "../../models/Localidade";
import { HttpException } from "../../error/HttpException";

export async function getOne(request, response) {
  const { id_localidade } = request.params;

  if (!id_localidade) {
    throw new HttpException(
      400,
      `ID inválido - Localidade - ID ${id_localidade}`
    );
  }

  const localidadeEncontrada = await Localidade.searchById(id_localidade);
  if (!localidadeEncontrada) {
    throw new HttpException(
      404,
      `Localidade não encontrada - Localidade - ID ${id_localidade}`
    );
  }

  response.send(localidadeEncontrada);
}
