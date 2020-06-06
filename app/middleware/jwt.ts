import * as fs from 'fs';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';
module.exports = (options, app) => {
  function verifyToken(token) {
    // 获取公钥
    const cert = fs.readFileSync(path.join(__dirname, '../public/rsa_public_key.pem'));
    let res = '';
    try {
      const result = jwt.verify(token, cert, { algorithms: [ 'RS256' ] }) || {};
      const { exp } = result;
      const current = Math.floor(Date.now() / 1000);
      if (current <= exp) {
        res = result.data || {};
      }
    } catch (error) {
      console.log(options);
      throw (error);
    }
    return res;
  }
  return async function setUserToken(ctx, next) {
    const authoken = ctx.headers.authorization;
    if (authoken) {
      try {
        const res: any = verifyToken(authoken);
        if (res.userid && res.username) {
          const redis_token = await app.redis.get(res.userid + res.username);
          console.log(authoken, redis_token, authoken === redis_token);
          if (authoken === redis_token) {
            ctx.locals.userid = res.userid;
            ctx.locals.username = res.username;
            await next();
          } else {
            ctx.body = Object.assign({}, { code: 401, msg: '账户已在其他地方登陆' });
          }
        } else {
          ctx.body = Object.assign({}, { code: 417, msg: '登陆状态已过期' });
        }
      } catch (error) {
        throw (error);
      }
    } else {
      ctx.body = Object.assign({}, { code: 401, msg: '请登录后再进行操作' });
    }
  };
};
