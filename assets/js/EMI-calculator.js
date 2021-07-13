let x=0;

window.onresize = window.onload = function() {
    calculate();
    console.log("aedf")
  }

function calculate()
{
    principle=document.querySelector("#p1").value;
    rate=document.querySelector("#r1").value;
    month=document.querySelector("#m1").value;
    interest=(Number(principle)*Number(rate))*0.01/(Number(month));
    total=(Number(principle)/Number(month))+interest;
    if(Number.isFinite(total)){
        var tot=Number(Number(interest)*Number(month))+Number(principle);
        val1=((Number(principle)*Number(rate)*0.01)/Number(month)).toFixed(2);
        val2=(Number(principle)*Number(rate)*0.01).toFixed(2);
        val3=tot.toFixed(2);
        tablecal(val1,val2,val3);
        // document.querySelector(".values").style.display="block";
        document.querySelector(".col-two").style.display="block";
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Interest money',Number(principle)*Number(rate)*0.01 ],
            ['Loan amount', Number(principle)]]);

        if(window.innerWidth<1000 || window.innerWidth<505)
        {
            var options={ pieStartAngle: 120,slices: {  0: {offset: 0.2,color:"rgb(54, 190, 54)"},1: {color:"#008080"}},is3D: true,animation:{ startup: true, duration: 2000, easing: 'out' },legend:{textStyle: {color: 'white'}}, 'width':"100%", 'height':"100%",chartArea: {width: "350", height: "250"} ,'backgroundColor':'transparent'};
        }
        else
        {
            var options = { pieStartAngle: 120,slices: {  0: {offset: 0.2,color:"rgb(54, 190, 54)"},1: {color:"#008080"}},is3D: true,animation:{ startup: true,duration: 2000,easing: 'out'},legend:{textStyle: {color: 'white'}}, 'width':"100%", 'height':"100%",chartArea: {width: "500", height: "350"} ,'backgroundColor':'transparent'};
        }
        if(x==0){
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options)
            var percent = 0;
            var handler = setInterval(function(){
                percent += 1;
                data.setValue(0, 1, 100 - percent);
                data.setValue(1, 1, percent);
                chart.draw(data, options);
                if (percent > 100*Number(principle)/((Number(principle)*Number(rate))*0.01+Number(principle))){
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
}

let count=0;
function tablecal(EMI,interest,total)
{
    if(count!=0){
        document.getElementsByTagName('table')[0].deleteRow(1);
    }
    var tbodyRef = document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
    var newRow = tbodyRef.insertRow();
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    var newCell3 = newRow.insertCell(2);
    newCell1.innerText=EMI;
    newCell2.innerText=interest;
    newCell3.innerText=total;
    count=month;
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

