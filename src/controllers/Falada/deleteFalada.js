const Falada = require("../../models/Falada");

export async function deleteOne(request, response) {
  const { id_falada } = request.params;
  await Falada.delete(id_falada);
  response.status(204).send();
}
