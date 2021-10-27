import Lingua from "../../models/Lingua";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { nome, id_tronco, glottocode } = request.body;
  if (!nome) {
    throw new HttpException(400, `Credenciais inválido - Lingua - ${nome}`);
  }

  const nameAlreadyExists = await Lingua.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Lingua - ${nome}`);
  }

  const lingua = await Lingua.create({
    nome,
    id_tronco,
    glottocode,
  });

  response.send(lingua);
}
