(function() {
  "use strict";
  var wrapper = $('.sidebar');
  $('.open').click(function(e){
    e.stopPropagation();
    wrapper.addClass("visible");
  });
  $('.close').click(function(){
    wrapper.removeClass("visible");
  });
  $(document).click(function (e) {
    if(wrapper.hasClass('visible') && !($(e.target).hasClass('sidebar')
        || $(e.target).parents('.sidebar').length >= 1)) {
      wrapper.removeClass("visible");
    }
  });
})();


