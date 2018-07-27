let url = "/test_data";


var stacksDiv = document.getElementById("myDiv");
var traces = [
    {x: [1,2,3], y: [2,1,4], fill: 'tozeroy'},
    {x: [1,2,3], y: [1,1,2], fill: 'tonexty'},
    {x: [1,2,3], y: [3,0,2], fill: 'tonexty'}
];
function stackedArea(traces) {
    for(var i=1; i<traces.length; i++) {
        for(var j=0; j<(Math.min(traces[i]['y'].length, traces[i-1]['y'].length)); j++) {
            traces[i]['y'][j] += traces[i-1]['y'][j];
        }
    }
    return traces;
}

Plotly.newPlot(stacksDiv, stackedArea(traces), {title: 'stacked and filled line chart'});