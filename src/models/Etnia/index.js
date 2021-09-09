const EtniaModel = require('./Etnia');



exports.getAll = async () => {
    try{
        return await EtniaModel.findAll({
            raw:true,
        });
    }
    catch(error){
        throw error;
    }
},
exports.create = async (etnia) => {
    try{
        return await EtniaModel.create(etnia);
    }
    catch(error){
        throw error;
    }
},
exports.searchById = async (id) => {
    try{
        return await EtniaModel.findByPk(id)
    }
    catch(error){
        throw error;
    }
},
exports.searchByName = async (nome) => {
    try{
        return await EtniaModel.findOne({
            where : {
                nome : nome
            }
        })
    }
    catch(error){
        throw error;
    }
},
exports.delete = async (id) => {
    try {
        return await EtniaModel.destroy({
            where: {
                id : id
            }
        })
    }
    catch(error){
        throw error;
    }
},
exports.editByAdd =  async (body, id) => {
    try{
        return await EtniaModel.update(body, {where: {id: id}});
    }
    catch(error){
        throw error;
    }
}

