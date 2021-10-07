import Idioma from "../../models/Idioma";
import Dialeto from "../../models/Dialeto";

export async function getAll(request, response) {
  const { id_lingua, id_localidade } = request.query;
  let query = {};
  id_lingua && (query.id_lingua = id_lingua);
  id_localidade && (query.id_localidade = id_localidade);
  const idiomasEncontrados = await Idioma.searchAll(query);
  const resultIdiomasComDialetos = idiomasEncontrados.map(async (idioma)=>{
    const id_lingua = idioma.lingua.id_lingua;
    const dialetos = await Dialeto.searchAll({id_lingua});
    idioma.dataValues.dialetos = dialetos;
    return idioma;
  })
  response.send(resultIdiomasComDialetos);
}
