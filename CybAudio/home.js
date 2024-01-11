


// Search and sort cards

$(document).ready(function () {
  $("#filterCards").keyup(function () {
    var filter = $(this).val();
    $(".card").each(function () {
      var $i = 0;
      $(this)
        .find(".searchable")
        .each(function () {
          if ($(this).text().search(new RegExp(filter, "i")) >= 0) {
            $i++;
          }
        });
      if ($i > 0) {
        $(this).closest(".card").show();
      } else {
        $(this).closest(".card").hide();
      }
    });
  });
});


