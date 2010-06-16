include('../layout.js');

storm.layout.main = function() {
    return uki(
        { view: 'Box', rect: '1000 1000', anchors: 'top left right bottom', childViews: [ 
          { view: 'Box', rect: '1000 1000', anchors: 'top left right bottom', id:'content' },
          { view: 'Box', rect: '0 300 50 185', anchors: 'left top', background: 'yellow', id: 'menu', childViews: [ 
            { view: 'Button', rect:'5 5 40 40', anchors: 'left top', text: 'Dash' },
            { view: 'Button', rect:'5 50 40 40', anchors: 'left top', text: 'Team' },
            { view: 'Button', rect:'5 95 40 40', anchors: 'left top', text: 'Event' },
            { view: 'Button', rect:'5 140 40 40', anchors: 'left top', text: 'Fight' }
          ]}
        ]}
    );
}
