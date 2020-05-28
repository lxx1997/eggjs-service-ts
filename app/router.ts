import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // 登录
  router.get('api/v1/login', controller.logins.index);
};
