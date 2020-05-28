import { Service } from 'egg';
import { Code } from '../utils/util';
export default class LoginService extends Service {
  public async getUserInfoByUsername({ username }) {
    const { ctx } = this;
    try {
      const userinfo = await ctx.model.User.findAll({
        where: {
          username,
        },
        // 加入这个参数，可以直接拿到对象
        raw: true,
      });
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = Object.assign({}, Code.ERROR(error));
    }
  }
  public async getUserInfoByUserId({ id }) {

  }
}
