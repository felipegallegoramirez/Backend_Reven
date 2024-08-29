
const  sendcorreo  = require("../emails");

const messageLogin = (correo,id,code) => {
    sendcorreo(correo,"Ingreso a la cuenta", 
    `
<div class="sup" style="width: 100%;display:flex; justify-content:center;align-items: center;">
    <img src="cid:unique@kreata.ee" style="width:20%; object-fit:cover;" alt="">
</div>

<div class="inf" style="text-align: center;">
    <a href="https://polinet.netlify.app/#/Recovery/${id}/${code}" style="text-decoration: none;color: black;"><h3 style="font-size: 25px;margin: 10px;" >Click <b style="color:#0388AA;">aqui</b> para ingresar </h3></a>
    <p style="text-align: justify;width: 50%;margin: auto;margin-top: 60px;">Hemos detectado un intento de acceso a su cuenta recientemente. Si no ha sido usted, por favor ignore este mensaje.
        <br>
        <br>
        <br>


        Sin embargo, si ha sido usted clickea donde dice "Click aquí para ingresar" para cambiar tu contraseña. <3
        
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
    path: __dirname + '/logoPolinet.png',
    cid: 'unique@kreata.ee' 
}])
  };




  module.exports = {  messageLogin};