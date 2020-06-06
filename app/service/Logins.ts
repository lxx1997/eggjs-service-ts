import { Service } from 'egg';
import { Code } from '../utils/util';
import { arrayIsNull } from '../utils/methods';
export default class LoginService extends Service {
  /**
   * registerUser 注册用户
   */
  public async registerUser({ username, password }): Promise<object> {
    const { ctx } = this;
    let result = {
      id: Number,
    };
    let userinfo = [];
    try {
      // 判断数据库中是否存在用户
      const QueryResult = await ctx.model.EicUser.findAll({
        where: {
          username,
        },
        raw: true,
      });
      if (arrayIsNull(QueryResult)) {
        result = await ctx.model.EicUser.create({
          username,
          password,
        });
        userinfo = await ctx.model.EicUser.findAll({
          where: {
            id: result.id,
          },
          attributes: { exclude: [ 'password' ] },
          raw: true,
        });
      }
    } catch (error) {
      ctx.body = Object.assign({}, Code.ERROR(error));
    }
    return userinfo[0];
  }
}
