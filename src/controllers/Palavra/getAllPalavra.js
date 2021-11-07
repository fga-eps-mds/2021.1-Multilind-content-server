/* istanbul ignore file */

import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const { id_lingua } = request.params;
  if (!id_lingua) {
    throw new HttpException(
      400,
      `ID inválido - Palavra - ID Lingua ${id_lingua}`
    );
  }

  const palavraEncontrada = await Palavra.searchAll(id_lingua);
  response.send(palavraEncontrada[0]);
}
