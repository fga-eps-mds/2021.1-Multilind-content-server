/* istanbul ignore file */

import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function update(request, response) {
  const { id_lingua } = request.params;
  if (!id_lingua) {
    throw new HttpException(
      400,
      `ID inválido - Palavra - ID Lingua ${id_lingua}`
    );
  }

  const { nome, significado, id_palavra } = request.body;
  for (const [key, value] of Object.entries(request.body)) {
    if (!value) {
      throw new HttpException(400, `Palavra inválida - ${key}: ${value}`);
    }
  }

  const nameAlreadyExists = await Palavra.searchByName(
    nome,
    id_lingua,
    significado
  );
  if (nameAlreadyExists) {
    throw new HttpException(400, `Palavra já existente - Palavra ${nome}`);
  }

  await Palavra.editById({ nome, significado }, id_palavra, id_lingua);

  const palavra = await Palavra.searchById(id_palavra, id_lingua);

  response.send(palavra);
}
