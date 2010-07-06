include('../layout.js');

storm.layout.team = function() {
  return uki(
    { view: "Box", rect: "1000 1000", anchors: "top left bottom right", childViews: [
      // List of teams
      { view: 'ScrollPane', rect: '200 100', anchors:'top left bottom ', childViews:[
        { view: "Button", rect: "10 2 75 20", anchors: "top left", text: 'Create', id: 'create_team' },
        { view: "Button", rect: "90 2 85 20", anchors: "top left", text: 'Join' },
        { view: 'List', rect: '0 22 200 100', anchors: 'top left right bottom' }
      ]},
      // Team Box
      { view: "Box", rect: "200 0 800 1000", anchors: "top left", background: 'green', childViews: [  
      ]}

    ]}     
  );
}
