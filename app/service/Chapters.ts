import { Service } from 'egg';
import { Code } from '../utils/util';
export default class ChapterService extends Service {

  public async create(body) {
    const { ctx } = this;
    try {
      const result = await ctx.model.EicChapter.create({
        ...body,
        auther: body.userid,
      });
      return result;
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = Object.assign({}, Code.ERROR(error));
    }
  }

  public async getChapterIndex<T>(novelId: T): Promise<T> {
    const { ctx } = this;
    try {
      const result: T = await ctx.model.EicChapter.query(`select count(*) as count from eic-chapter where novel_id =  ${novelId}`).count;
      return result;
    } catch (error) {
      throw new Error('获取最新章节数失败');
    }
  }
}
