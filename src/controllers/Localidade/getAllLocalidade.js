const Localidade = require("../../models/Localidade");

export async function getAll(request, response) {
  const localidade = await Localidade.searchAll();
  response.json(localidade);
}
