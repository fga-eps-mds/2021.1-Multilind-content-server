import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const palavraEncontrada = await Palavra.searchAll();
  if (!palavraEncontrada.length) {
    throw new HttpException(404, "Nenhuma palavra encontrada");
  }

  response.send(palavraEncontrada);
}
