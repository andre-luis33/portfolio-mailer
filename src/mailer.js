function sendMail(name, email, message) {
   require('dotenv').config();
   const nodemailer = require('nodemailer');

   const { MAIL_ADDRESS, MAIL_PASSWORD } = process.env

   const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
         user: MAIL_ADDRESS,
         pass: MAIL_PASSWORD
      }
   });
   
   const mailBody = `
      Opa, alguém preencheu teu formulário! (ou quebrou a API....) <br>

      <b>Nome:</b> ${name} <br>
      <b>E-mail:</b> ${email} <br>
      <b>Mensagem</b> ${message} <br><br>

      Então é isso, valeu!
   `

   const mailOptions = {
      from: MAIL_ADDRESS,
      to: 'andreluismoura22@gmail.com',
      subject: 'Formulário do Portfólio',
      text: 'Novo e-mail pelo portfólio!',
      html: mailBody
   };
   
   transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
         console.log(error);
         return;
      }
   
      console.log(`Email sent!: ${info.response}`);
   });
   
}

module.exports = sendMail;