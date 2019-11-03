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

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appDuuMJUsvJejjQl/Imported%20table?api_key=keysvB4lHDB6fjPJK";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                   items.push(value.fields.Brand_Name);
                   items.push(value.fields.Classification);
                   items.push(value.fields.Parent_Company);
                   items.push(value.fields.Region);
                   items.push(value.fields.Founding_time);
                   items.push(value.fields.Sales_Channels);
                   dataSet.push(items);
                   console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                    { title: "Brand",
                    defaultContent:""},
                  { title: "Classification",
                    defaultContent:""},
                  { title: "Parent Company",
                      defaultContent:""},
                  { title: "Region",
                    defaultContent:""},
                 { title: "Founding Time",
                    defaultContent:""},
                    { title: "Sales Channels",
                    defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appDnQqrSvIiUxEJi/Sales_Channels?api_key=keysvB4lHDB6fjPJK";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.Channels);
                     items.push(value.fields.total_items_by_channel);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Channels",
                     defaultContent:""},
                   { title: "Total Amount",
                       defaultContent:"" },
               ]
           } );

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: 'Product'},
                  y: {label: '# of Items'}
                },
                bar: {
                    title: "# of Items by Product Category:",
                }
            });

      }); // end .getJSON

   }); // end button

}); // document ready
