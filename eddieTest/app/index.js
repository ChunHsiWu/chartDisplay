angular.module("myApp", ['myChart'])
    .controller('myController', function($scope){
        $scope.obj = {
            param1:'Test Message 1',
            param2:'Test Message 2',
            param3:'Test Message 3',
            param4:'Test Message 4',
            param5:'Test Message 5'
        };
        var color = Chart.helpers.color;
        var mockData = [
            {
                "FOR": "01 MIC",
                "ERA": "ERA 2015",
                "Journals": 376.5
            },
            {
                "FOR": "01 MIC",
                "ERA": "ERA 2012",
                "Journals": 311.8
            },
            {
                "FOR": "02 PCE",
                "ERA": "ERA 2015",
                "Journals": 436.09
            },
            {
                "FOR": "02 PCE",
                "ERA": "ERA 2012",
                "Journals": 452.36
            },
            {
                "FOR": "03 PCE",
                "ERA": "ERA 2015",
                "Journals": 630.89
            },
            {
                "FOR": "03 PCE",
                "ERA": "ERA 2012",
                "Journals": 533.67
            },
            {
                "FOR": "04 PCE",
                "ERA": "ERA 2015",
                "Journals": 356.33
            },
            {
                "FOR": "04 PCE",
                "ERA": "ERA 2012",
                "Journals": 275
            },
            {
                "FOR": "05 EE",
                "ERA": "ERA 2015",
                "Journals": 196
            },
            {
                "FOR": "05 EE",
                "ERA": "ERA 2012",
                "Journals": 54.5
            },
            {
                "FOR": "06 BB",
                "ERA": "ERA 2015",
                "Journals": 423.26
            },
            {
                "FOR": "06 BB",
                "ERA": "ERA 2012",
                "Journals": 557.66
            },
            {
                "FOR": "07 BB",
                "ERA": "ERA 2015",
                "Journals": 53
            },
            {
                "FOR": "07 BB",
                "ERA": "ERA 2012",
                "Journals": 49
            },
            {
                "FOR": "08 MIC",
                "ERA": "ERA 2015",
                "Journals": 365.15
            },
            {
                "FOR": "08 MIC",
                "ERA": "ERA 2012",
                "Journals": 376.2
            },
            {
                "FOR": "09 EE",
                "ERA": "ERA 2015",
                "Journals": 1558.13
            },
            {
                "FOR": "09 EE",
                "ERA": "ERA 2012",
                "Journals": 1251.95
            },
            {
                "FOR": "10 BB",
                "ERA": "ERA 2015",
                "Journals": 0
            },
            {
                "FOR": "10 BB",
                "ERA": "ERA 2012",
                "Journals": 14
            },
            {
                "FOR": "10 EE",
                "ERA": "ERA 2015",
                "Journals": 53
            },
            {
                "FOR": "10 EE",
                "ERA": "ERA 2012",
                "Journals": 60.5
            },
            {
                "FOR": "10 MHS",
                "ERA": "ERA 2015",
                "Journals": 10
            },
            {
                "FOR": "10 MHS",
                "ERA": "ERA 2012",
                "Journals": 3
            },
            {
                "FOR": "11 MHS",
                "ERA": "ERA 2015",
                "Journals": 1282.21
            },
            {
                "FOR": "11 MHS",
                "ERA": "ERA 2012",
                "Journals": 739.16
            },
            {
                "FOR": "12 HCA",
                "ERA": "ERA 2015",
                "Journals": 33
            },
            {
                "FOR": "12 HCA",
                "ERA": "ERA 2012",
                "Journals": 10
            },
            {
                "FOR": "13 EHS",
                "ERA": "ERA 2015",
                "Journals": 290.84
            },
            {
                "FOR": "13 EHS",
                "ERA": "ERA 2012",
                "Journals": 211.3
            },
            {
                "FOR": "14 EC",
                "ERA": "ERA 2015",
                "Journals": 143.38
            },
            {
                "FOR": "14 EC",
                "ERA": "ERA 2012",
                "Journals": 159.7
            },
            {
                "FOR": "15 EC",
                "ERA": "ERA 2015",
                "Journals": 452.68
            },
            {
                "FOR": "15 EC",
                "ERA": "ERA 2012",
                "Journals": 478.4
            },
            {
                "FOR": "16 EHS",
                "ERA": "ERA 2015",
                "Journals": 358.28
            },
            {
                "FOR": "16 EHS",
                "ERA": "ERA 2012",
                "Journals": 282.63
            },
            {
                "FOR": "17 MHS",
                "ERA": "ERA 2015",
                "Journals": 294.92
            },
            {
                "FOR": "17 MHS",
                "ERA": "ERA 2012",
                "Journals": 277
            },
            {
                "FOR": "18 HCA",
                "ERA": "ERA 2015",
                "Journals": 121.34
            },
            {
                "FOR": "18 HCA",
                "ERA": "ERA 2012",
                "Journals": 151
            },
            {
                "FOR": "19 HCA",
                "ERA": "ERA 2015",
                "Journals": 64
            },
            {
                "FOR": "19 HCA",
                "ERA": "ERA 2012",
                "Journals": 30
            },
            {
                "FOR": "20 HCA",
                "ERA": "ERA 2015",
                "Journals": 230.72
            },
            {
                "FOR": "20 HCA",
                "ERA": "ERA 2012",
                "Journals": 180.01
            },
            {
                "FOR": "21 HCA",
                "ERA": "ERA 2015",
                "Journals": 108.28
            },
            {
                "FOR": "21 HCA",
                "ERA": "ERA 2012",
                "Journals": 127.16
            },
            {
                "FOR": "22 HCA",
                "ERA": "ERA 2015",
                "Journals": 62
            },
            {
                "FOR": "22 HCA",
                "ERA": "ERA 2012",
                "Journals": 41
            }
        ];
/*
        var newArray = [];
        for(n in data){
            if(!newArray.indexOf(n)){
                newArray.push(n);
            }
        }
*/
        $scope.chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: 'rgba(237, 194,64, 0.5)',
                borderColor: window.chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: 'Dataset 2',
                backgroundColor: 'rgba(175, 216,248, 0.5)',
                borderColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, ]

        }
        ;
        $scope.lineChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Unfilled",
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }, {
                label: "Dashed",
                fill: false,
                backgroundColor: window.chartColors.green,
                borderColor: window.chartColors.green,
                borderDash: [5, 5],
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }, {
                label: "Filled",
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
                fill: true,
            }]
        };



    });