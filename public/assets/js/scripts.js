
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

  document.documentElement.setAttribute("gallery-filter", criteria);
  localStorage.galleryFilter = criteria;

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


function toggleCameraInfo() {
  $(".camera-info-container").toggle()
  $('#camera-info-toggle').toggleClass("fa-chevron-right")
  $('#camera-info-toggle').toggleClass("fa-chevron-down")
}


