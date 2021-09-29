import Localidade from "../../models/Localidade";
import { HttpException } from "../../error/HttpException";

export async function create(request, response) {
  const { latitude, longitude } = request.body;
  console.log(request.body);
  if (!latitude || !longitude) {
    throw new HttpException(400, `Localidade inválida. Latitude: ${latitude}, Longitude: ${longitude}`);
  }
  const localidade = await Localidade.create({
    latitude,
    longitude
  });

  response.send(localidade);
}
