import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express'
const app = express();
import mainRoute from './routes/main-route.js'

//listen on port
app.listen(process.env.PORT, (): void => {
    console.log("Listening on port " + process.env.PORT + ". " + "Press Ctrl-C to exit.");
});

//use imported route
app.use('/', mainRoute);
