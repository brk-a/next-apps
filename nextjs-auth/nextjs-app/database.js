// const { Client } = require('pg')
import { Pool } from "pg";

const client = new Pool({
    user: process.env.postgresqlUsername,
    host: process.env.postgresqlHost,
    database: process.env.postgresqlDatabase,
    password: process.env.postgresqlPassword,
    port: 5432,
})

export default client