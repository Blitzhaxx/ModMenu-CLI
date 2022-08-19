const { tables, getKnex } = require('../data');

const getByName = async (name)=>{
    return await getKnex()(tables.truth).select("value").where("name",name)
  }

module.exports = {
    getByName
  };
  