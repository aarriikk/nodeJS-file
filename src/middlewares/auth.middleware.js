import { createError } from '../utils/error.util.js';
import { verifyToken } from '../utils/jwt.util.js';

export async function AuthMiddleware(req, res, next) {
  try {
    const token = req.headers['x-auth-token'];
    if (!token) return next(createError(401, 'Unauthenticated'));

    const verified = verifyToken(token);
    if (!verified) return next(createError(403, 'Token is not valid'));

    req.user = verified.id;
    req.token = token;
    next();
  } catch (err) {
    next(err);
  }
}
