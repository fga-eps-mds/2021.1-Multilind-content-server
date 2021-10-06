import Dialeto from "../../models/Dialeto";

export async function getAll(request, response) {
  const { id_etnia } = request.params;
  const dialetosEncontrados = await Dialeto.searchAll(id_etnia);
  response.send(dialetosEncontrados);
}
