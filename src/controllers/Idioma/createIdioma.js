import Idioma from "../../models/Idioma";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { id_lingua, id_localidade  } = request.body;
  if (!id_localidade || !id_lingua) {
    throw new HttpException(400, `Parâmetros inválidos - Idioma - id_localidade: ${id_localidade}, id_lingua: ${id_lingua}`);
  }
  const idioma = await Idioma.create({
    id_localidade, id_lingua
  });

  response.send(idioma);
}
