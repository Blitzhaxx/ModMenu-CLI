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
  }
  return e;
};


module.exports = {
  getAll,
  getById,
};
