

$(document).ready(function(){


    var table1_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/appCToQwdzHycDG6g/Table%201?api_key=keysvB4lHDB6fjPJK"
    var table1_dataSet = [];

    $.getJSON(airtable_data,function(result){
      $.each(result.records,function(key,value){
         table1_items = [];
       table1_items.push(value.fields.商场);
       table1_items.push(value.fields.地址);
       table1_items.push(value.fields.城市);
         table1_dataSet.push(table1_items);
         console.log(table1_items);
      });
         console.log(table1_dataSet);
         $("#table1").DataTable({
           data:table1_dataSet,
           retrive:true,
           destroy:true,
           columns: [
                   { title: "商场",
                     defaultContent:""},
                   { title: "地址",
                       defaultContent:"" },
                   { title: "城市",
                     defaultContent:"" },
                  
                  ]
         });
    });
  });

  var chart = Highcharts.chart('ranking1', {
    title: {
        text: '数据来源：李宁财报'
    },
    
    yAxis: {
        reversed:false,
        title: {
            text: '销售收入'
        },
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2008
        },
    },
    series: [{
        name: '年营业收入（亿元）',
        data: [ 66.90, 83.87, 94.79, 89.29, 67.39, 58.24, 67.28, 70.89, 80.15, 88.74, 105.11]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                },
            },
        }],
    },
});