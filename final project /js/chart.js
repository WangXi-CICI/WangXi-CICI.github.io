$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });


     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/apppIqRcXC8O3wJcj/Table%201?api_key=keysvB4lHDB6fjPJK";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                 items.push(value.fields.year);
                 items.push(value.fields.better);
                 items.push(value.fields.no_change);
                 items.push(value.fields.worse);
                 items.push(value.fields.do_not_know);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                { title: "year",
                defaultContent:""},
              { title: "better",
                defaultContent:""},
              { title: "no_change",
                  defaultContent:""},
              { title: "worse",
                defaultContent:""},
                { title: "do_not_know",
                defaultContent:""},
            
               ]
           } );

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: '年份'},
                  y: {label: '好感度'}
                },
                bar: {
                    title: "# of Items by Product Category:",
                }
            });

      }); // end .getJSON

   }); // end button

}); // document ready

