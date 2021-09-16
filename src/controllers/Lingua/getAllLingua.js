import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function getAll(request, response) {
  const linguasEncontradas = await Lingua.searchAll();
  if (!linguasEncontradas.length) {
    throw new HttpException(404, "Nenhuma lingua encontrada - Lingua");
  }

  response.send(linguasEncontradas);
}
