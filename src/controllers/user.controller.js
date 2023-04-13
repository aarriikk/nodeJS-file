import { UserService } from '../services/user.service.js';

export class UserController {
  user = new UserService();

  // mencari seluruh user
  getAllUser = async (_req, res, next) => {
    try {
      const users = await this.user.findAllUser();

      res.status(200).json({
        status: 'success',
        message: 'get all user',
        data: users,
      });
    } catch (err) {
      next(err);
    }
  };

  // mencari user berdasarkan id
  getByIdUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const findUser = await this.user.findByIdUser(id);

      res.status(200).json({
        status: 'success',
        message: 'get user',
        data: findUser,
      });
    } catch (err) {
      next(err);
    }
  };

  // update user berdasarkan id
  updateByIdUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedUser = await this.user.updateUser(id, { ...req.body });

      res.status(200).json({
        status: 'success',
        message: 'update user',
        data: updatedUser,
      });
    } catch (err) {
      next(err);
    }
  };

  // delete user berdasarkan id
  deleteByIdUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.user.deleteUser(id);

      res.status(200).json({
        status: 'success',
        message: 'delete user',
        data: [],
      });
    } catch (err) {
      next(err);
    }
  };
}
