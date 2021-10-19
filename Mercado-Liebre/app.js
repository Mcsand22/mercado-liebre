const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});


let home = "./views/home.html"
let ayuda = "./views/ayuda.html"
let compras = "./views/compras.html"
let crearCuenta = "./views/register.html"
let login = "./views/login.html"
let ofertas = "./views/ofertas.html"
let oficiales = "./views/oficiales.html"
let vender = "./views/vender.html"



app.get("/", (req, res) => res.sendFile(path.join(__dirname, home)))
app.get("/home", (req, res) => res.sendFile(path.join(__dirname, home)))
app.get("/ayuda", (req, res) => res.sendFile(path.join(__dirname, ayuda)))
app.get("/compras", (req, res) => res.sendFile(path.join(__dirname, compras)))
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, crearCuenta)))
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, login)))
app.get("/ofertas", (req, res) => res.sendFile(path.join(__dirname, ofertas)))
app.get("/oficiales", (req, res) => res.sendFile(path.join(__dirname, oficiales)))
app.get("/vender", (req, res) => res.sendFile(path.join(__dirname, vender)))