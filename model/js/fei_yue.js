

$(document).ready(function(){


    var table1_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/apphm3iTfMsQUe79I/Table%201?api_key=keysvB4lHDB6fjPJK"
    var table1_dataSet = [];

    $.getJSON(airtable_data,function(result){
      $.each(result.records,function(key,value){
         table1_items = [];
       table1_items.push(value.fields.店铺);
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
                   { title: "店铺",
                     defaultContent:""},
                   { title: "地址",
                       defaultContent:"" },
                   { title: "城市",
                     defaultContent:"" },
                  
                  ]
         });
    });
  });

  
  

 