/*
Imports
*/
    require("dotenv").config()
    const express = require("express");
    const path = require("path");
    const bodyParser = require("body-parser");
    const ejs = require("ejs");

//

/*
Configuration
*/

    const server = express();
    const port = process.env.PORT;

    class ServerClass{

        init(){

        }

        launch(){
            server.listen(port, () => {
                console.log(`Server is active on port ${port}`);
            });
        }
    }

/*
Démarrer le serveur
*/

    new ServerClass.lauch();
//