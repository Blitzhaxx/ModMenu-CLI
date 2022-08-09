const { getChildLogger } = require('../core/logging');
const mod = require('../repository/mod');
const ServiceError = require('../core/serviceError');

const debugLog = (message, meta = {}) => {
  if (!this.logger) this.logger = getChildLogger('mod-service');
  this.logger.debug(message, meta);
};

const getAll = async () => {
  debugLog('Fetching all mods');
  return await mod.getAll();
};
const getById = async (a) => {
  debugLog('Getting mod', { a });
  const e = await mod.getById(a);
 
  if (!e[0]) {
    throw ServiceError.notFound(`Mod ${a} was not found`);
  } else {
  await mod.updateCounter(a)
  }
  return e;
};
const getByCode = async (a)=>{
  debugLog('Getting mod by code')
  const e = await mod.getByCode(a)
  if (!e[0]) {
    throw ServiceError.notFound(`Code ${a} was not found`);
  }
  return e;
}
const getByCodeId = async (a)=>{
  debugLog("Getting url of ", a)
  const e = await mod.getByCodeId(a)
  if (!e[0]) {
    throw ServiceError.notFound(`Private mod ${a} not found`)
  } else {
    await mod.updateCodeCounter(a)
  }
  return e
}
const getCounters = async ()=>{
  debugLog("Getting counters")
  return await mod.getCounters()
}

module.exports = {
  getAll,
  getById,
  getByCode,
  getByCodeId,
  getCounters
};
