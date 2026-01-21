import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
const { Pool } = pg;
import { config } from './env.js';
import * as schema from '../db/schema.js';

if (!config.database.url) {
    throw new Error('Database connection string is missing');
}

const pool = new Pool({
    connectionString: config.database.url,
});

export const db = drizzle(pool, { schema });
