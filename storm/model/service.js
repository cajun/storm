include('../model.js');

storm.model.Service = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'alias', 'port', 'server_id' ] );

  this.payload = function(){
    return {
      id: this._id,
      alias: this._alias,
      port: this.port,
      server_id: this._server_id
    }
  };

  this.server = function(){
    // return the server here
  };

  this.save = function(){
    storm.model.update_resource( {
        url: 'services',
        payload: this.payload, 
        success_callback: function(response ){
          var json = eval( '(' + response + ')' );
          this.alias( json.alias );
          this.port( json.port );
          this.server_id( json.server_id );
        }.bind(this)
    });
  };

});

storm.model.Service.register = function( alias, port, server_id ) {
  var service = new storm.model.Service();
  
  var payload = { 
    'alias': alias, 
    'port': port,
    'server_id':server_id
  };

  storm.model.create_resource( {
      url: 'service',
      payload: payload, 
      success_callback: function( response ){
        var json = eval( '(' + response + ')' );
        service.id( json.id );
        service.alias( json.alias );
        service.port( json.port );
        service.server_id( json.server_id );
      }
  });

  return service;
};

