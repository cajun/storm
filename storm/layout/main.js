include('../layout.js');

storm.layout.main = function() {
    return uki(
        { view: 'Box', rect: '1000 1000', anchors: 'top left right bottom', id: 'container', childViews: [ 
          { view: "Toolbar", rect: "0 0 1000 24", anchors: "top left right", background:'theme(panel)', buttons: [
            { text: 'Dashboard' },
            { text: 'Team' },
            { text: 'Event' },
            { text: 'Fight' },
            { text: 'Logout' }
          ]},
          { view: 'Box', rect: '0 24 1000 1000', anchors: 'top left right bottom', id:'content' }
        ]}
    );
}
