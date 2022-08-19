const { tables, getKnex } = require('../data');

const getByName = async (name)=>{
    return await getKnex()(tables.truth).select("value").where("name",name)
  }

const getUpdate = async ()=>{
  return await getKnex()(tables.truth).select("value").where("name","update")
}

module.exports = {
    getByName,
    getUpdate
  };
  