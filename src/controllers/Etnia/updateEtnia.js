import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

exports.update = async (request, response) => {
  const { body } = request;
  const { nome } = body;

  if (!nome) {
    throw new HttpException(400, "Nome inválido - Etnia");
  }

  const nameAlreadyExists = await Etnia.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, "Nome já existente - Etnia");
  }

  const { id_etnia } = request.params;
  if (!id_etnia) {
    throw new HttpException(400, "ID inválido - Etnia");
  }

  await Etnia.editById(body, id_etnia);

  response.send(body);
};
