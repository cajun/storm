include('../controller.js');

storm.controller.login = function() {
  // Setting up the view for this controller
  var context = storm.layout.login();
  var register_popup = storm.layout.register_popup();
  var message = storm.layout.message();

  // Add this context on the main layout
  storm.layout.append(context);

  // login if the user is successful
  uki('#login').click( function(){
    var username = uki('#login_username')[0].value();
    var password = uki('#login_password')[0].value();

    if( storm.model.User.login( { username: username, password: password } ) ){
      // successful
      storm.controller.main(); 
    } else {
      // failure
      show_message( 'You are not a valid user.  Please register first' );
    }
  });
  
  // Display the registeration popup
  uki('#register').click( function(){
    uki('#register_popup').toggle();
  });

  // Creating a user in the system
  uki('#register_user').click( function(){
    try{
      var username = uki('#username')[0].value();
      var password = uki('#password')[0].value();
      var password_confirmation = uki('#password_confirmation')[0].value();

      var user = storm.model.User.register( username, password, password_confirmation );
      uki('#username')[0].value('');
      uki('#password')[0].value('');
      uki('#password_confirmation')[0].value('');
    }
    catch( e ){
      // Create an global error view so all errors can use it and stuff  
      show_message( e ); 
      uki('#password')[0].value('');
      uki('#password_confirmation')[0].value('');
    };
  });

  function show_message( text ){
      uki('#message')[0].text(text); 
      uki("#message_popup").show();
      setTimeout( 'uki("#message_popup").show()', 5000 );
  };
}
