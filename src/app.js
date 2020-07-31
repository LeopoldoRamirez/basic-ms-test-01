const express = require('express');
const router = require('./routers/index.route');

async function init(){
    
    const app = express();
    
    //middlewares    
    app.use( express.json() );
    app.use( express.urlencoded({ extended: false} ) );

    //routes
    app.use(router);    

    app.listen( 3000, ()=>{
        console.log('Application is running');
    });

}


module.exports = {
    init
}