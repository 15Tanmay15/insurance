function calculate()
{
    console.log(document.querySelector("#p1").value);    
    console.log(document.querySelector("#r1").value);
    console.log(document.querySelector("#m1").value);
    principle=document.querySelector("#p1").value;
    rate=document.querySelector("#r1").value;
    month=document.querySelector("#m1").value;
    interest=(Number(principle)*Number(rate))*0.1/(Number(month));
    total=(Number(principle)/Number(month))+interest;
    console.log(total.toFixed(3));
    console.log("hey");
    if(Number.isFinite(total)){
        document.querySelector('#head').innerHTML="EMI : ₹"+ total.toFixed(4);
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Interest money',Number(principle)*Number(rate)*0.01 ],
            ['Loan amount', Number(principle)],]);

            var options = { legend:{textStyle: {color: 'white'}}, 'width':450, 'height':320,chartArea: {width: 400, height: 300} ,'backgroundColor':'#808080'};

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options)
    }
}

function slider1()
{
    if(document.querySelector("#p2").value)
    {
        document.getElementById("p1").value= document.querySelector("#p2").value;
    }
    calculate();
}

function slider2()
{
    if(document.querySelector("#r2").value)
    {
        document.getElementById("r1").value= document.querySelector("#r2").value;
    }
    calculate();
}
function slider3()
{
    if(document.querySelector("#m2").value)
    {
        document.getElementById("m1").value= document.querySelector("#m2").value;
    }
    calculate();
}

function frominput1()
{
    if(document.getElementById("p1").value)
    {
        document.querySelector("#p2").value=document.getElementById("p1").value;
    }
    calculate();
}

function frominput2()
{
    if(document.getElementById("r1").value)
    {
        document.querySelector("#r2").value=document.getElementById("r1").value;
    }
    calculate();
}

function frominput3()
{
    if(document.getElementById("m1").value)
    {
        document.querySelector("#m2").value=document.getElementById("m1").value;
    }
    calculate();
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
