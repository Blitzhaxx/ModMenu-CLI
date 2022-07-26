const Router = require("@koa/router");
const installMod = require('./_mod');
const installCode = require('./_codes')


module.exports = (app) => {
    const router = new Router({
      prefix: "/api",
    });
  installMod(router);
  installCode(router)
    app.use(router.routes()).use(router.allowedMethods());
  };
  