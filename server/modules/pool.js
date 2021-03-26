const pg = require( 'pg' );
const pool = new pg.Pool({
    database: 'emirp_inventory',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
})

module.exports = pool;