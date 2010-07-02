include('../model.js');

storm.model.Team = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'alias', 'color' ] );

  this.payload = function(){
    return {
      id: this._id,
      alias: this._alias,
      color: this._color
    }
  };

  this.save = function(){
    storm.model.update_resource( {
        url: 'teams',
        payload: this.payload, 
        success_callback: function(response ){
          var json = eval( '(' + response + ')' );
          this.alias( json.alias );
          this.color( json.color );
        }.bind(this)
    });
  };

  this.join = function(user, password ) { 

    var payload = { 
      'user_id': user.id, 
      'password':password
    };

    var success = false;
    try{
      storm.model.create_resource({
        url: 'teams/' + this.id + '/join',
        payload: payload,
        success_callback: function( response ){
          success = true;
        }
      });
    }catch(e){}

    return success;
  };


  this.reject = function(user, password ) { 

    var payload = { 
      'user_id': user.id, 
      'password':password
    };

    var success = false;
    try{
      storm.model.create_resource({
        url: 'teams/' + this.id + '/reject',
        payload: payload,
        success_callback: function( response ){
          success = true;
        }
      });
    }catch(e){}

    return success;
  };


});

storm.model.Team.register = function( alias, color, password, password_confirmation) {
  var team = new storm.model.Team();
  
  var payload = { 
    'alias': alias, 
    'color': color,
    'password':password, 
    'password_confirmation': password_confirmation
  };

  storm.model.create_resource( {
      url: 'teams',
      payload: payload, 
      success_callback: function( response ){
        var json = eval( '(' + response + ')' );
        team.id( json.id );
        team.alias( json.alias );
        team.color( json.color );
      }
  });

  return team;
};


