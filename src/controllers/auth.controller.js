import { AuthService } from '../services/auth.service.js';

export class AuthController {
  // mendefinisikan auth service
  auth = new AuthService();

  signUp = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userData = { email, password };
      const signUpUser = await this.auth.register(userData);

      res.status(201).json({
        status: 'success',
        message: 'sign up',
        data: signUpUser,
      });
    } catch (err) {
      next(err);
    }
  };

  signIn = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userData = { email, password };
      const { findUser, token } = await this.auth.login(userData);

      res.status(200).json({
        status: 'success',
        message: 'sign in',
        data: {
          user: findUser,
          token: token,
        },
      });
    } catch (err) {
      next(err);
    }
  };
}
