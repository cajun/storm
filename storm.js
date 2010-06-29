(function() {
// define namespace
storm = {};
// all core modules
include('frameworks/uki/uki-core.js');

// used views, comment out unused ones
include('frameworks/uki/uki-view/view/box.js');
include('frameworks/uki/uki-view/view/image.js');
include('frameworks/uki/uki-view/view/button.js');
include('frameworks/uki/uki-view/view/checkbox.js');
include('frameworks/uki/uki-view/view/radio.js');
include('frameworks/uki/uki-view/view/textField.js');
include('frameworks/uki/uki-view/view/label.js');
include('frameworks/uki/uki-view/view/list.js');
include('frameworks/uki/uki-view/view/table.js');
include('frameworks/uki/uki-view/view/slider.js');
include('frameworks/uki/uki-view/view/splitPane.js');
include('frameworks/uki/uki-view/view/scrollPane.js');
include('frameworks/uki/uki-view/view/popup.js');
include('frameworks/uki/uki-view/view/flow.js');
include('frameworks/uki/uki-view/view/toolbar.js');

// theme
include('frameworks/uki/uki-theme/airport.js');

// libs
include('frameworks/raphael/raphael.js');

// data
include('frameworks/uki/uki-data/model.js');
include('frameworks/uki/uki-data/ajax.js');
include('storm/layout/main.js');
include('storm/controller/main.js');
include('storm/layout/dashboard.js');
include('storm/layout/team.js');
include('storm/layout/event.js');
include('storm/layout/fight.js');
include('storm/layout/login.js');
include('storm/controller/login.js');
include('storm/layout/register_popup.js');
include('storm/layout/message.js');
include('storm/model/user.js');
include('storm/model/team.js');
include('storm/model/service.js');
include('storm/model/server.js');


uki.theme.airport.imagePath = 'i/';

// skip interface creation if we're testing
if (window.TESTING) return;

storm.controller.main();
storm.controller.login();

})();

Function.prototype.bind = function( obj ){
  var method = this;
  temp = function(){
    return method.apply(obj, arguments );
  };

  return temp;
};
