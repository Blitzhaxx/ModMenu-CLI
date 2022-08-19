const Router = require("@koa/router");
const truth = require("../service/truth");

const getVersion = async (ctx) => {
    ctx.body = await truth.getByName("version");
  };

const getUpdate = async (ctx)=>{
  ctx.body = await truth.getUpdate()
}

  module.exports = (app) => {
    const router = new Router({
      prefix: "/value",
    });
    router.get("/version", getVersion);
    router.get('/update', getUpdate)
    app.use(router.routes()).use(router.allowedMethods());
  };