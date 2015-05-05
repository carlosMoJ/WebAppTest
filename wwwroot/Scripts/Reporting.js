$.fn.fill = function (data) {
    var content = this;
    return $.each(data, function (idx, obj) {     
        $.each(obj, function (idx, item) {
            var span = $("<span />");
            span.attr("id", idx);
            span.html(item);
            content.append(span);
        });
    });
}

$(document).ready(function () {    

    // Initialize jqxDraggable
    $("#panel1").jqxDragDrop();
    $("#panel2").jqxDragDrop();
    $("#panel3").jqxDragDrop();
    $("#panel4").jqxDragDrop();
    $("#panel5").jqxDragDrop();
    $("#panel6").jqxDragDrop();


    $(function() {
        $.getJSON("/NOMSMoJCoreReports/GetActivityLogLatest", null, function(data) {

                $("#logs").fill(data);

        });
    });

//        $.ajax({
//            url: "/NOMSMoJCoreReports/GetActivityLogLatest",
//            type: "get",
//            dataType: "json", 
//            success: function (result) {
//                var strResult = "";
//                $.each(result, function (idx, obj) {
//                    strResult += obj.FormattedDateTime;
//                    strResult += " " + obj.CaseDetail;
////                    strResult += " " + obj.Action;
//                    strResult += " <i class='fa fa-arrow-circle-right'></i><br />";
//                });

//                $("#logs").html(strResult);
//            }
//        });



    $('#Quarters').change(function () {

        $('#from').val("");
        $('#to').val("");
    });

    $('#from').change(function () {

        $('#Quarters').val("");        
    });



       

        $("#reportSubmit").on("click", function (e) {
            $.ajax({
                url: "NOMSMoJCoreReports/GetNOMSCasesReport",
                type: "post",
                data: {
                    from: $('#from').val(),
                    to: $('#to').val(),
                    Quarters: $('#Quarters').val(),
                    ReportTypes: $('#ReportTypes').val()
                },
                success: function (result) {                  
                        $('#grid').html(result);
                       
                        $("#controls").show();               
                    }                
            });

            });


});