const Router = require("@koa/router");
const mod = require("../service/mod");
const Joi = require("joi");
const validate = require("./_validation");

const getByCode = async (ctx) => {
  ctx.body = await mod.getByCode(ctx.params.id);
};
getByCode.validateScheme = {
  params: {
    id: Joi.string().uuid(),
  },
};
const getById = async (ctx)=>{
  ctx.body = await mod.getByCodeId(ctx.params.id)
}
getById.validateScheme = {
  params: {
    id: Joi.string().uuid()
  }
}

module.exports = (app) => {
  const router = new Router({
    prefix: "/code",
  });
  router.get("/id/:id", validate(getById.validateScheme),getById)
  router.get("/:id", validate(getByCode.validateScheme), getByCode);

  app.use(router.routes()).use(router.allowedMethods());
};
