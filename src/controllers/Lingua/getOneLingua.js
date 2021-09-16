import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function getOne(request, response) {
  const { id_lingua } = request.params;

  if (!id_lingua) {
    throw new HttpException(400, `ID inválido - Lingua - ID ${id_lingua}`);
  }

  const linguaEncontrada = await Lingua.searchById(id_lingua);
  if (!linguaEncontrada) {
    throw new HttpException(
      404,
      `Lingua não encontrada - Lingua - ID ${id_lingua}`
    );
  }

  response.send(linguaEncontrada);
}
