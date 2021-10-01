const Localidade = require("../../models/Localidade");
import { HttpException } from "../../error/HttpException";

export async function getOne(request, response) {
  const { id_localidade } = request.params;

  const localidade = await Localidade.searchById(id_localidade);

  if (!localidade) {
    throw new HttpException(404, "Localidade não encontrada");
  }

  response.json(localidade);
}
