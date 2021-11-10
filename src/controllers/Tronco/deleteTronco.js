/* istanbul ignore file */

// import Tronco from "../../models/Tronco";
import { HttpException } from "../../error/HttpException";
// import Conteudo from "../../models/Conteudo";

export async function deleteOne(request, response) {
  const { id_tronco } = request.params;
  if (!id_tronco) {
    throw new HttpException(400, `ID inválido - Tronco - ID ${id_tronco}`);
  }

  // const troncoFound = await Tronco.searchById(id_tronco);

  // if (!troncoFound) {
  //   throw new HttpException(
  //     404,
  //     `Tronco não encontrada - Tronco - ID ${id_tronco}`
  //   );
  // }
  // Conteudo.delete(troncoFound.id_conteudo);

  response.send({
    Result: "Tronco deletado com sucesso",
  });
}
