import Etnia from "../../models/Etnia";
import { HttpException } from "../../error/HttpException";

exports.create = async (request, response) => {
  const { body } = request;
  const { nome } = body;
  if (!nome) {
    throw new HttpException(400, "Nome inválido - Etnia");
  }

  const nameAlreadyExists = await Etnia.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, "Nome já existente - Etnia");
  }

  await Etnia.create(body);

  response.send(body);
};
