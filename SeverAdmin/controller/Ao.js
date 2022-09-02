const AoService = require('../service/Ao')

exports.get = async function getAllAo()
{
    return await AoService.get();
}
exports.getOne = async (id) =>
{
    return await  AoService.getOne(id);
}
exports.delete = async (id) =>
{
    await AoService.delete(id);
}
exports.update = async (params, body) =>{
    let {id} = params
    let{name,price,amount,date,avatar}=body
   await AoService.update({id,name,price,amount,date,avatar})
}
exports.insert = async (body) =>{

    let{name,price,amount,date,avatar}=body
    await AoService.insert({name,price,amount,date,avatar})
}