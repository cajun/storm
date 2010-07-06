include('../storm.js');

storm.layout = {};

// This will clear out all of the UI
// Once this is done you can add new elements to it
// This will get call before you 'append' to the layout
storm.layout.clear = function(view){
  var el = document.getElementById('container');
  if(el && el.parentNode){
    el.parentNode.removeChild(el);
  }
};

// To have unified control over the layout pass in the uki 
// view into this function and it will clear out the old
// and show the new 
storm.layout.append = function(view){
  storm.layout.clear();
  var container = storm.layout.container();
  uki('#container').append(view);
  container.attachTo(window, 1000, 1000);
};
