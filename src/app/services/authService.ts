import jwt from 'jsonwebtoken'
import { pick } from 'lodash'

export const createTokens = async (user: any, secret: string, secret_refresh: string) => {
    const createToken = jwt.sign(
      {
        user: pick(user, ['_id']),
      },
      secret,
      {
        expiresIn: '1h',
      },
    );
  
    const createRefreshToken = jwt.sign(
      {
        user: pick(user, '_id'),
      },
      secret_refresh,
      {
        expiresIn: '7d',
      },
    );
  
    return Promise.all([createToken, createRefreshToken]);
};