import { User } from '../models/user.model.js';
import { createError } from '../utils/error.util.js';
import pkg from 'lodash';

const { omit } = pkg;

export const excludedFields = ['password'];

export class UserService {
  // mencari semua user
  async findAllUser() {
    const users = await User.find().exec();
    return omit(users, excludedFields);
  }

  // mencari user berdasarkan id
  async findByIdUser(id) {
    const findUser = await User.findById(id).lean();
    if (!findUser) return createError(409, 'User was not exists');
    return omit(findUser, excludedFields);
  }

  /* 
    mencari user berdasarkan attribute (dalam kasus ini attribute hanya ada email dan password) 
    dan attribute yang memungkinkan untuk menjadi query dalam pencarian user adalah email
    */
  async findOneUser(email) {
    const findUser = await User.findOne({ email }).lean();
    if (!findUser) return createError(409, 'User was not exists');
    return omit(findUser, excludedFields);
  }

  /* 
    update data user berdasarkan id, terdapat 2 parameter yakni id dan userData. 
    Contoh (id: 1, userData: email), id memiliki tipe data string karna menggunakan mongo dan userData
    akan di isi dengan data email baru user
    */
  async updateUser(id, userData) {
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
    });
    if (!updatedUser) return createError(409, 'User was not exists');
    return omit(updatedUser, excludedFields);
  }

  /* 
    delete user berdasarkan id, hanya ada 1 parameter id
    */
  async deleteUser(id) {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return createError(409, 'User was not exists');
    return omit(deletedUser, excludedFields);
  }
}
