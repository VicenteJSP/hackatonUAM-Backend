import { Schema, model } from "mongoose";

const RegistroUsuario = new Schema({
    nombre: { type: String, required: true },
    pwd: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    usuario: { type: String, required: true, unique: true }
}, { timestamps: true });

export default model('Register', RegistroUsuario);