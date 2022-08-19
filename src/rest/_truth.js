const Router = require("@koa/router");
const truth = require("../service/truth");

const getVersion = async (ctx) => {
    ctx.body = await truth.getByName("version");
  };

  module.exports = (app) => {
    const router = new Router({
      prefix: "/value",
    });
    router.get("/version", getVersion);
  
    app.use(router.routes()).use(router.allowedMethods());
  };