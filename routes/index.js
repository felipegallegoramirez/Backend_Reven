const Express= require("express")
const router= Express.Router();
const fs = require('fs')
const boom = require('@hapi/boom');

const pathRouter = `${__dirname}`


const path = require('path');
const express = require('express');



//Separa el string por punto y devuelve la primera parte
// hola.txt => [hola , txt] => Return [hola]
const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

// se mete dentro de la carpeta actual y lee todos los archivos
fs.readdirSync(pathRouter).filter((file) => {

    //booking.js
    const name = removeExtension(file)
    //booking
    //Verifica que el archivo a leer no sea este mismo
    //localhost:3000/api/booking
    if (name!=="index") {
        router.use(`/api/${name}`, require(`./${name}`))
        console.log('CARGAR RUTA ---->', name)

    }
})

router.use('/public/images', express.static(path.resolve('./storage')));
//router.use('/public/images', (req,res)=>{res.status(200).send({asd:path.resolve('./storage/r')})});

// Si se le pasa otra url
router.get('*', (req, res,next) => {
    console.log(`Acceso a la ruta: ${req.method} ${req.url}`);
    next(boom.badRequest("ROUTE_NOT_FOUD",400))
})



module.exports = router
