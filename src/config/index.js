import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALs === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, ORIGIN } = process.env;
export const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;
