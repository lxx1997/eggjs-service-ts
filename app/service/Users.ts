import { Service } from 'egg';
import { Code } from '../utils/util';
import { verifyToken } from '../utils/methods';
export default class UserService extends Service {
  /**
   *  通过用户名查找用户个人信息
   */
  public async getUserInfoByUsername({ username, password }): Promise<Record<string, any>> {
    const { ctx } = this;
    let userinfo = {};
    try {
      userinfo = await ctx.model.EicUser.findAll({
        where: {
          username,
          password,
        },
        attributes: { exclude: [ 'password' ] },
        // 加入这个参数，可以直接拿到对象
        raw: true,
      });
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = Object.assign({}, Code.ERROR(error));
    }
    return userinfo[0];
  }
  /**
   *  通过用户id查找用户个人信息
   */
  public async getUserInfoByUserId({ id }) {
    const { ctx } = this;
    let userinfo = {};
    try {
      userinfo = await ctx.model.EicUser.findAll({
        where: {
          id,
        },
        // 此参数可忽略password字段，不会返回
        attributes: { exclude: [ 'password' ] },
        // 加入这个参数，可以直接拿到对象
        raw: true,
      });
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = Object.assign({}, Code.ERROR(error));
    }
    return userinfo[0];
  }
  // ge'g
  public async updateUserInfo({ field, value, userid }) {
    const { ctx } = this;
    try {
      const insert = {};
      insert[field] = value;
      const result = await ctx.model.EicUser.update(insert, {
        where: {
          id: userid,
        },
      });
      return result;
    } catch (error) {
      ctx.body = Object.assign({}, Code.ERROR(error));
    }
  }
  public async getUserinfo({ userid }) {
    return await this.getUserInfoByUserId({ id: userid });
  }
  public async getIdFromToken(ctx) {
    // 获取公钥
    const token = ctx.headers.authorization;
    const user: any = verifyToken(token);
    return user.userid;
  }
}
