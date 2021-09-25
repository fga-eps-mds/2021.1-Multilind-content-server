import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { id_lingua } = request.params;
  if (!id_lingua) {
    throw new HttpException(
      400,
      `ID inválido - Palavra - ID Lingua ${id_lingua}`
    );
  }

  const { nome, significado } = request.body;
  for (const [key, value] of Object.entries(request.body)) {
    if (!value) {
      throw new HttpException(400, `Palavra inválida - ${key}: ${value}`);
    }
  }

  const nameAlreadyExists = await Palavra.searchByName(nome, id_lingua);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Palavra já existente - ${nome}`);
  }

  const palavra = await Palavra.create({ nome, id_lingua, significado });

  response.send(palavra);
}
