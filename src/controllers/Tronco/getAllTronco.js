/* istanbul ignore file */

import Tronco from "../../models/Tronco";

export async function getAll(request, response) {
  const etniasEncontrada = await Tronco.getAll();
  response.send(etniasEncontrada);
}
