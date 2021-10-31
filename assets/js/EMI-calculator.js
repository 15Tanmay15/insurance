let count=0;
let temp=0;
function tablecal(EMI,interest,total)
{
    if(count!=0){
        document.querySelector('.table').deleteRow(1);
    }
    if(temp==0)
    {
        var tbodyRef = document.querySelector('.table').getElementsByTagName('tbody')[0];
        var newRow = tbodyRef.insertRow();
        newCell1 = newRow.insertCell(0);
        newCell2 = newRow.insertCell(1);
        newCell3 = newRow.insertCell(2);
        newCell1.innerText=EMI.toLocaleString('en-IN');
        newCell2.innerText=interest.toLocaleString('en-IN');
        newCell3.innerText=total.toLocaleString('en-IN');
        temp=1;
    }
    else{
        var tbodyRef = document.querySelector('.table').getElementsByTagName('tbody')[0];
        var newRow = tbodyRef.insertRow();
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        newCell1.innerText=EMI;
        newCell2.innerText=interest;
        newCell3.innerText=total;
    }
    count=1;
}

let x=0;

window.onresize = window.onload = function() {
    calculate();
    console.log()
  }

function calculate()
{
    principle=document.querySelector("#p1").value;
    rate=document.querySelector("#r1").value;
    month=document.querySelector("#m1").value;
    rate=Number(Number(rate)/(12*100));
    expo=Math.pow(Number(rate)+1,Number(month));
    val1=Number(Number(principle)*Number(rate)*expo/(expo-1)).toFixed(2);
    val3=Number(Number(val1)*Number(month)).toFixed(0);
    val2=Number(Number(val3)-Number(principle)).toFixed(2);
    tablecal(val1,val2,val3);
    // document.querySelector(".values").style.display="block";
    document.querySelector(".col-two").style.display="block";
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Interest money', 100 - Number((Number(principle)/Number(val3))*100)],
        ['Loan amount', Number((Number(principle)/Number(val3))*100)]]);
    if(window.innerWidth<1000 || window.innerWidth<505)
    {
        var options={ pieStartAngle: 120,slices: {  0: {offset: 0.2,color:"rgb(54, 190, 54)"},1: {color:"#008080"}},is3D: true,animation:{ startup: true, duration: 2000, easing: 'out' },legend:{textStyle: {color: 'white'}}, 'width':"100%", 'height':"100%",chartArea: {width: "350", height: "300"} ,'backgroundColor':'transparent'};
    }
    else
    {
        var options = { pieStartAngle: 120,slices: {  0: {offset: 0.2,color:"rgb(54, 190, 54)"},1: {color:"#008080"}},is3D: true,animation:{ startup: true,duration: 2000,easing: 'out'},legend:{textStyle: {color: 'white'}}, 'width':"100%", 'height':"100%",chartArea: {width: "500", height: "350"} ,'backgroundColor':'transparent'};
    }
    if(x==0){
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options)
        var percent = 0;
        var compare=Number((Number(principle)/Number(val3))*100);
        var handler = setInterval(function(){
            percent += 1;
            data.setValue(0, 1, 100 - percent);
            data.setValue(1, 1, percent);
            chart.draw(data, options);
            if (percent > compare){
                data.setValue(0, 1, 100 - compare);
                data.setValue(1, 1, compare);
                chart.draw(data, options);
                clearInterval(handler);
            }
        }, 2);
        x=1;
    }
    else{
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
}



function slider1()
{
    if(document.querySelector("#p2").value)
    {
        document.getElementById("p1").value= document.querySelector("#p2").value;
    }
    x=0;
    calculate();
}

function slider2()
{
    if(document.querySelector("#r2").value)
    {
        document.getElementById("r1").value= document.querySelector("#r2").value;
    }
    x=0;
    calculate();
}
function slider3()
{
    if(document.querySelector("#m2").value)
    {
        document.getElementById("m1").value= document.querySelector("#m2").value;
    }
    x=0;
    calculate();
}

function frominput1()
{
    if(document.getElementById("p1").value)
    {
        document.querySelector("#p2").value=document.getElementById("p1").value;
    }
    x=0;
    calculate();
}

function frominput2()
{
    if(document.getElementById("r1").value)
    {
        document.querySelector("#r2").value=document.getElementById("r1").value;
    }
    x=0;
    calculate();
}

function frominput3()
{
    if(document.getElementById("m1").value)
    {
        document.querySelector("#m2").value=document.getElementById("m1").value;
    }
    x=0;
    calculate();
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

