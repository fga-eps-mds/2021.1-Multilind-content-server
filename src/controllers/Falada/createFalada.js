import { HttpException } from "../../error/HttpException";

const Falada = require("../../models/Falada");

export async function create(request, response) {
  const { id_lingua, id_localidade } = request.body;

  if (!id_lingua || !id_localidade) {
    throw new HttpException(400, "id_lingua e id_localidade são obrigatórios");
  }
  const falada = await Falada.create({ id_lingua, id_localidade });

  response.json(falada);
}
