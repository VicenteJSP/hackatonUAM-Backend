import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto:${3000}`);
});