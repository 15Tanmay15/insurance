x = 0
y = 0
z = 0
k = 0

var stringarray=[]


var var1 = document.getElementById('life-first')
var var2 = document.getElementById('middle')
var var3 = document.getElementById('life-last')
var var4 = document.getElementById('anime')
var var5 = document.getElementById('select')
var var6 = document.getElementsByClassName('body')[0]
var var8 = document.getElementsByClassName('pagination')[0]
var var7 = document.getElementsByClassName('pagination')[1]
var var9 = document.getElementsByClassName('pagination')[2]

$('#right').on('click', () => {
    $('.spinner').css('display',"block")
    $('#anime').animate({ marginLeft: '100%', opacity: '0' }, { duration: 1000 })
    
    setTimeout(() => {
        $('#anime').css('margin-left', '0%')
    }, 500)
    $('#anime').animate({ marginLeft: '0%', opacity: '1' }, { duration: 1000 })
    setTimeout(() => {
        $('.spinner').css('display','none')
    }, 2000)

});

$('#left').on('click', () => {
    $('.spinner').css('display',"block")
    $('#anime').animate({ marginRight: '100%', opacity: '0' }, { duration: 1000 })
    setTimeout(() => {
        $('#anime').css('margin-right', '0%')
    }, 1000)
    $('#anime').animate({ marginRight: '0%', opacity: '1' }, { duration: 1000 })
    
    setTimeout(() => {
        $('.spinner').css('display','none')
    }, 2000)
});

function clearinp(){
    var1.value="";
    var2.value="";
    var3.value="";
}

function func() {
    if (x == 0) {
        stringarray[0]=var1.value
        stringarray[1]=var2.value
        stringarray[2]=var3.value
        clearinp();
        if(k==1){
            var1.value=stringarray[3]
            var2.value=stringarray[4]
            var5.value=stringarray[5]
        }
        var6.style.background = "rgba(200,200,200,1)";
        setTimeout(() => {
            var1.setAttribute('name', 'company')
            var2.setAttribute('name', 'income')
            var1.setAttribute('placeholder', "Company Name");
            var2.setAttribute('placeholder', "Net Monthly Income");
            var3.style.display = "none"
            var6.style.background = "rgb(240,240,240)";
            var5.style.display = "block"
            var8.style.display = "block"
        }, 1000)
        x = 1;
    }
    else if (y == 0 & x == 1) {
        stringarray[3]=var1.value
        stringarray[4]=var2.value
        stringarray[5]=var5.value
        var6.style.background = "rgba(200,200,200,1)";
        clearinp();
        setTimeout(() => {
            var1.setAttribute('name', 'email')
            var1.setAttribute('type', 'email')
            var2.setAttribute('name', 'phone')
            var1.setAttribute('placeholder', "eg. tanmaygupta@gmail.com");
            var2.setAttribute('placeholder', "+91 ");
            var7.style.display = "block";
            var5.style.display = "none"
            var3.style.display = "block"
            var4.style.animation = "none";
            var6.style.background = "rgb(240,240,240)";
            var9.style.display = "none";
        }, 1000)
        k=1;
        y = 1;
    }
}


// var var1 = document.getElementById('life-first')
// var var2 = document.getElementById('middle')
// var var3 = document.getElementById('life-last')
// var var4 = document.getElementById('anime')
// var var5 = document.getElementById('select')
// var var6 = document.getElementsByClassName('form-life')[0]
// var var8 = document.getElementsByClassName('pagination')[0]
// var var7 = document.getElementsByClassName('pagination')[1]
// var var9 = document.getElementsByClassName('pagination')[2]

function func2() {

    if (x == 1 & y == 0) {
        var2.setAttribute('type', 'text')
        var8.style.display = "none"
        var6.style.background = "rgba(200,200,200,1)";
        var1.value=stringarray[0]
        var2.value=stringarray[1]
        var3.value=stringarray[2]
        setTimeout(() => {
            var6.style.background = "rgb(240,240,240)";
            var5.style.display = "none"
            var3.style.display = "block"
            var1.setAttribute('name', 'first')
            var2.setAttribute('name', 'last')
            var3.setAttribute('name', 'city')
            var1.setAttribute('placeholder', "First Name");
            var2.setAttribute('placeholder', "Last Name");
        }, 1000)
        x = 0;
    }
    else if (y == 1) {
        var1.value=stringarray[3]
        var2.value=stringarray[4]
        var5.value=stringarray[5]
        var6.style.background = "rgba(200,200,200,1)";
        setTimeout(() => {
            var6.style.background = "rgb(240,240,240)";
            var5.style.display = "block"
            var9.style.display = "block"
            var7.style.display = "none";
            var3.style.display = "none"
            var1.setAttribute('name', 'company')
            var2.setAttribute('name', 'income')
            var2.setAttribute('type', 'number')
            var3.style.display = "none"
            var1.setAttribute('placeholder', "Company Name");
            var2.setAttribute('placeholder', "Net Monthly Income");
        }, 1000)
        var9.style.display = "none";
        y = 0;
    }
}