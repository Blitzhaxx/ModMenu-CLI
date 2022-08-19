const { getChildLogger } = require('../core/logging');
const truth = require('../repository/truth');
const ServiceError = require('../core/serviceError');

const debugLog = (message, meta = {}) => {
    if (!this.logger) this.logger = getChildLogger('mod-service');
    this.logger.debug(message, meta);
  };

  const getByName = async (name)=>{
    debugLog('Getting value by name')
    const e = await truth.getByName(name)
    if (!e[0]) {
      throw ServiceError.notFound(`Value ${name} was not found`);
    }
    return e;
  }

  module.exports = {
    getByName
  }