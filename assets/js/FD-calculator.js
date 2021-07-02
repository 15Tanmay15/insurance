
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    principle = document.querySelector("#A1").value;
    rate = document.querySelector("#R1").value;
    month = document.querySelector("#P1").value;
    interest = (Number(principle) * Number(rate)) * 0.01* (Number(month)/12);
    total = (Number(principle) / Number(month)) + interest;
    if (Number.isFinite(total)) {
        var tot = Number(Number(interest) * Number(month)) + Number(principle);
        var data = google.visualization.arrayToDataTable([
            ['Amount', '₹ Total', '₹ Fixed ', '₹ Interest'],
            ['Analysis', Number(principle)+Number(interest), Number(principle), Number(interest)],
        ]);

        if(window.innerWidth>1000) {
            var options = {
                // height: 500, width: window.innerWidth/2 -150,
                height: 500, width: "100%",
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical',
                "backgroundColor": "transparent"
            };
        }
        else if (window.innerWidth < 1000 & window.innerWidth > 607) {
            var options = {
                height: 500, width: (window.innerWidth - 170),
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical', "backgroundColor": "transparent"
            };
        }
        else if (window.innerWidth < 607 & window.innerWidth > 400) {
            var options = {
                height: 400, width: (window.innerWidth - 100),
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical', "backgroundColor": "transparent"
            };
        }
        else {
            var options = {
                height: 350, width: "100%",
                chart: {
                    title: 'Fixed Deposit Calculator', animation: {
                        duration: 1000},
                },
                bars: 'vertical',
                "backgroundColor": "transparent"
            };
        }
        var chart = new google.charts.Bar(document.getElementById('barchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}

window.onresize = () => {
    drawChart();
}

function slider1() {
    if (document.querySelector("#A2").value) {
        document.getElementById("A1").value = document.querySelector("#A2").value;
    }
    drawChart();
}

function slider2() {
    if (document.querySelector("#R2").value) {
        document.getElementById("R1").value = document.querySelector("#R2").value;
    }
    drawChart();
}
function slider3() {
    if (document.querySelector("#P2").value) {
        document.getElementById("P1").value = document.querySelector("#P2").value;
    }
    drawChart();
}

function frominput1() {
    if (document.getElementById("A1").value) {
        document.querySelector("#A2").value = document.getElementById("A1").value;
    }
    drawChart();
}

function frominput2() {
    if (document.getElementById("R1").value) {
        document.querySelector("#R2").value = document.getElementById("R1").value;
    }
    drawChart();
}

function frominput3() {
    if (document.getElementById("P1").value) {
        document.querySelector("#P2").value = document.getElementById("P1").value;
    }
    drawChart();
}
