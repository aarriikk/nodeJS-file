const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.route');
const Parameter1Router = require('./routers/Parameter1_routes')
const Parameter2Router = require('./routers/Parameter2_routes')
const Parameter3Router = require('./routers/Parameter3_routes')
const Parameter4Router = require('./routers/Parameter4_routes')


const app = express();

app.use(body_parser.json());

app.use('/',userRouter);
app.use('/',Parameter1Router);
app.use('/',Parameter2Router);
app.use('/',Parameter3Router);
app.use('/',Parameter4Router);

module.exports = app;