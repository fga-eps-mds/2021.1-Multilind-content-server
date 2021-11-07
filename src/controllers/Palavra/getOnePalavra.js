/* istanbul ignore file */

import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function getOne(request, response) {
  const { id_lingua } = request.params;
  if (!id_lingua) {
    throw new HttpException(
      400,
      `ID inválido - Palavra - ID Lingua ${id_lingua}`
    );
  }

  const { id_palavra } = request.params;
  if (!id_palavra) {
    throw new HttpException(400, `ID inválido - Palavra - ID ${id_palavra}`);
  }

  const palavraEncontrada = await Palavra.searchById(id_palavra, id_lingua);
  if (!palavraEncontrada) {
    throw new HttpException(
      404,
      `Palavra não encontrada - ID ${id_palavra} e Lingua - ID ${id_lingua}`
    );
  }

  response.send(palavraEncontrada);
}
