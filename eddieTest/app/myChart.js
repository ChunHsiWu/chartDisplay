angular.module("myChart", [])
    .directive("barChart", function(){
        function link(scope, element, attrs){

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

            var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var color = Chart.helpers.color;
            var barChartData = scope.obj;

            barChartData.datasets.forEach(function(dataset) {
                dataset.borderWidth=1.5;
            });
            var ctx = document.getElementById("canvas").getContext("2d");
            ctx.canvas.height=200;
            window.myBar = new Chart(ctx, {
                type: 'bar',
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
                                //max:10000,
                                beginAtZero:true,
                                fontColor:'#545454'
                            }
                        }]

                    },
                    maintainAspectRatio: false,

                    legend: {
                        display: true,
                        position: 'top',
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
            // custom legend

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

            /*
                        var values = new Array(2);
                        values[0] = ['co', 2012];
                        values[1] = ['co', 2015];


                        var table = document.createElement("table");

                        // IE7 only supports appending rows to tbody
                        var tbody = document.createElement("tbody");

                        // for each outer array row
                        for (var i = 0 ; i < values.length; i++) {
                            var tr = document.createElement("tr");
                            // for each inner array cell
                            // create td then text, append
                            for (var j = 0; j < values[i].length; j++) {
                                var td = document.createElement("td");
                                var txt = document.createTextNode(values[i][j]);
                                td.appendChild(txt);
                                tr.appendChild(td);
                            }

                            // append row to table
                            // IE7 requires append row to tbody, append tbody to table
                            tbody.appendChild(tr);
                            table.appendChild(tbody);
                            legend.appendChild(table);
                        }
                        //position: relative;top:150px; right:100px;
                        // (window.myBar.chartArea.right).toString()+"px"
            */
            // add more datasets
            /*
                        document.getElementById('randomizeData').addEventListener('click', function() {
                            var zero = Math.random() < 0.2 ? true : false;
                            barChartData.datasets.forEach(function(dataset) {
                                dataset.data = dataset.data.map(function() {
                                    return zero ? 0.0 : randomScalingFactor();
                                });

                            });
                            window.myBar.update();
                        });

                        var colorNames = Object.keys(window.chartColors);
                        document.getElementById('addDataset').addEventListener('click', function() {
                            var colorName = colorNames[barChartData.datasets.length % colorNames.length];;
                            var dsColor = window.chartColors[colorName];
                            var newDataset = {
                                label: 'Dataset ' + barChartData.datasets.length,
                                backgroundColor: color(dsColor).alpha(0.5).rgbString(),
                                borderColor: dsColor,
                                borderWidth: 1,
                                data: []
                            };

                            for (var index = 0; index < barChartData.labels.length; ++index) {
                                newDataset.data.push(randomScalingFactor());
                            }

                            barChartData.datasets.push(newDataset);
                            window.myBar.update();
                        });

                        document.getElementById('addData').addEventListener('click', function() {
                            if (barChartData.datasets.length > 0) {
                                var month = MONTHS[barChartData.labels.length % MONTHS.length];
                                barChartData.labels.push(month);

                                for (var index = 0; index < barChartData.datasets.length; ++index) {
                                    //window.myBar.addData(randomScalingFactor(), index);
                                    barChartData.datasets[index].data.push(randomScalingFactor());
                                }

                                window.myBar.update();
                            }
                        });

                        document.getElementById('removeDataset').addEventListener('click', function() {
                            barChartData.datasets.splice(0, 1);
                            window.myBar.update();
                        });

                        document.getElementById('removeData').addEventListener('click', function() {
                            barChartData.labels.splice(-1, 1); // remove the label first

                            barChartData.datasets.forEach(function(dataset, datasetIndex) {
                                dataset.data.pop();
                            });

                            window.myBar.update();
                        });
            */
        }
        return {
            restrict: 'E',
            scope:{
                data: '=',
                obj:'='
            },
            templateUrl:'app/pages/barChart.html',
            link: link
        }
    })
    .directive("lineChart", function(){
        function link(scope, element, attrs){
            var lineChartData = scope.obj;
            var config = {
                type: 'line',
                data: lineChartData,
                options: {
                    responsive: true,
                    title:{
                        display:true,
                        text:'Chart.js Line Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }]
                    }
                }
            };

            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        }
        return {
            restrict:'E',
            scope: {
                obj: '='
            },
            templateUrl:'app/pages/lineChart.html',
            link:link
        }
    })
    .directive("barChartAttribute", function(){
        function link(scope, element, attrs){
            var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var color = Chart.helpers.color;

            var barChartData = JSON.parse(attrs.barChartAttribute);   // convert String to Json
            barChartData.datasets.forEach(function(dataset) {
                dataset.borderWidth=1;
            });
            console.log(barChartData);
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Bar Chart'
                    }
                }
            });
        }
        return {
            restrict:'A',
            scope: {
                obj: '='
            },
            templateUrl:'app/pages/barChart.html',
            link:link
        }
    })
    .directive("lineChartAttribute", function(){
        function link(scope, element, attrs){
            var lineChartData = JSON.parse(attrs.lineChartAttribute);   // convert String to Json
            var config = {
                type: 'line',
                data: lineChartData,
                options: {
                    responsive: true,
                    title:{
                        display:true,
                        text:'Line Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }]
                    }
                }
            };

            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        }
        return {
            restrict:'A',
            scope: {
                obj: '='
            },
            templateUrl:'app/pages/lineChart.html',
            link:link
        }
    })
;