/* istanbul ignore file */

import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";
import Conteudo from "../../models/Conteudo";

export async function deleteOne(request, response) {
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
  Conteudo.delete(etniaEncontrada.id_conteudo);

  response.send({
    Result: "Etnia deletada com sucesso",
  });
}
