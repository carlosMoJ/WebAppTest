$(function () {
    $('*[data-autocomplete-url]').each(function () {
        $(this).autocomplete({
            source: $(this).data("autocomplete-url"),
            minLength: 2,
            select: function (event, ui) {
                $(this).next(":hidden").val(ui.item ? ui.item.id : "");
            },
            response: function (event, ui) {
                if (ui.content.length === 0) {
                    var txt = $(this).data('nomatchfound')
                    $("#noData").text(txt);
                } else {
                    $("#noData").empty();
                }
            },
            change: function (event, ui) {
                if (!ui.item) {
                    $(this).next(":hidden").val(ui.item ? ui.item.id : "");
                } else {
                    $(this).next(":hidden").val(ui.item ? ui.item.id : "");
                }
            }
        });
    });
});
