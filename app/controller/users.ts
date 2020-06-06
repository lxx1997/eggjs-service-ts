import { Controller } from 'egg';
import { Code } from '../utils/util';


/**
* @controller UserController  用户管理
*/

export default class UserController extends Controller {
  /**
    * @summary 用户修改个人信息。
    * @description 用户修改个人信息接口.
    * @Router put /api/v1/users
    * @Request query string field 修改字段
    * @Request query string value 修改内容
    */
  public async update() {
    const { ctx } = this;
    const userid = await ctx.service.users.getIdFromToken(ctx);
    const { field, value } = ctx.request.body;
    const result = await ctx.service.users.updateUserInfo({ field, value, userid });
    if (result) {
      ctx.body = Object.assign({}, Code.SUCCESS, { data: result });
    } else {
      ctx.body = Object.assign({}, Code.NORMAL_ERROR('用户信息更新失败'));
    }
  }
  /**
    * @summary 用户获取个人信息。
    * @description 用户获取个人信息接口.
    * @Router get /api/v1/userinfo
    */
  public async getInfo() {
    const { ctx } = this;
    const userid = await ctx.service.users.getIdFromToken(ctx);
    const result = await ctx.service.users.getUserinfo({ userid });
    if (result) {
      ctx.body = Object.assign({}, Code.SUCCESS, { data: result });
    } else {
      ctx.body = Object.assign({}, Code.NORMAL_ERROR('获取用户信息失败'));
    }
  }
}
