require('dotenv').config();
const { Resend } = require('resend')

async function sendMail(name, email, message) {

   const { API_KEY } = process.env
   const mailBody = `
      Opa, alguém preencheu teu formulário! (ou quebrou a API....) <br>

      <b>Nome:</b> ${name} <br>
      <b>E-mail:</b> ${email} <br>
      <b>Mensagem</b> ${message} <br><br>

      Então é isso, valeu!
   ` 

   try {
      const resend = new Resend(API_KEY);

      const data = await resend.emails.send({
        from: 'Resend <onboarding@resend.dev>',
        to: 'andreluismoura22@gmail.com',
        subject: 'Formulário do Portfólio',
        html: mailBody,
      });
  
      console.log(data);

   } catch (error) {
      console.error(error);
   }
   
}

module.exports = sendMail;