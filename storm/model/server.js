include('../model.js');

storm.model.Server = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'alias', 'address' ] );

  this.payload = function(){
    return {
      id: this._id,
      alias: this._alias,
      address: this._address
    }
  };

  this.services = function(){
    // return all of the services here
    return [];
  };

  
  this.save = function(){
    storm.model.update_resource( {
        url: 'servers',
        payload: this.payload, 
        success_callback: function(response ){
          var json = eval( '(' + response + ')' );
          this.alias( json.alias );
          this.address( json.address );
        }.bind(this)
    });
  };
});

storm.model.Server.findByID = function( id ) {
  var server = new storm.model.Server();

  storm.model.get_resource({
    url: 'server/' + id,
    success_callback: function( response ){
      var json = eval( '(' + response + ')' );
      server.id( json.id );
      server.alias( json.alias );
      server.address( json.address );
    }
  });

  return server;
};

storm.model.Server.register = function( alias, address ) {
  var server = new storm.model.Server();
  
  var payload = { 
    'alias': alias, 
    'address': address
  };

  storm.model.create_resource( {
      url: 'server',
      payload: payload, 
      success_callback: function( response ){
        var json = eval( '(' + response + ')' );
        server.id( json.id );
        server.alias( json.alias );
        server.address( json.address );
      }
  });

  return server;
};

