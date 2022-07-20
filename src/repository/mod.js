const { tables, getKnex } = require('../data');

const getAll = async () => {
  return await getKnex()(tables.mod).select("id","name").orderBy('name', 'desc');
};

const getById = async (a) => {
  return await getKnex()(tables.mod).select("url").where('id', a);
};

module.exports = {
  getAll,
  getById,
};
