!function(r){r(document).ready(function(){r(".nolink").on("click",function(e){e.preventDefault()});var e=r("#views-exposed-form-resource-search-page-1"),s=e.find('input[type="checkbox"]'),a=e.find('input[type="submit"]'),o=r("#show-all-resources"),n=!1,l=r(".dropdown .dropdown-toggle");function i(e){var s=!0;return e.map(function(){r(this).is(":checked")&&(s=!1)}),s}i(s)?(r("#filter-explanation").removeClass("hidden").addClass("show"),r("#search-results").removeClass("show").addClass("hidden"),r(".view-resource-search .view-content").removeClass("show").addClass("hidden"),o.removeClass("hidden").addClass("show")):(r("#filter-explanation").removeClass("show").addClass("hidden"),r("#search-results").removeClass("hidden").addClass("show"),r(".view-resource-search .view-content").removeClass("hidden").addClass("show"),o.removeClass("show").addClass("hidden")),e.on("submit",function(e){if(0===a.length&&i(s))return r("#alert-modal").modal("show"),!1}),o.on("click",function(e){n?(r("#filter-explanation").removeClass("hidden").addClass("show"),r(".view-resource-search .view-content").removeClass("show").addClass("hidden"),o.html("Show all resources"),n=!1):(r("#filter-explanation").removeClass("show").addClass("hidden"),r(".view-resource-search .view-content").removeClass("hidden").addClass("show"),o.html("Hide all resources"),n=!0),e.preventDefault()}),l.on("click",function(e){var s=function(e){{if(e.hasClass("glyphicon"))return e;if(e.find("span").hasClass("glyphicon"))return e.find("span");console.log("ERROR!")}}(r(this)),a="glyphicon-triangle-";s.hasClass(a+"right")?s.removeClass(a+"right").addClass(a+"bottom"):s.removeClass(a+"bottom").addClass(a+"right")}),r(".filter-topic-button").on("click",function(e){var s,a="span"==(s=e).target.localName?s.target:s.target.firstChild;r(a).hasClass("glyphicon-menu-right")?r(a).removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down"):r(a).removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right")})})}(jQuery);