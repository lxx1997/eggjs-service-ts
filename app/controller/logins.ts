import { Controller } from 'egg';
import { Code } from '../utils/util';
import { loginToken } from '../utils/methods';
export default class LoginController extends Controller {
  public async index() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const userid = await ctx.service.logins.getUserInfoByUsername(username);
    const token = await loginToken({ userid, username }, 60 * 60 * 24);
    ctx.body = Object.assign({}, Code.SUCCESS, { data: {
      token,
    } });
  }
}
