import { App } from './app.js';
import { AuthRoutes } from './routes/auth.route.js';
import { UserRoutes } from './routes/user.route.js';
import { ParameterRoutes } from './routes/parameter.route.js';
import { RaspiRoutes } from './routes/raspi.route.js';

const app = new App([
  new AuthRoutes(),
  new UserRoutes(),
  new ParameterRoutes(),
  new RaspiRoutes(),
]);

app.listen();
