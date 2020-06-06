import { Controller } from 'egg';
import { Code } from '../utils/util';
import { loginToken } from '../utils/methods';
/**
* @controller LoginController
*/
export default class LoginController extends Controller {
  /**
    * @summary 用户登录。
    * @description 用户登录接口。
    * @Router get /api/v1/login
    * @Request query string username
    * @Request query string password
    * @Response 200 LoginResult
    */
  public async index() {
    const { ctx } = this;
    const { username, password } = ctx.request.query;
    const userinfo = await ctx.service.users.getUserInfoByUsername({ username, password });
    if (userinfo.length > 0) {
      const userid = userinfo.id;
      const token = await loginToken({ userid, username }, 60 * 60 * 24);
      await this.app.redis.set(userid + username, token, 'ex', 60 * 60 * 24);
      ctx.body = Object.assign({}, Code.SUCCESS, { data: {
        token,
      } });
    } else {
      ctx.body = Object.assign({}, Code.NORMAL_ERROR('账号或者密码错误'), { code: 401 });
    }
  }

  /**
   * create
   * @summary  用户注册
   * @description 用户注册接口
   * @Router post /api/v1/register
   * @request query string username
   * @request query string password
   * @response 200 RegisterResult
   */
  public async create() {
    const { ctx } = this;
    const { username, password } = ctx.request.query;
    const result = await ctx.service.logins.registerUser({ username, password });
    ctx.body = Object.assign({}, Code.SUCCESS, { data: result });
  }
}
