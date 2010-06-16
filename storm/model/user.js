include('../model.js');

storm.model.User = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'username' ] );
});

storm.model.User.register = function( username, password, password_confirmation) {
  var user = new storm.model.User();
  user.username = username;
  return user;
};
