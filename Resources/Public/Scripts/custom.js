$(".jq-ajax").click(function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    if ($(".jq-ajax").parent().hasClass('open')) {
        $(".jq-ajax").parent().removeClass('open');
        $(".jq-ajay span").remove()
    } else {
        $.get(url, function(data) {
            $(".jq-ajax").after(data);
            $(".jq-ajax").parent().addClass('open');
        })
    }
});

$(".jq-toggle-active").click(function (e) {
    e.preventDefault();
    $(".jq-toggle-active").removeClass("active");
    $(this).addClass("active");
});

$(document).on('click', 'a.jq-take', function(){
    $('#packagetitle').val($(this).data('title'));
    $('#package').val($(this).data('title'));
    $('#packagedescription').val($(this).data('description'));
    $('#packageurl').val($(this).data('url'));
    $('#packagistModal').modal('hide');
});

