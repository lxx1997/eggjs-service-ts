import { Controller } from 'egg';
import { Code } from '../utils/util';

/**
* @controller NovelController  用户管理
*/

export default class NovelController extends Controller {
  /**
    * @summary 添加小说。
    * @description 添加小说接口.
    * @Router post /api/v1/novels
    * @Request query string name 文章名
    * @Request query string sex 性别分类
    * @Request query string type 文章分类
    * @Request query string desc  小说简介
    */
  public async create() {
    const { ctx } = this;
    const userid = await ctx.service.users.getIdFromToken(ctx);
    const body = ctx.request.body;
    const result = await ctx.service.novels.createNovel({ ...body, userid });
    if (result) {
      ctx.body = Object.assign({}, Code.SUCCESS, { data: result });
    } else {
      ctx.body = Object.assign({}, Code.NORMAL_ERROR('小说保存失败'));
    }
  }
  public async index() {
    const { ctx } = this;
    const avator = await ctx.service.users.getIdFromToken(ctx);
    const body = ctx.request.body;
    const result = await ctx.service.novels.getNovelsList<object>({ ...body, avator });
    if (result) {
      ctx.body = Object.assign({}, Code.SUCCESS, { data: result });
    } else {
      ctx.body = Object.assign({}, Code.NORMAL_ERROR('小说列表获取失败'));
    }
  }
  public async detail() {

  }
}
