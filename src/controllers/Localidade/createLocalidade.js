const Localidade = require("../../models/Localidade");
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { longitude, latitude } = request.body;
  if (!longitude || !latitude) {
    throw new HttpException(400, "Coordenadas obrigatórias");
  }

  const localidade = await Localidade.create({
    longitude,
    latitude,
  });

  response.json(localidade);
}
