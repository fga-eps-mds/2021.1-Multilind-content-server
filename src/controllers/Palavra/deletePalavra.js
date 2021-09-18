import Palavra from "../../models/Palavra";
import { HttpException } from "../../error/HttpException";
import Conteudo from "../../models/Conteudo";

export async function deleteOne(request, response) {
  const { id_lingua } = request.params;
  if (!id_lingua) {
    throw new HttpException(
      400,
      `ID inválido - Palavra - ID Lingua ${id_lingua}`
    );
  }
  const { id_palavra } = request.body;
  if (!id_palavra) {
    throw new HttpException(400, `ID inválido - Palavra - ID ${id_palavra}`);
  }

  const nomeAlreadyExists = await Palavra.searchById(id_palavra, id_lingua);
  if (!nomeAlreadyExists) {
    throw new HttpException(404, `Palavra não encontrada - ID ${id_palavra}`);
  }

  await Conteudo.delete(nomeAlreadyExists.id_conteudo);

  response.send({
    Result: "Palavra deletada com sucesso",
  });
}
