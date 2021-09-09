import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

exports.deleteOne = async (request, response) => {
  const { id_etnia } = request.params;
  if (!id_etnia) {
    throw new HttpException(400, "ID inválido - Etnia");
  }

  const etniaEncontrada = await Etnia.delete(id_etnia);
  if (!etniaEncontrada) {
    throw new HttpException(404, "Etnia não encontrada - Etnia");
  }

  response.send("Deletado com sucesso!");
};
