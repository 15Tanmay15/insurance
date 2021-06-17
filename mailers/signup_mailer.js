const nodemailer = require('../config/nodemailer');

// also a way for exporting a method
exports.newAccount = (signUp) => {
    console.log(signUp);
    let htmlString = nodemailer.renderTemplate({signUp: signUp}, '/sign/signUp.ejs')

    nodemailer.transporter.sendMail({
        from: 'ts2insurancemarketing@gmail.com',
        to: signUp.connector.email,
        subject: 'Account creation successful',
        html: htmlString
    }, (err, info) => {
        if(err){
            console.log('err in sending mail', err);
            return;
        }

        console.log('mail delivered', info);
        return;
    })
}