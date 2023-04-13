import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/index.js';

export const signToken = (tokenData) => {
  const token = jwt.sign(tokenData, SECRET_KEY, { expiresIn: '1d' });
  return token;
};

export const verifyToken = (token) => {
  const checkToken = jwt.verify(token, SECRET_KEY);
  return checkToken;
};
