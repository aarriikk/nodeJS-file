import { User } from '../models/user.model.js';
import { createError } from '../utils/error.util.js';
import { compare } from 'bcrypt';
import { signToken } from '../utils/jwt.util.js';
import pkg from 'lodash';
import { excludedFields } from './user.service.js';

const { omit } = pkg;

export class AuthService {
  async login(userData) {
    // mencari apakah user ada, jika tidak ada akan mereturn error
    const findUser = await User.findOne({ email: userData.email })
      .select('+password')
      .exec();
    if (!findUser) return createError(401, 'Wrong credentials!');

    // mengecek apakah password user betul, jika salah akan mereturn error
    const isMatch = await compare(userData.password, findUser.password);
    if (!isMatch) return createError(401, 'Wrong credentials!');

    // menggenerate token dengan email sebagai token data, dan akan expired dalam 1 hari
    const payload = {
      id: findUser?._id,
    };
    const token = signToken(payload);

    return { findUser: omit(findUser.toObject(), excludedFields), token };
  }

  async register(userData) {
    const findUser = await User.findOne({ email: userData.email }).exec();
    if (findUser) return createError(409, 'Email already exists');

    const newUser = await User.create(userData);

    return omit(newUser, excludedFields);
  }
}
