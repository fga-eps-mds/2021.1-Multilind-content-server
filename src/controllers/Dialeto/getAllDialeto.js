import Dialeto from "../../models/Dialeto";

export async function getAll(request, response) {
  const { query } = request;
  const dialetosEncontrados = await Dialeto.searchAll(query);
  response.send(dialetosEncontrados);
}
