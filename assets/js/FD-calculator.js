
function slider1()
{
    if(document.querySelector("#A2").value)
    {
        document.getElementById("A1").value= document.querySelector("#A2").value;
    }
}

function slider2()
{
    if(document.querySelector("#R2").value)
    {
        document.getElementById("R1").value= document.querySelector("#R2").value;
    }
}
function slider3()
{
    if(document.querySelector("#P2").value)
    {
        document.getElementById("P1").value= document.querySelector("#P2").value;
    }
}

function frominput1()
{
    if(document.getElementById("A1").value)
    {
        document.querySelector("#A2").value=document.getElementById("A1").value;
    }
}

function frominput2()
{
    if(document.getElementById("R1").value)
    {
        document.querySelector("#R2").value=document.getElementById("R1").value;
    }
}

function frominput3()
{
    if(document.getElementById("P1").value)
    {
        document.querySelector("#P2").value=document.getElementById("P1").value;
    }
}
