const express = require('express');
const cors = require('cors');
const sendMail = require('./mailer');

const app = express();
app.use(express.json());

const corsOptions = {
   origin: 'https://my-website-andre-luis33.vercel.app',
   methods: 'GET,POST'
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
   return res.json({message: 'Welcome to the API'});
});

app.post('/mail', (req, res) => {

   const { name, email, message } = req.body;
   if(!name || !email || !message) {
      return res.status(400).json({message: 'Missing required fields! {name}, {email} and {message}'});
   }

   sendMail(name, email, message);
   return res.status(200).json({message: 'E-mail sent, thank you :)'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server running is running at port ${port}`);
});
