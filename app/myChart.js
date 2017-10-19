angular.module("myChart", [])
    .directive("chartDisplay", function(){
        function link(scope, element, attrs){
            console.log(scope);
            var chartColors = {
                orange: 'rgb(237, 194,64)',
                blue: 'rgb(175, 216,248)',
                red: 'rgb(255, 99, 132)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(201, 203, 207)'
            };
            var chartSets=[];
            chartSets = Object.keys(chartColors);
            Chart.pluginService.register({
                beforeDraw: function (chart, easing) {
                    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
                        var helpers = Chart.helpers;
                        var ctx = chart.chart.ctx;
                        var chartArea = chart.chartArea;

                        ctx.save();
                        ctx.beginPath();
                        ctx.lineWidth="2";
                        ctx.strokeStyle="#000";
                        //ctx.strokeStyle="blue";
                        ctx.rect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            });

            //var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            //var color = Chart.helpers.color;
            var barChartData = scope.data;
            var i=0;
            barChartData.datasets.forEach(function(dataset) {
                if(scope.type == 'bar')
                    dataset.borderWidth=1.5;
                dataset.backgroundColor=Chart.helpers.color(chartColors[chartSets[i]]).alpha(0.5).rgbString();//'rgba(237, 194,64, 0.5)',
                dataset.borderColor= chartColors[chartSets[i]];
                i++;
            });
            var ctx = document.getElementById("canvas").getContext("2d");
            ctx.canvas.height=200;
            window.myBar = new Chart(ctx, {
                type: scope.type,
                data: barChartData,
                options: {
                    chartArea: {
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    layout: {
                        padding: {
                            left: 50,
                            right: 50,
                            top: 0,
                            bottom: 0
                        }
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                offsetGridLines: false
                            },
                            ticks:{
                                display:true,
                                fontColor:'#545454'
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                fontColor:'#545454'
                            }
                        }]

                    },
                    maintainAspectRatio: false,

                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            fontColor: '#545454',
                        }
                    },
                    legendCallback: function(chart) {
                        // Return the HTML string here.
                        console.log('chart');
                        console.log(chart);
                        var table = "<table style='table-layout: fixed;border-collapse: collapse;'><tbody>";
                        barChartData.datasets.forEach(function(data){
                            table += "<tr><td style='width:1em; background-color:"+data.backgroundColor+"'"+"></td><td>"+data.label+"</td></tr>"
                        });
                        table += "</tbody></table>";
                        console.log(table);
                        return  table;
                    },
                    title: {
                        display: true,
                        text: 'Bar Chart'
                    }
                }

            });
            /*
            function getPos(el) {
                var rect=el.getBoundingClientRect();
                return {l:rect.left,t:rect.top, r:rect.right, b:rect.bottom};
            }
            var coords = getPos(document.getElementById("canvas"));     //coords of chart
            var legend = document.getElementById("legend");
            //document.getElementById('legend').style.width="50px";
            //document.getElementById('legend').style.length="100px";
            console.log('coords');
            console.log(coords);
            document.getElementById('legend').innerHTML = window.myBar.generateLegend();    // inject a legend
            document.getElementById('legend').style.top = (coords.t+myBar.chartArea.top).toString()+ "px";
            document.getElementById('legend').style.right = (coords.r-myBar.chartArea.right).toString()+ "px";
            */
        }
        return {
            restrict: 'E',
            scope:{
                type: '=',
                data:'='
            },
            //templateUrl:'app/pages/barChart.html',
            template:"<div id='container' style='width: 100%; height:200px;'><canvas id='canvas'></canvas></div>",
            link: link
        }
    })
;