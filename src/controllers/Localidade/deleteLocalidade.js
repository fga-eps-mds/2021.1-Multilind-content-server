const Localidade = require("../../models/Localidade");

export async function deleteOne(request, response) {
  const { id_localidade } = request.params;
  await Localidade.delete(id_localidade);
  response.status(204).send();
}
