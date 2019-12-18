import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/usuario.routes';
import cors from 'cors';
import routerInmueble from './routes/inmueble.routes';
import routerReserva from './routes/reserva.routes';
import mongoose from 'mongoose';
import { PORT, URI_MONGODB } from './config/server.config';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/usuario', router);
app.use('/inmueble', routerInmueble);
app.use('/reserva', routerReserva);

mongoose.connect(URI_MONGODB, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then( db => console.log('MongoDB is Connected') );

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto:${PORT}`);
});