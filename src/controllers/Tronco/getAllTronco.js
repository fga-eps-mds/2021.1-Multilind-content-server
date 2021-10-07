import Tronco from "../../models/Tronco";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const etniasEncontrada = await Tronco.getAll();
  response.send(etniasEncontrada);
}
