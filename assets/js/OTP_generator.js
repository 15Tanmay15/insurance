let generate = () => {


    let OTP = Math.floor(1000 + Math.random() * 9000)

    return OTP;
}

OTPbutton = document.getElementById('OTP-btn');

OTPbutton.addEventListener('click', ()=>{

    let otp = generate();
    console.log(otp);

    document.getElementById('otp-text').innerHTML = otp;
})