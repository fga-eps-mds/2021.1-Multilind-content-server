import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

exports.getOne = async (request, response) => {
  const { id_etnia } = request.params;

  if (!id_etnia) {
    throw new HttpException(400, "ID inválido - Etnia");
  }

  const etniaEncontrada = await Etnia.searchById(id_etnia);
  if (!etniaEncontrada) {
    throw new HttpException(404, "Etnia não encontrada - Etnia");
  }

  response.send(etniaEncontrada);
};
