const { tables, getKnex } = require('../data');

const getAll = async () => {
  return await getKnex()(tables.mod).select("id","name","author","version").orderBy('id', 'asc');
};

const getById = async (a) => {
  return await getKnex()(tables.mod).select("url").where('id', a);
};

const getByCode = async (a)=>{
  return await getKnex()(tables.codes).select("id","author","name","version","code").where("code",a)
}
const getByCodeId = async (a)=>{
  return await getKnex()(tables.codes).select("url").where('code',a)
}
const updateCounter = async (a)=>{
  try {
  await getKnex().transaction(async trx=>{
    const num = await getKnex()(tables.mod).select("counter").where('id',a).transacting(trx)
    await getKnex()(tables.mod).update('counter',num[0].counter +1).where('id',a).transacting(trx)
  })
} catch (error) {
  console.log("Couldn't update counter for "+a)
}
}
const updateCodeCounter = async (a)=>{
  try {
    await getKnex().transaction(async trx=>{
      const num = await getKnex()(tables.codes).select("counter").where('code',a).transacting(trx)
      await getKnex()(tables.codes).update('counter',num[0].counter +1).where('code',a).transacting(trx)
    })
  } catch (error) {
    console.log("Couldn't update counter for "+a)
  }
}
const getCounters = async ()=>{
  return await getKnex()(tables.mod).select("name","counter")
}

module.exports = {
  getAll,
  getById,
  getByCode,
  getByCodeId,
  updateCounter,
  updateCodeCounter,
  getCounters
};
