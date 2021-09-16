import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function getOne(request, response) {
  const { id_palavra } = request.params;

  if (!id_palavra) {
    throw new HttpException(400, `ID inválido - Palavra - ID ${id_palavra}`);
  }

  const palavraEncontrada = await Palavra.searchById(id_palavra);
  if (!palavraEncontrada) {
    throw new HttpException(
      404,
      `Palavra não encontrada - Palavra - ID${id_palavra}`
    );
  }

  response.send(palavraEncontrada);
}
