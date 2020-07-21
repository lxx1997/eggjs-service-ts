import { Service } from 'egg';
import { Code } from '../utils/util';

export default class NovelService extends Service {

  public async createNovel(body) {
    const { ctx } = this;
    try {
      const result = await ctx.model.EicNovel.create({
        ...body,
        auther: body.userid,
      });
      return result;
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = Object.assign({}, Code.ERROR(error));
    }
  }
  public async getNovelsList(body) {
    // const novelPages: T;
    const { ctx } = this;
    try {
      const { page = 1, pageSize = 20, avator } = body;
      const result = await ctx.model.EicNovel.query(`select * from eic-chapter where avator = ${avator} limit ${(page - 1) * pageSize}, ${page * pageSize}`);
      console.log(result);
      return result;
    } catch (error) {
      throw new Error('小说列表获取失败');
    }
  }
}
