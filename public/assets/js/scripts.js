
Fancybox.bind("[data-fancybox]", {
  Image: {
    zoom: false,
    click: "close",
    wheel: null,
  },

  Toolbar: {
    display: ["close"],
  },
});

function filter(criteria) {
  $(".btn-filter").removeClass('btn-filter-active')
  $(".btn-filter").filter('[data-category="' + criteria + '"]').addClass("btn-filter-active")

  if (criteria == "All") {
    $(".gallery-container").show();
    $(".btn-filter").addClass("")



  } else {
    $(".gallery-container").hide();
    $(".gallery-container")
      .filter('[data-category="' + criteria + '"]')
      .show()
      .addClass("btn-filter-active");

  }
};