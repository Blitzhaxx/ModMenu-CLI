const Router = require("@koa/router");
const mod = require("../service/mod");
const Joi = require("joi");
const validate = require("./_validation");

const getAll = async (ctx) => {
  ctx.body = await account.getAll();
};

const getById = async (ctx) => {
  ctx.body = await account.getById(ctx.params.id);
};
getById.validateScheme = {
  params: {
    id: Joi.string().uuid(),
  },
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/mods",
  });
  router.get("/", getAll);
  router.get("/:id", validate(getById.validateScheme), getById);

  app.use(router.routes()).use(router.allowedMethods());
};
