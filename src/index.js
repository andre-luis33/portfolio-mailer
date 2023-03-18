const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

const corsOptions = {
   origin: 'http://127.0.0.1:5500'
}
app.use(cors(corsOptions))

app.post('/mail', (req, res) => {

   const { name, email, message } = req.body;
   if(!name || !email || !message) {
      return res.status(400).json({message: 'Missing required fields! {name}, {email} and {message}'});
   }

   const sendMail = require('./mailer');
   sendMail(name, email, message);
   return res.status(201).json({message: 'E-mail sent, thank you :)'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server running is running at http://localhost:${port}`);
});
