var dropdownItem = document.getElementsByClassName('dropdown-item');
var logo = document.getElementsByClassName('navbar-brand');

for(var i=0; i<dropdownItem.length; i++){
dropdownItem[i].addEventListener('focus', function(){
    this.style.backgroundColor = "darkgrey";
})
};
