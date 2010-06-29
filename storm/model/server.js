include('../model.js');

storm.model.Server = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'alias', 'address' ] );

  this.services = function(){
    // return all of the services here
    return [];
  };
});
