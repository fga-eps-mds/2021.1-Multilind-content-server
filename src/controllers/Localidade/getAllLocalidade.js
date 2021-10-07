import Localidade from "../../models/Localidade";

export async function getAll(request, response) {
  const localidadesEncontradas = await Localidade.getAll();
  response.send(localidadesEncontradas);
}