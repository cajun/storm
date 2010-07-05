include('../controller.js');

storm.controller.main = function() {
  var context = storm.layout.main();

  // Screens
  var dashboard = storm.layout.dashboard();
  var team = storm.layout.team();
  var event = storm.layout.event();
  var fight = storm.layout.fight();
  var login = storm.layout.login();

  // Main div for the content
  var content = uki('#content',context);
  var menu = uki('#menu', context);

  var screens = [ 
    dashboard,
    team,
    event,
    fight
  ];

  // Attach the screens to the main screen
  uki.map( screens, function( screen ){
      content.append(screen);
  });

  hideAllChildren();
  dashboard.visible(true);

  storm.layout.append(context);

  // Switching Layouts
  uki('Button[text^=Dash]').click( function(){
    hideAllChildren();
    dashboard.visible(true);
    content.layout();
  });

  uki('Button[text=Team]').click( function(){
    hideAllChildren();
    team.visible(true);
    content.layout();
  });

  uki('Button[text=Event]').click( function(){
    hideAllChildren();
    event.visible(true);
    content.layout();
  });

  uki('Button[text=Fight]').click( function(){
    alert('Not Ready to fight');
  });

  uki('Button[text=Logout]').click( function(){
    //hideAllChildren();
    storm.controller.login();
  });

  // Util function to change the screens
  function hideAllChildren(){
    uki.map( screens, function(screen){
        screen.visible(false);
    });
  }
}
