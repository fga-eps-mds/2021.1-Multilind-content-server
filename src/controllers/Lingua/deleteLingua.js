/* istanbul ignore file */

import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";
import Conteudo from "../../models/Conteudo";

export async function deleteOne(request, response) {
  const { id_lingua } = request.params;
  if (!id_lingua) {
    throw new HttpException(400, `ID inválido - Lingua - ID ${id_lingua}`);
  }

  const linguaEncontrada = await Lingua.searchById(id_lingua);
  if (!linguaEncontrada) {
    throw new HttpException(
      404,
      `Lingua não encontrada - Lingua - ID ${id_lingua}`
    );
  }
  Conteudo.delete(linguaEncontrada.id_conteudo);

  response.send({
    Result: "Lingua deletada com sucesso",
  });
}
