const Etnia = require('../../models/Etnia');
const { HttpException } = require('../../error/HttpException');

exports.create = async (request, response) => {
  const { body } = request;
  const { nome } = body;

  if(!nome){
    throw new HttpException(400, "Nome inválido - Etnia");
  }
  try{
    const nameAlreadyExists = await Etnia.searchByName(nome);
    if(nameAlreadyExists){
      throw new HttpException(400, "Nome já existente - Etnia");
    } 
    await Etnia.create(body);

    response.send(body);
  }
  catch(err){
    throw err;
  }
}
