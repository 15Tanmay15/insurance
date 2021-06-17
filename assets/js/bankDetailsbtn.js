// document.getElementById('bankDetailsbtn').addEventListener('click', () =>{
//     document.getElementById('bankDetailsbtn').disabled = true
// })

var width,height;
window.onresize = window.onload = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  if(width<591){
    document.getElementsByClassName('get')[0].placeholder="Bank's name";
    document.getElementsByClassName('get')[1].placeholder='Account Number';
    document.getElementsByClassName('get')[2].placeholder="bank's IFSC Code";
    }
    else{
    document.getElementsByClassName('get')[0].placeholder="Enter your bank's name";
    document.getElementsByClassName('get')[1].placeholder='Enter your Account Number';
    document.getElementsByClassName('get')[2].placeholder="Enter your bank's IFSC Code";
  }
}
