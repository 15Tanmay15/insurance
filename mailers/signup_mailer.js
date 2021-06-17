const nodemailer = require('../config/nodemailer');

// also a way for exporting a method
exports.newAccount = (signUp) => {
    console.log('inside new signup mailer');

    nodemailer.transporter.sendMail({
        from: 'ts2insurancemarketing@gmail.com',
        to: signUp.user.email,
        subject: 'Account creation successful',
        html: '<h1>Account Created Successfully</h1>'
    }, (err, info) => {
        if(err){
            console.log('err in sending mail', err);
            return;
        }

        console.log('mail delivered', info);
        return;
    })
}