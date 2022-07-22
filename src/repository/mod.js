const { tables, getKnex } = require('../data');

const getAll = async () => {
  return await getKnex()(tables.mod).select("id","name","author").orderBy('id', 'desc');
};

const getById = async (a) => {
  return await getKnex()(tables.mod).select("url").where('id', a);
};

const getByCode = async (a)=>{
  return await getKnex()(tables.codes).select().where("code",a)
}

module.exports = {
  getAll,
  getById,
  getByCode
};
