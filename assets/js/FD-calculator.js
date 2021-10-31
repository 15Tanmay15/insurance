google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);
var x=0;
var y=0;
function drawChart() {
    principle = document.querySelector("#A1").value;
    rate=document.querySelector('#R1').value ;
    month = document.querySelector("#P1").value;
    interest = (Number(principle) *( Math.pow((1+(Number(rate)/100)), Math.floor(Number(month)/12)) -1));
    total = (Number(principle) / Number(month)) + interest;
    if (Number.isFinite(total)) 
    {
        document.getElementById('amount1').innerText="Total : "+ Number(Number(principle)+Number(interest)).toFixed(2) ;
        document.getElementById('amount2').innerText="Deposit : "+ Number(principle);
        document.getElementById('amount3').innerText="Profit : "+ Number(interest).toFixed(2);
        document.getElementById('amount1').style.display='block';
        document.getElementById('amount2').style.display='block';
        document.getElementById('amount3').style.display='block';
        document.querySelector('#barchart_material').style.marginTop="0rem";
        var tot = Number(Number(interest) * Number(month)) + Number(principle);
        var data = google.visualization.arrayToDataTable([
            ['', '₹ Total', '₹ Fixed ', '₹ Interest'],
            ['Analysis', Number(principle)+Number(interest), Number(principle), Number(interest)],
        ]);
        var ytickmin=0;
        var ytickmax=Number(principle)+Number(interest)+(Number(principle)+Number(interest))*0.1;
        if(window.innerWidth>1000) {
            var options = {colors: ["#82ccdd",'#22a6b3',"#747d8c"],titleTextStyle: {
                            color: 'black'
                        },vAxis	: {
						// title : "Marks Scored",
						// titleTextStyle : {
						// 	fontName : "Oswald",
						// 	italic : false,
						// 	color : "#990000"
						// },
						minorGridlines : {
							count : 19
						},
						gridlines : {
							count : 20
						}
                        ,viewWindow : {
							min : ytickmin,
							max : ytickmax 
						}
					},
                // height: 450, width: window.innerWidth/2 -150,
                height: 450, width: "100%",
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical',legend: {position: 'top', textStyle: {color: 'black',fontSize: 12}},"backgroundColor":"rgb(185, 201, 212)",
                chartArea: {
      backgroundColor: 'rgb(211, 210, 210)'
    }
            };
        }
        else if (window.innerWidth < 1000 & window.innerWidth > 550) {
            var options = {colors: ["#82ccdd",'#22a6b3',"#747d8c"],titleTextStyle: {
                            color: 'black'
                        },vAxis	: {
						// title : "Marks Scored",
						// titleTextStyle : {
						// 	fontName : "Oswald",
						// 	italic : false,
						// 	color : "#990000"
						// },
						minorGridlines : {
							count : 19
						},
						gridlines : {
							count : 20
						}
                        ,viewWindow : {
							min : ytickmin,
							max : ytickmax 
						}
					},
                height: 450, width: "100%",
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical',legend: {position: 'top', textStyle: {color: 'black',fontSize: 12}},"backgroundColor":"rgb(185, 201, 212)",
                chartArea: {
      backgroundColor: 'rgb(211, 210, 210)'
    }
            };
        }
        else if (window.innerWidth < 550 & window.innerWidth > 400) {
            document.querySelector('#barchart_material').style.marginTop="1rem";
            var options = {colors: ["#82ccdd",'#22a6b3',"#747d8c"],titleTextStyle: {
                            color: 'black'
                        },vAxis	: {
						// title : "Marks Scored",
						// titleTextStyle : {
						// 	fontName : "Oswald",
						// 	italic : false,
						// 	color : "#990000"
						// },
						minorGridlines : {
							count : 19
						},
						gridlines : {
							count : 20
						}
                        ,viewWindow : {
							min : ytickmin,
							max : ytickmax 
						}
					},
                height: 400, width: "100%",
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical',legend: {position: 'top', textStyle: {color: 'black',fontSize: 12}},"backgroundColor":"rgb(185, 201, 212)",
                chartArea: {
      backgroundColor: 'rgb(211, 210, 210)'
    }
            };
        }
        else {
            var options = {colors: ["#82ccdd",'#22a6b3',"#747d8c"],titleTextStyle: {
                            color: 'black'
                        },vAxis	: {
						// title : "Marks Scored",
						// titleTextStyle : {
						// 	fontName : "Oswald",
						// 	italic : false,
						// 	color : "#990000"
						// },
						minorGridlines : {
							count : 19
						},
						gridlines : {
							count : 20
						}
                        ,viewWindow : {
							min : ytickmin,
							max : ytickmax 
						}
					},
                height: 350, width: "100%",
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical',
                legend: {position: 'top', textStyle: {color: 'black',fontSize: 12}},"backgroundColor":"rgb(185, 201, 212)",
                chartArea: {
      backgroundColor: 'rgb(211, 210, 210)'
    }
            };
        }
        // chart.draw(data, google.charts.Bar.convertOptions(options));
        
        // var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        // chart.draw(data, options)
        if(x==0)
        {
            x=1;
            var percent = 0;
            var change1=(Number(principle)+Number(interest))*0.01;
            var change2=(Number(principle)*0.01);
            var change3=(Number(interest)*0.01);
            var chart = new google.charts.Bar(document.getElementById('barchart_material'));
            // start the animation loop
            var handler = setInterval(function(){
                // values increment
                percent += 2;
                // apply new values
                data.setValue(0, 1, percent*change1);
                data.setValue(0, 2, percent*change2);
                data.setValue(0, 3, percent*change3);
                // update the pie
                chart.draw(data, google.charts.Bar.convertOptions(options));
                if (percent > 98)
                {
                    // stop the loop
                    data.setValue(0, 1, (Number(principle)+Number(interest)));
                    data.setValue(0, 2, 100*change2);
                    data.setValue(0, 3, 100*change3);
                    chart.draw(data, google.charts.Bar.convertOptions(options));
                    document.querySelector(".full").style.display="block";
                    document.getElementById("full-div").scrollIntoView();
                    tablecal(Number(principle),Number(rate),Math.floor(Number(month)/12));
                    clearInterval(handler);
                }
            }, 0);
        }
        else{
            var chart = new google.charts.Bar(document.getElementById('barchart_material'));
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
    else{
        var options = {colors: ["#82ccdd",'#22a6b3',"#747d8c"],titleTextStyle: {
                            color: 'black'
                        },vAxis	: {
            minorGridlines : {
                count : 19
            },
            gridlines : {
                count : 20
            }
            ,viewWindow : {
                min : 0,
                max : 1000000 
            }
                },
            height: 400, width: "100%",
            chart: {
                title: 'Fixed Deposit Calculator', animation: {
                    duration: 1000},
            },
            bars: 'vertical',legend: {position: 'top', textStyle: {color: 'black',fontSize: 12}},
            "backgroundColor":"rgb(185, 201, 212)",
            chartArea: {
      backgroundColor: 'rgb(211, 210, 210)'
    }
        };
        var data = google.visualization.arrayToDataTable([
            ['', '₹ Total', '₹ Fixed ', '₹ Interest'],
            ['Analysis', 0,0,0],
        ]);
        document.querySelector('#barchart_material').style.marginTop="1rem";
        var chart = new google.charts.Bar(document.getElementById('barchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}

let count=0;
function tablecal(principle,rate,month)
{
    arr=['st','nd','rd','th']
    main=principle;
    inter=0;
    console.log(count);
    if(count!=0){
        for(i=0;i<count;i++)
        {
            document.getElementsByTagName('table')[0].deleteRow(1);
        }
    }
    
    for(i=0;i<month;i++)
    {
        var tbodyRef = document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
        var newRow = tbodyRef.insertRow();
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        if(i<=2){
            newCell1.innerText=i+1+arr[i]+' year';
        }
        else{
            newCell1.innerText=i+1+arr[3]+' year';
        }
        newCell2.innerText=(main).toFixed(2);
        newCell3.innerText=(inter+main*rate*0.01).toFixed(2);
        inter=inter+main*rate*0.01;
        main=main*rate*0.01+main;
    }
    count=month;
}

window.onload = ()=>{
    drawChart();
}

var check=0;
window.onresize = () => {
    drawChart();
    if(window.innerWidth<454){
        document.querySelectorAll('.slider')[0].style.display="none";
        document.querySelectorAll('.slider')[1].style.display="none";
        document.querySelectorAll('.slider')[2].style.display="none";
        document.querySelectorAll('.span1')[0].style.display="none";
        document.querySelectorAll('.span1')[1].style.display="none";
        document.querySelectorAll('.span1')[2].style.display="none";
        document.querySelectorAll('.span2')[0].style.display="none";
        document.querySelectorAll('.span2')[1].style.display="none";
        document.querySelectorAll('.span2')[2].style.display="none";
        check=1;
    }
    if(check=1 & window.innerWidth>454){
        document.querySelectorAll('.slider')[0].style.display="block";
        document.querySelectorAll('.slider')[1].style.display="block";
        document.querySelectorAll('.slider')[2].style.display="block";
        document.querySelectorAll('.slider')[0].style.marginBottom="0.4rem";
        document.querySelectorAll('.slider')[1].style.marginBottom="0.4rem";
        document.querySelectorAll('.slider')[2].style.marginBottom="0.4rem";
        document.querySelectorAll('.span1')[0].style.display="flex";
        document.querySelectorAll('.span1')[1].style.display="flex";
        document.querySelectorAll('.span1')[2].style.display="flex";
        document.querySelectorAll('.span2')[0].style.display="flex";
        document.querySelectorAll('.span2')[1].style.display="flex";
        document.querySelectorAll('.span2')[2].style.display="flex";
    }
}

function slider1() {
    if (document.querySelector("#A2").value) {
        document.getElementById("A1").value = document.querySelector("#A2").value;
    }
    x=0;
    drawChart();
}

function slider2() {
    if (document.querySelector("#R2").value) {
        document.getElementById("R1").value = document.querySelector("#R2").value;
    }
    x=0;
    drawChart();
}
function slider3() {
    if (document.querySelector("#P2").value) {
        document.getElementById("P1").value = document.querySelector("#P2").value;
    }
    x=0;
    drawChart();
}

function frominput1() {
    if (document.getElementById("A1").value) {
        document.querySelector("#A2").value = document.getElementById("A1").value;
    }
    x=0;
    drawChart();
}

function frominput2() {
    if (document.getElementById("R1").value) {
        document.querySelector("#R2").value = document.getElementById("R1").value;
    }
    x=0;
    drawChart();
}

function frominput3() {
    if (document.getElementById("P1").value) {
        document.querySelector("#P2").value = document.getElementById("P1").value;
    }
    x=0;
    drawChart();
}
