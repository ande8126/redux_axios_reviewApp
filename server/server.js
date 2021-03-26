const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const inventory = require('./modules/routes/inventory.route');

app.use( bodyParser.json() );
app.use( '/inventory', inventory );

const port = process.env.PORT || 5000;

app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})