include('../layout.js');

storm.layout.register_popup = function() {
    return uki(
        { view: 'Popup', rect: '150 160', anchors:'bottom right', 
          shadow:'theme(shadow-big)', id: 'register_popup', 
          relativeTo: uki('#register')[0], childViews: [
            { view: 'Label', rect: '10 10 100 22', anchors:'top left', text: 'Registeration' },
            { view: 'TextField', rect: '10 32 130 22', anchors:'top left right', placeholder: 'username' },
            { view: 'PasswordTextField', rect: '10 64 130 22', anchors:'top left right', placeholder: 'password' },
            { view: 'PasswordTextField', rect: '10 96 130 22', anchors:'top left right', placeholder: 'password confirmation' },
            { view: 'Button', rect: '25 128 100 22', anchors:'top left width', text: 'Create' }

        ]}
    );
}
