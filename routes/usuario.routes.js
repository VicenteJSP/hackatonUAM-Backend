import express from 'express';
import bcrypt from 'bcryptjs';
import CrearUsuario from '../models/usuario.model';

const router = express.Router();

function login(req, res, next) { 
    const datosUsuario = {
        usuario: req.body.usuario,
        passwor: req.body.pwd
    }

    CrearUsuario.findOne({usuario: datosUsuario.usuario}, (err, data) => {
        if (err) res.send('Error').status(400);
        if (bcrypt.compareSync(datosUsuario.passwor, data.pwd)) {
            console.log('password correcto!');
            res.status(200).send('Correcto');
        } else {
            console.log('password Incorrecto!');
            res.status(300).send('Otro error');
        }
    });
}

function registro(req, res, next) {
    const datosUsuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        usuario: req.body.usuario,
        pwd: bcrypt.hashSync(req.body.pwd),
        email: req.body.email 
    }
    let nuevoUsuario = new CrearUsuario(datosUsuario);
    nuevoUsuario.save();
    console.log(datosUsuario);
    res.send(datosUsuario);
}
function perfil(req, res, next) {
    CrearUsuario.find({ nombre: req.params.usuario}, (err,data) => {
        console.log(data)
    });
    res.send(req.params.usuario);
}

router.post('/login', login);
router.post('/registro', registro);
router.get('/perfil/:usuario', perfil);
// router.get('/reservaciones');

export default router;