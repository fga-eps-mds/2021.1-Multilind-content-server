/* istanbul ignore file */

import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function update(request, response) {
  const { nome, glottocode } = request.body;
  let to_update = {};
  if (nome) {
    to_update.nome = nome;
  }
  if (glottocode) {
    to_update.glottocode = glottocode;
  }
  if (!nome && !glottocode) {
    throw new HttpException(400, "Nome e Glottocode inválidos - Lingua");
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

  await Lingua.editById(to_update, id_lingua);

  const lingua = await Lingua.searchById(id_lingua);

  response.send(lingua);
}
