const Router = require("@koa/router");
const mod = require("../service/mod");
const Joi = require("joi");
const validate = require("./_validation");

const getById = async (ctx) => {
  ctx.body = await mod.getByCode(ctx.params.id);
};
getById.validateScheme = {
  params: {
    id: Joi.string().uuid(),
  },
};


module.exports = (app) => {
  const router = new Router({
    prefix: "/code",
  });
  router.get("/:id", validate(getById.validateScheme), getById);

  app.use(router.routes()).use(router.allowedMethods());
};
