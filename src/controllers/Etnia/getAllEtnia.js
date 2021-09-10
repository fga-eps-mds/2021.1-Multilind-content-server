import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const etniasEncontrada = await Etnia.searchAll();
  if (!etniasEncontrada.length) {
    throw new HttpException(404, "Nenhuma etnia encontrada - Etnia");
  }

  response.send(etniasEncontrada);
}
