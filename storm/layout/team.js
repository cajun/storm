include('../layout.js');

storm.layout.team = function() {
    return uki(
        { view: 'VSplitPane', rect: '0 0 1000 1000', anchors: 'top left right bottom', 
          vertical: true, topMin: 232,  handlePosition: 232,
          topChildViews: [
            { view: 'HSplitPane', rect: '0 0 1000 232', anchors:'top left right bottom', 
              handlePosition: 220, leftMin: 220, rightMin: 520,
              leftChildViews:[
                { view: 'Label', rect: '10 0 100 22', anchors: 'top left right ', text: 'Team Information' },
                { view: 'TextField', rect: '10 32 100 22', anchors:'top left width', placeholder: 'Name' },
                { view: 'TextField', rect: '112 32 100 22', anchors:'top right width', placeholder: 'Color' },
                { view: 'PasswordTextField', rect: '10 57 202 22', anchors:'top left right', placeholder: 'Team Password' },
                { view: 'PasswordTextField', rect: '10 82 202 22', anchors:'top left right', placeholder: 'Team Password Confirmation' },
                { view: 'Button', rect: '10 107 202 22', anchors: 'top left right', id: 'team_submit', text: 'Create Team' },
                { view: 'ScrollPane', rect: '10 132 202 100', anchors:'top left right bottom', 
                  childViews:[
                    { view: 'List', rect: '152 100', anchors: 'top left right bottom' }
                  ]}
              ],
              rightChildViews: [
                { view: 'Label', rect: '10 0 100 22', anchors: 'top left right', text: 'Register Servers' },
                { view: 'TextField', rect: '10 32 755 22', anchors:'top left right', placeholder: 'Address' },
                { view: 'PasswordTextField', rect: '10 57 755 22', anchors:'top left right', placeholder: 'Password' },
                { view: 'PasswordTextField', rect: '10 82 755 22', anchors:'top left right', placeholder: 'Password Confirmation' },
                { view: 'Button', rect: '10 107 755 22', anchors: 'top left right', id: 'team_submit', text: 'Register Server' },
                { view: 'ScrollPane', rect: '10 132 755 100', anchors:'top left right bottom', 
                  childViews:[
                    { view: 'List', rect: '755 100', anchors: 'top left right bottom' }
                  ]}
              ]
            }
          ], 
          bottomChildViews: [
            {view: 'Box', rect: '60 40 930 768', anchors: 'top left right bottom', 
              childViews:[
                {view: 'Label', rect: '320 0 200 22', anchors:'top left',text: 'Team Details' },
                {view: 'Label', rect: '0 32 200 22', anchors:'top left',text: 'Members' },
                { view: 'Table', rect: '0 10 930 200', anchors: 'top left right',
                  columns:[
                    { view: 'table.NumberColumn', label: 'Address', width: 80 },
                    { view: 'table.CustomColumn', label: 'Name', width: 260 },
                    { view: 'table.NumberColumn', label: 'Score', width: 100 },
                    { view: 'table.NumberColumn', label: 'Attack #', width: 100 },
                    { view: 'table.NumberColumn', label: 'Defence #', width: 100 },
                    { view: 'table.NumberColumn', label: 'Uptime', width: 100 }
                  ]},
                {view: 'Label', rect: '0 282 200 22', anchors:'top left',text: 'Servers' },
                { view: 'Table', rect: '0 307 930 200', anchors: 'top left right',
                  columns:[
                    { view: 'table.NumberColumn', label: 'Address', width: 80 },
                    { view: 'table.CustomColumn', label: 'Name', width: 260 },
                    { view: 'table.NumberColumn', label: 'Service #', width: 100 },
                    { view: 'table.NumberColumn', label: 'Attack #', width: 100 },
                    { view: 'table.NumberColumn', label: 'Defence #', width: 100 },
                    { view: 'table.NumberColumn', label: 'Uptime', width: 100 }
                  ]}
            ]}
          ]
        }
    );
}
