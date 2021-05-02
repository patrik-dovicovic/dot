var PORT = process.env.PORT || 80;
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const bp = require('body-parser')
var nodemailer = require('nodemailer');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors());
app.use(express.static(path.join(dirname, "public")))
app.listen(PORT);

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'public/', 'main.html'));
});

app.post('/6', (req, res) => {
    var x = req.body[0]
    console.log(req.body)
    var username = x.name
    var mail = x.email
    var games = x.game
    var steam = x.steam_url



    var transporter = nodemailer.createTransport({
        service: 'gmail.com',
        auth: {
          user: 'dot.esports.webdev@gmail.com',
          pass: 'pnoe3cWH32IDPdfqB9g9'
        }
      });

      var mailOptions = {
        from: 'dot.esports.webdev@gmail.com',
        to: 'dot.esports.webdev@gmail.com',
        subject: 'new user',
        text: ' username = ${username}
                mail = ${mail}
                games = ${games}
                steam = ${steam}'

      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
