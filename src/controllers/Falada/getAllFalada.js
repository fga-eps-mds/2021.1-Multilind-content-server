const Falada = require("../../models/Falada");

export async function getAll(request, response) {
  const faladas = await Falada.searchAll();
  response.json(faladas);
}
