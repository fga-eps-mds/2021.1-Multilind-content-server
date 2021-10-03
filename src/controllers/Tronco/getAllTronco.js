import Tronco from "../../models/Tronco";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const etniasEncontrada = await Tronco.getAll();
  if (!etniasEncontrada.length) {
    throw new HttpException(404, "Nenhum tronco encontrado - Tronco");
  }

  response.send(etniasEncontrada);
}
