include('../model.js');

storm.model.Service = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'alias', 'port', 'servier_id' ] );

  this.server = function(){
    // return the server here
  };
});
