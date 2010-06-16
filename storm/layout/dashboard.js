include('../layout.js');

storm.layout.dashboard = function() {
    return uki( 
        [
          { view: 'Box', rect: '0 0 500 500', anchors: 'top left', background: '#333', childViews:[
            { view: 'Box', rect: '500 500', anchors: 'top left right bottom', id: 'clock' }
          ]},
          { view: 'Box', rect: '500 0 500 500', anchors: 'top right', background: 'yellow', childViews:[
            { view: 'Box', rect: '500 500', anchors: 'top left right bottom', id: 'chart' }
          ]},
          { view: 'Box', rect: '0 500 500 500', anchors: 'left bottom', background: 'black', childViews:[
            { view: 'Box', rect: '500 500', anchors: 'top left right bottom', id: 'ball' }
          ]},
          { view: 'Box', rect: '500 500 500 500', anchors: 'right bottom', background: 'white', childViews:[
            { view: 'Button', rect: '100 22', anchors: 'top left', text: 'foo' }
          ]}
        ]
    );
}
