import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import routers from "./app/routers.js";

const run = async () => {

    await mongoose.connect('mongodb://localhost:27017', {
        user: "",
        pass: "",
        dbName: 'moments_full_root111'
    });

    const app = express();

    app.use(bodyParser.urlencoded());
// override with the X-HTTP-Method-Override header in the request
    app.use(methodOverride('_method'));
// Set up static files
    app.use(express.static(process.cwd() + '/app/view/assets'));
// Set up template ejs
    app.set('views', process.cwd() + '/app/view')
    app.set('view engine', 'ejs');

//Routers
    app.use('', routers);

    app.listen(3000);
}

run().then(r => console.log('init'));


