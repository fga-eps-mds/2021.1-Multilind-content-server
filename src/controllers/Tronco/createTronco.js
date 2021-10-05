import Tronco from "../../models/Tronco";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { nome } = request.body;
  if (!nome) {
    throw new HttpException(400, `Nome inválido - Tronco - ${nome}`);
  }

  const nameAlreadyExists = await Tronco.searchByName(nome);
  if (nameAlreadyExists) {
    throw new HttpException(400, `Nome já existente - Tronco - ${nome}`);
  }

  const tronco = await Tronco.create({
    nome,
  });

  response.send(tronco);
}
