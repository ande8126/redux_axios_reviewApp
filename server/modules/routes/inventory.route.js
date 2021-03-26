const express = require( 'express' );
let router = express.Router();
const pool = require( '../pool' );

router.get( '/', (req, res )=>{
    console.log( 'in /inventory GET:' );
    let queryString = `SELECT * FROM items`;
    pool.query( queryString ).then( (results)=>{
        res.send( results.rows );
    }).catch( (err)=>{
        console.log( err );
        res.send( 500 );
    })
})

router.post( '/', ( req, res )=>{
    console.log( 'in /inventory POST:', req.body );
    let queryString = `INSERT INTO "items" ( color, size, name ) VALUES ( $1, $2, $3 )`;
    pool.query( queryString, [ req.body.color, req.body.size, req.body.description]).then( (results)=>{
        res.sendStatus( 200 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

module.exports = router;