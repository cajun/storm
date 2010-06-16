include('../model.js');

storm.model.User = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'username' ] );
});

storm.model.User.register = function( username, password, password_confirmation) {
  var user = new storm.model.User();
  
  var payload = { 'username': username, 'password':password, 'password_confirmation': password_confirmation }
  // we want a response from this method
  //uki.ajaxSetup({ async:false });

  uki.post(
    'users',
    function( response ){
      var json = eval( '(' + response + ')' );
      user.id = json.id;
      user.username = json.username;
    },
    payload
  );

  return user;
};
