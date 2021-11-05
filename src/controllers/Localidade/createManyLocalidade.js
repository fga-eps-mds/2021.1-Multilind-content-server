import Localidade from "../../models/Localidade";
import { HttpException } from "../../error/HttpException";

export async function createManyLocation(request, response) {
  const { locations } = request.body;
  console.log(locations);

  if (!locations.length) {
    throw new HttpException(
      400,
      `localidades invalida, não é permitido cadastrar dados vazios`
    );
  }
  const localidades = await Localidade.createBulkInsert(locations);

  response.send(localidades);
}
