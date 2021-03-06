( function($) {
  $(document).ready( function() {

    // Anything with the "nolink" class should be an anchor that
    // should have its default linking behavior removed. This is to
    // allow the "Read more" dropdown functionality
    $('.nolink').on('click', function (e) {
      e.preventDefault();
    });

    var form = $('#views-exposed-form-resource-search-page-1');
    var checkboxes = form.find('input[type="checkbox"]');
    var clearButton = form.find('input[type="submit"]');
    var showAll = $('#show-all-resources');
    var resourcesShowing = false;
    var submenuToggle = $('.dropdown .dropdown-toggle');

    // When Resource Finder page loads either from first entering or
    // upon filter form submission, determine if any checkboxes are checked
    // and show/hide the corresponding results warning text box
    if ( !isEmpty(checkboxes) ) {
      $('#filter-explanation').removeClass('show').addClass('hidden');
      $('#search-results').removeClass('hidden').addClass('show');
      $('.view-resource-search .view-content').removeClass('hidden').addClass('show');
      showAll.removeClass('show').addClass('hidden');
    }
    else {
      $('#filter-explanation').removeClass('hidden').addClass('show');
      $('#search-results').removeClass('show').addClass('hidden');
      $('.view-resource-search .view-content').removeClass('show').addClass('hidden');
      showAll.removeClass('hidden').addClass('show');
    }

    // Check to make sure at least one of the filter category checkboxes were
    // checked. If not, do nothing and display warning
    form.on('submit', function (e) {
      if ( clearButton.length === 0 && isEmpty(checkboxes) ) {
        $('#alert-modal').modal('show');
        return false;
      }
    });

    showAll.on('click', function (e) {
      if (resourcesShowing) {
        $('#filter-explanation').removeClass('hidden').addClass('show');
        $('.view-resource-search .view-content').removeClass('show').addClass('hidden');
        showAll.html("Show all resources");
        resourcesShowing = false;
      }
      else {
        $('#filter-explanation').removeClass('show').addClass('hidden');
        $('.view-resource-search .view-content').removeClass('hidden').addClass('show');
        showAll.html("Hide all resources");
        resourcesShowing = true;
      }
      //console.log();
      e.preventDefault();
    });

    submenuToggle.on('click', function(e) {
      //console.log( $(this) );
      var span = getClickedSpan( $(this) );
      var arrowClass = "glyphicon-triangle-";
      if ( span.hasClass(arrowClass + 'right') ) {
        span.removeClass(arrowClass + 'right').addClass(arrowClass + 'bottom');
      }
      else {
        span.removeClass(arrowClass + 'bottom').addClass(arrowClass + 'right');
      }
    });

    function getClickedSpan(clicked) {
      if ( clicked.hasClass('glyphicon') ) {
        return clicked;
      }
      else if ( clicked.find('span').hasClass('glyphicon') ) {
        return clicked.find('span');
      }
      else {
        console.log("ERROR!");
      }
    }

    // Hero image fade when hero buttons are hovered over
/*
    $('.home-btn')
      .on('mouseover', function (e) {
        $('#home-hero-img-overlay').animate({ "opacity" : 0.6 }, 300);
      })
    .on('mouseout', function (e) {
      $('#home-hero-img-overlay').animate({ "opacity" : 0 }, 300);
    });
*/

    // Filter category item arrow toggling between right and down when clicked
    $('.filter-topic-button').on('click', function (e) {
      var span = getSpan(e);
      if ( $(span).hasClass('glyphicon-menu-right') ) {
        $(span).removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
      }
      else {
        $(span).removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
      }
    });
    
    // For filter category toggle. Return appropriate element based on click
    // target
    function getSpan(e) {
      return ( e.target.localName == "span" ? e.target : e.target.firstChild );
    }

    // Iterate through all filter category checkboxes to see if any of them are checked
    function isEmpty(checkboxes) {
      var isEmpty = true;
      checkboxes.map( function() {
        if ( $(this).is(":checked") ) {
          isEmpty = false;
          return;
        }
      });
      return isEmpty;
    }
  });

})(jQuery);
