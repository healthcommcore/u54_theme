( function($) {
  $(document).ready(function() {
    var modal = $('#alert-modal');
    var title = $('#alert-modal .modal-title');
    var content = $('#alert-modal .modal-body');
    var oldTitle = title.html();
    var oldContent = content.html();
    title.html("Warning: Internet Explorer 8 is not supported!");
    //console.log(title);
    modal.addClass('bg-danger');
    modal.modal('show');
  });
})(jQuery);
