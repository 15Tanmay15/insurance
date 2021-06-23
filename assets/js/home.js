var dropdownItem = document.getElementsByClassName('dropdown-item');
var logo = document.getElementsByClassName('navbar-brand');

for(var i=0; i<dropdownItem.length; i++){
dropdownItem[i].addEventListener('focus', function(){
    this.style.backgroundColor = "darkgrey";
})
};

// videotag=document.querySelector('video');
// setInterval(function (){videotag.play()},1);
// var c=0;
// setInterval(() => {
//     if(c==0){
//         document.getElementById('image').style.animation='image 1s'
//         document.getElementById('image').src="../images/meet.jpg";
//         c+=1;
//     }
//     else{
//         document.getElementById('image').style.animation='image 1s'
//         document.getElementById('image').src="../images/hey.jpg";
//         c-=1;
//     }
// }, 5000);

var im = document.getElementById("image");

var images = ["../images/meet.jpg","../images/hey.jpg"];
var index=0;

function changeImage()
{
    im.setAttribute("src", images[index]);
    index++;
    if(index >= images.length)
    {
        index=0;
    }
}

setInterval(changeImage, 3000);