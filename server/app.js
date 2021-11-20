import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import healthcheckRouter from './routes/healthcheck';

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/healthcheck', healthcheckRouter);

export default app;