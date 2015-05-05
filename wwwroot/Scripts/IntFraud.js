$(function () {
    $(".showhide").on('click', function () {
        var myname = $(this).attr('id');
        var $obj = $('#' + myname + '-data');
        $obj.toggle();
        /*$(this).text('Wibble');*/
        /* replace if if then else for if %obj.visible() (?not sure on noun) set text = show or hide */
    });

});



$("form").submit(function (event) {

    for (var i in window.CKEDITOR.instances) {

        var limit = window.CKEDITOR.instances[i].config.wordcount.charLimit;
        var count = window.CKEDITOR.instances[i].plugins.wordcount.charCount;
        // alert(count);

        if (count > limit) {
            var button = $("form").find("input[type='submit']");
            button.addClass("disabled");
            event.preventDefault();
            // window.CKEDITOR.instances[i].
            alert("The text area has a limit of 4,000 characters.\n Please reduce the amount of text.\n (Currently: " + count + " characters)");
            //break;
        }
    }
});

//VAT Calc
$(document).ready(function () {
    $('.cost').on('input', function (e) {
        var val = $('.cost').val();
        var vat = $('#GetVATRate').val();
        val = val * vat / 100;
        $('.vat').val(val.toFixed(2));
    });

    if ($("#LAAContactTypeID option:selected").text().contains('Solicitor')) {
        $("#dx").css("display", "block");
        $("#firmName").css("display", "block");
    }
    $("#LAAContactTypeID").change(function () {
        if ($("#LAAContactTypeID option:selected").text().contains('Solicitor')) {
            $("#dx").css("display", "block");
            $("#firmName").css("display", "block");
        }
        else {
            $("#dx").css("display", "none");
            $("#firmName").css("display", "none");
        }
    });
});
