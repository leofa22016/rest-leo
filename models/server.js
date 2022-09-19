const express = require('express');
const cors = require('cors');

require('dotenv').config();


class Server{


    constructor(){

        // Express
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();




        // Routes        
        this.routes();

    }



    middlewares(){
        // CORS
        this.app.use( (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            next();
        });

        // Lectura y parseo del body
        this.app.use(express.json());
        

        // Public directory
        this.app.use(express.static('public'));
    }




    routes(){
       
        this.app.use('/api/users', require('../routes/usersRoutes'));
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log('Example app listening on port !', this.port);
            }
        );
    }

    







}


module.exports = Server;