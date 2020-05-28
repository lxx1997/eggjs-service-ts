import * as fs from 'fs';
import * as path from 'path';
import jwt from 'jsonwebtoken';

// 生成token
export function loginToken(data, expires = 60 * 60 * 24) {
  const exp = Math.floor(Date.now() / 1000) + expires;
  // 私钥，看生成方法
  const cert = fs.readFileSync(path.join(path.join(__dirname, '../public/rsa_private_key.pem')));
  const token = jwt.sign({
    data, exp,
  }, cert, { algorithm: 'RS256' });
  return token;
}
// 解析token
export function verifyToken(token) {
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
    throw (error);
  }
  return res;
}
export function createUser(id: string) {
  return {
    create_by: id,
    create_date: Date().toLocaleString(),
  };
}
