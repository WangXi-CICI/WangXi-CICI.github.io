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
        var airtable_read_endpoint = "https://api.airtable.com/v0/appDnQqrSvIiUxEJi/Brand?api_key=keysvB4lHDB6fjPJK";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.book_name);
                       items.push(value.fields.author);
                       items.push(value.fields.publisher);
                       items.push(value.fields.date_of_publication);
                       items.push(value.fields.price);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Book",
                       defaultContent:""},
                     { title: "Author",
                         defaultContent:"" },
                     { title: "Publisher",
                       defaultContent:"" },
                     { title: "Date of Publication",
                       defaultContent:""},
                     { title: "Price",
                         defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
