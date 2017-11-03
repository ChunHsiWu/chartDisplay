angular.module("myApp", ['myChart'])
    .controller('myController', function($scope){
        $scope.type='bar';
        $scope.title = 'bar char title';
        var color = Chart.helpers.color;
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

        var mockData = [
            {
                "Value": 67.7308388,
                "Year": 2012,
                "Category": "EA"
            },
            {
                "Value": 3.913705216,
                "Year": 2013,
                "Category": "EA"
            },
            {
                "Value": 87.93078166,
                "Year": 2012,
                "Category": "EB"
            },
            {
                "Value": 31.63096874,
                "Year": 2013,
                "Category": "EB"
            },
            {
                "Value": 60.3544378,
                "Year": 2012,
                "Category": "EC"
            },
            {
                "Value": 52.30132088,
                "Year": 2013,
                "Category": "EC"
            },
            {
                "Value": 15.74716302,
                "Year": 2012,
                "Category": "ED"
            },
            {
                "Value": 97.82556432,
                "Year": 2013,
                "Category": "ED"
            },
            {
                "Value": 96.00355557,
                "Year": 2012,
                "Category": "EE"
            },
            {
                "Value": 71.19264936,
                "Year": 2013,
                "Category": "EE"
            },
            {
                "Value": 58.69783988,
                "Year": 2012,
                "Category": "EF"
            },
            {
                "Value": 20.54543059,
                "Year": 2013,
                "Category": "EF"
            },
            {
                "Value": 92.18997583,
                "Year": 2012,
                "Category": "EG"
            },
            {
                "Value": 32.56953797,
                "Year": 2013,
                "Category": "EG"
            },
            {
                "Value": 0.408327944,
                "Year": 2012,
                "Category": "EH"
            },
            {
                "Value": 56.15267271,
                "Year": 2013,
                "Category": "EH"
            },
            {
                "Value": 62.38648177,
                "Year": 2012,
                "Category": "EI"
            },
            {
                "Value": 16.48770113,
                "Year": 2013,
                "Category": "EI"
            },
            {
                "Value": 56.47137263,
                "Year": 2012,
                "Category": "EJ"
            },
            {
                "Value": 88.45429685,
                "Year": 2013,
                "Category": "EJ"
            },
            {
                "Value": 27.59557239,
                "Year": 2012,
                "Category": "EK"
            },
            {
                "Value": 2.137332875,
                "Year": 2013,
                "Category": "EK"
            },
            {
                "Value": 74.91975335,
                "Year": 2012,
                "Category": "EL"
            },
            {
                "Value": 3.551584432,
                "Year": 2013,
                "Category": "EL"
            },
            {
                "Value": 91.14867159,
                "Year": 2012,
                "Category": "EM"
            },
            {
                "Value": 26.89212349,
                "Year": 2013,
                "Category": "EM"
            },
            {
                "Value": 97.31399272,
                "Year": 2012,
                "Category": "EN"
            },
            {
                "Value": 84.62810668,
                "Year": 2013,
                "Category": "EN"
            },
            {
                "Value": 96.06649062,
                "Year": 2012,
                "Category": "EO"
            },
            {
                "Value": 1.850769998,
                "Year": 2013,
                "Category": "EO"
            }
        ];
        var labels=[];
        mockData.forEach(function(data){
            if(labels.indexOf(data.Year)== -1) {
                labels.push(data.Year);
            }
        });
        console.log(labels);
        var datasets=[];
        var category=[];
        for(var i = 0; i < labels.length; i++)
        {
            category=[];
            var value =[];
            var dataset = {
                label:labels[i],
                //backgroundColor:color(chartColors[chartSets[i]]).alpha(0.5).rgbString(),//'rgba(237, 194,64, 0.5)',
                //borderColor: chartColors[chartSets[i]]
            };
            mockData.forEach(function(data) {
                if(data.Year == labels[i])
                {
                    value.push(data.Value);
                }
                if(category.indexOf(data.Category)== -1)
                    category.push(data.Category);
            });
            dataset.data = value;
            datasets.push(dataset);
        }

        console.log(datasets);
        $scope.chartData = {
            labels: category,
            datasets: datasets
        };

    });