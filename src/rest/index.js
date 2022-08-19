const Router = require("@koa/router");
const installMod = require('./_mod');
const installCode = require('./_codes')
const installTruth = require('./_truth')

module.exports = (app) => {
    const router = new Router({
      prefix: "/api",
    });
  installMod(router);
  installCode(router)
  installTruth(router)
    app.use(router.routes()).use(router.allowedMethods());
  };
  