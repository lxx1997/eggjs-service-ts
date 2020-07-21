import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // 登录
  router.get('/api/v1/login', controller.logins.index);
  // 注册
  router.post('/api/v1/register', controller.logins.create);
  // 用户分组  users
  // 修改用户信息
  router.put('/api/v1/users', controller.users.update);
  // 获取当前用户登录基本信息
  router.get('/api/v1/userinfo', controller.users.getInfo);

  // 小说分组  novels
  // 获取小说列表
  router.get('/api/v1/novels', controller.novels.index);
  // 获取小说详情
  router.get('/api/v1/novels/:id', controller.novels.detail);
  // 创建小说
  router.post('/api/v1/novels', controller.novels.create);

  // 章节分组  chapters
};
