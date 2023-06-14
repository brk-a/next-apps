// const { Client } = require('pg')
import { Pool } from "pg";

const client = new Pool({
    user: process.env.postgresqlUsername,
    host: 'localhost',
    // host: '127.0.0.1',
    database: 'testdb',
    password: process.env.postgresqlPassword,
    port: 5432,
})

export default client