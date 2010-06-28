include('../model.js');

storm.model.Team = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'name', 'color' ] );

  this.payload = function(){
    return {
      id: this._id,
      name: this._name,
      color: this._color
    }
  };

  this.save = function(){
    storm.model.update_resource( {
        url: 'teams',
        payload: this.payload, 
        success_callback: function(response ){
          var json = eval( '(' + response + ')' );
          this.name( json.name );
          this.color( json.color );
        }.bind(this)
    });
  };
});

storm.model.Team.register = function( team, color, password, password_confirmation) {
  var team = new storm.model.Team();
  
  var payload = { 
    'name': name, 
    'color': color,
    'password':password, 
    'password_confirmation': password_confirmation
  };

  storm.model.create_resource( {
      url: 'teams',
      payload: payload, 
      success_callback: function( response ){
        var json = eval( '(' + response + ')' );
        team.id = team.id;
        team.name = json.name;
        team.color = json.color;
      }
  });

  return team;
};

