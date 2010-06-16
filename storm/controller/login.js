include('../controller.js');

storm.controller.login = function() {
  var context = uki('#login_screen');
  var register_popup = storm.layout.register_popup();

  uki('#login').click( function(){
    context.visible(false);
  });
  
  uki('#register').click( function(){
    uki('#register_popup').toggle();
  });
}
