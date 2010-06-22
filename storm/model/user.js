include('../model.js');

storm.model.User = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'username' ] );

  this.payload = function(){
    return {
      id: this._id,
      username: this._username
    }
  };

  this.save = function(){
    storm.model.update_resource( {
        url: 'users',
        payload: this.payload, 
        success_callback: function(response ){
          var json = eval( '(' + response + ')' );
          this.username( json.username );
        }.bind(this)
    });
  }
});

storm.model.User.current = {};

storm.model.User.login = function( opts ){
  var result = false;

  storm.model.create_resource( {
    url: 'session',
    payload: opts,
    success_callback: function( response ) { result = true; },
    error_callback: function( response ) { return false; }
  });

  return result;
};

storm.model.User.register = function( username, password, password_confirmation) {
  var user = new storm.model.User();
  
  var payload = { 
    'username': username, 
    'password':password, 
    'password_confirmation': password_confirmation 
  }

  storm.model.create_resource( {
      url: 'users',
      payload: payload, 
      success_callback: function( response ){
        var json = eval( '(' + response + ')' );
        user.id = json.id;
        user.username = json.username;
      }
  });

  return user;
};

