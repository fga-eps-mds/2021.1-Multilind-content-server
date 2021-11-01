import Etnia from "../../models/Etnia";

export async function getAll(request, response) {
  const etniasEncontrada = await Etnia.searchAll();
  response.send(etniasEncontrada);
}
