
const  sendcorreo  = require("../emails");

const messageRegister = (correo, name) => {
    sendcorreo(correo,"Registro en PoliNet <3", 
    `
    <div class="sup" style="width: 100%; display: flex; justify-content: center; align-items:center;">
        <img src="cid:unique@kreata.ee" style="width:20%; object-fit:cover;" alt="">
    </div>

    <div class="inf" style="text-align: center;">
    <p style="text-align: justify;width: 50%;margin: auto;margin-top: 50px;">Hemos detectado un registro en nuestra pagina Reven, si no eres tú has caso omiso de este correo
        <br>
        <br>
        <br>
        <br>
        A nombre de: ${name}
        <br>
        <br>
        Correo electronico: ${correo}
        <br>
        <br>
        <br>
        <br>
        <br>
        Por favor, no dude en contactarnos si necesita ayuda adicional.</p>
</div>

<footer style="text-align: center;width: 100%;margin-top: 100px;">
    <p>PoliNet 2024 Copyright © Todos los derechos reservados - Política de privacidad</p>
</footer>`,
[{
    filename: 'logoPolinet.png',
    path: __dirname + '/logo.png',
    cid: 'unique@kreata.ee' 
}])
  };




  module.exports = {messageRegister};