include('../controller.js');

storm.controller.teams = function() {
  // Popups
  var create_team = storm.layout.create_team_popup();


  uki('#create_team').click( function(){
    console.log( 'foo');
    create_team.toggle();
  });
}
