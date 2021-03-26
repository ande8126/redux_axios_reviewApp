const express = require( 'express' );
let router = express.Router();

router.get( '/', (req, res )=>{
    console.log( 'in /inventory GET:' );
    res.send( 'meow' );
})

router.post( '/', ( req, res )=>{
    console.log( 'in /inventory POST:', req.body );
    res.send( 'woof' );
})

module.exports = router;