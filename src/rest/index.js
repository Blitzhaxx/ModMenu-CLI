const Router = require("@koa/router");
const installMod = require('./_mod');


module.exports = (app) => {
    const router = new Router({
      prefix: "/api",
    });
  installMod(router);
    app.use(router.routes()).use(router.allowedMethods());
  };
  