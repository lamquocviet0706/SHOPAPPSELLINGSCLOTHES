

const AoModel = require('../models/ao_models')

exports.get = async function getAllAo()
{
    return await AoModel.find();
}
exports.getOne = async function getOneAo(id)
{
    return await AoModel.findById(id);
}
exports.delete = async (id) =>
{
   await AoModel.remove({_id: id})
}

exports.update = async (st) =>{
    let row = await AoModel.findById(st.id)
    if(row)
    {
        row.name = st.name
        row.price = st.price
        row.amount = st.amount
        row.date = st.date
        row.avatar = st.avatar ? st.avatar : row.avatar
        await row.save()
    }
}

exports.insert = async (st) =>{
    const ao = new AoModel(st)
    await ao.save()
}