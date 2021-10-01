const Localidade = require("../../models/Localidade");
import { HttpException } from "../../error/HttpException";

export async function updateOneById(request, response) {
  const { longitude, latitude } = request.body;
  const { id_localidade } = request.params;
  if (!longitude && !latitude) {
    throw new HttpException(400, "Coordenadas obrigatórias");
  }

  const localidade = await Localidade.editById(
    {
      longitude,
      latitude,
    },
    id_localidade
  );

  response.json(localidade);
}
