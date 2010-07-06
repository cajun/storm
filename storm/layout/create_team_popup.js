include('../layout.js');

storm.layout.create_team_popup = function() {
  return uki(
    { view: 'Popup', rect: '230 140', anchors:'top left', 
    shadow:'theme(shadow-big)',     
    relativeTo: uki('#create_team')[0], childViews: [
      { view: 'Label', rect: '10 0 100 22', anchors: 'top left right ', text: 'Team Information' },
      { view: 'TextField', rect: '10 32 100 22', anchors:'top left width', placeholder: 'Name' },
      { view: 'TextField', rect: '112 32 100 22', anchors:'top right width', placeholder: 'Color' },
      { view: 'PasswordTextField', rect: '10 57 202 22', anchors:'top left right', placeholder: 'Team Password' },
      { view: 'PasswordTextField', rect: '10 82 202 22', anchors:'top left right', placeholder: 'Team Password Confirmation' },
      { view: 'Button', rect: '10 107 202 22', anchors: 'top left right', id: 'team_submit', text: 'Create Team' }
    ]}
  );
}
