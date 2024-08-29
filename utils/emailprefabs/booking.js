
const  sendcorreo  = require("../emails");

const messageBoking = (correo, name, fecha,other,id,survey) => {
    sendcorreo(correo,"Nueva asesoria", 
    `
    <div class="sup" style="width: 100%; display: flex; justify-content: center; align-items:center;">
        <img src="cid:unique@kreata.ee" style="width:20%; object-fit:cover;" alt="">
    </div>

    <div class="inf" style="text-align: center;">
    <p style="text-align: justify;width: 50%;margin: auto;margin-top: 50px;"><b>Hola ${name}, </b>Se ha agendado una cita para ${fecha} con ${other}
        <br>
        <br>
        <br>
        <br>
        <a href="https://polinet.netlify.app/#/Reunion/${id}/">Link de la asesoria</a>
        <br>
        <br>
        <b>Recuerda calificar luego de la reunion </b>
        <a href="https://polinet.netlify.app/#/survey/${survey}/">Link de la asesoria</a>
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
    path: __dirname + '/logoPolinet.png',
    cid: 'unique@kreata.ee' 
}])
  };




  module.exports = {messageBoking};