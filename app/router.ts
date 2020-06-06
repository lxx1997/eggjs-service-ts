import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // 登录
  router.get('/api/v1/login', controller.logins.index);
  // 注册
  router.post('/api/v1/register', controller.logins.create);
  // 修改用户信息
  router.put('/api/v1/users', controller.users.update);
  // 获取当前用户登录基本信息
  router.get('/api/v1/userinfo', controller.users.getInfo);
};
