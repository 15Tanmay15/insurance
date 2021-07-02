let x=0;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
    if(width<505 & x==0){
        calculate();
        x=1;
    }
    else if(width>505 & x==1){
        calculate();
        x=0;
    }
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
        document.querySelector('#interest').innerHTML="Loan EMI : ₹ "+ (Number(principle)*Number(rate)*0.01)/Number(month);
        document.querySelector('#principle').innerHTML="Interest Amount : ₹ "+ (Number(principle)*Number(rate)*0.01);
        document.querySelector('#total').innerHTML="Total Money : ₹ "+ tot;
        document.querySelector(".values").style.display="block";
        document.querySelector(".col-two").style.display="block";
        if(window.width<505){
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Interest money',Number(principle)*Number(rate)*0.01 ],
                ['Loan amount', Number(principle)]]);

            var options = { pieStartAngle: 120,slices: {  0: {offset: 0.2,color:"rgb(54, 190, 54)"},1: {color:"#008080"}},is3D: true,animation:
           {
               startup: true,
               duration: 2000,
               easing: 'out'
           },legend:{textStyle: {color: 'white'}}, 'width':"100%", 'height':250,chartArea: {width: "80%", height: "100%"} ,'backgroundColor':'transparent'};

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                chart.draw(data, options)
                var percent = 0;
                // start the animation loop
                var handler = setInterval(function(){
                    // values increment
                    percent += 1;
                    // apply new values
                    data.setValue(0, 1, 100 - percent);
                    data.setValue(1, 1, percent);
                    // update the pie
                    chart.draw(data, options);
                    // check if we have reached the desired value
                    if (percent > 100*Number(principle)/((Number(principle)*Number(rate))*0.01+Number(principle)))
                        // stop the loop
                        clearInterval(handler);
                }, 20);

        }
        else{
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Interest money',Number(principle)*Number(rate)*0.01 ],
                ['Loan amount', Number(principle)],]);

                var options = { pieStartAngle: 120,slices: {  0: {offset: 0.2,color:"rgb(54, 190, 54)"},1: {color:"#008080"}},is3D: true,animation:
           {
               startup: true,
               duration: 2000,
               easing: 'out'
           },legend:{textStyle: {color: 'white'}}, 'width':450, 'height':320,chartArea: {width: "80%", height: "100%"} ,'backgroundColor':'transparent'};

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                chart.draw(data, options)
                var percent = 0;
            // start the animation loop
                var handler = setInterval(function(){
                    // values increment
                    percent += 1;
                    // apply new values
                    data.setValue(0, 1, 100 - percent);
                    data.setValue(1, 1, percent);
                    // update the pie
                    chart.draw(data, options);
                    // check if we have reached the desired value
                    if (percent > 100*Number(principle)/((Number(principle)*Number(rate))*0.01+Number(principle)))
                        // stop the loop
                        clearInterval(handler);
            }, 20);

        }
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

