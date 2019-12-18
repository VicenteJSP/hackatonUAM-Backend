import express from 'express';

const routerReserva = express.Router();

function status(req, res, next) {
    res.send(`Reservacion`);
}
function crear(req, res, next) {
    res.send(`Reservacion`);
}
function cancelar(req, res, next) {
    res.send(`Reservacion`);
}
routerReserva.get('/status/:id');
routerReserva.post('/crear');
routerReserva.post('/cancelar/:id');


export default routerReserva;