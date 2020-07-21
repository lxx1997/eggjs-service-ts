import { Controller } from 'egg';
import { Code } from '../utils/util';


/**
* @controller NovelController  用户管理
*/

export default class ChapterController extends Controller {
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
    // const index = await ctx.service.chapters.getChapterIndex();
    const body = ctx.request.body;
    const result = await ctx.service.chapters.create({ ...body, userid });
    if (result) {
      ctx.body = Object.assign({}, Code.SUCCESS, { data: result });
    } else {
      ctx.body = Object.assign({}, Code.NORMAL_ERROR('章节保存失败'));
    }
  }
  /**
    * @summary 添加小说。
    * @description 添加小说接口.
    * @Router post /api/v1/novels
    * @Request query string name 文章名
    * @Request query string sex 性别分类
    * @Request query string type 文章分类
    * @Request query string desc  小说简介
    */
  public async update() {
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
  /**
   * chapterIndex
   */
  public async chapterIndex() {
    const { ctx } = this;
    const novelId = ctx.request.body.novelId;
    const value = await ctx.service.chapters.getChapterIndex<number>(novelId);
    ctx.body = Object.assign({}, Code.SUCCESS, { data: value });
  }
}

