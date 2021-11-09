/* istanbul ignore file */

import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function getAllPages(request, response) {
  const { id_lingua } = request.params;
  if (!id_lingua) {
    throw new HttpException(
      400,
      `ID inválido - Palavra - ID Lingua ${id_lingua}`
    );
  }
  let pages = request.params.page || 1;
  let limit = request.params.rowsPerPage || 6;
  let offset = limit * (pages - 1);

  const palavrasEncontradas = await Palavra.searchAllperPage({
    limit,
    offset,
    id_lingua,
  });

  response.json(palavrasEncontradas);
}
