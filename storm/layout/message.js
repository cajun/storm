include('../layout.js');

storm.layout.message = function() {
  return uki(
      { view: 'Popup', rect: '270 50', anchors:'bottom right', shadow:'theme(shadow-big)', id: 'message_popup', 
        relativeTo: uki('#login_panel')[0], childViews: [
          { view: 'Label', rect: '1 20 100 22', anchors: '', text: ' foo bars!!! ', id:'message'  }
        ]
      }
  );
};


