import express from 'express';

const routerInmueble = express.Router();

function registrarInmuebles(req, res, next) {
    res.send(`imuebles`);
}

function listarInmuebles(req, res, next) {
    res.send(`imuebles`);
}

function listarInmuebles(req, res, next) {
    res.send(`imuebles`);
}

function listarInmuebles(req, res, next) {
    res.send(`imuebles`);
}

function listarInmueblesZona(req, res, next) {
    res.send(`imuebles`);
}


routerInmueble.post('/registrarInmueble', registrarInmuebles);
routerInmueble.get('/inmuebles', listarInmuebles);
routerInmueble.get('/inmuebles/:maximo', listarInmuebles);
routerInmueble.get('/inmueble/:id', listarInmuebles);
routerInmueble.get('/inmueble/:zona', listarInmueblesZona);

export default routerInmueble;