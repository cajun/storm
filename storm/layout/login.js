include('../layout.js');

storm.layout.login = function() {
    return uki(
        { view: 'Box', rect: '1000 1000', anchors: 'top left right bottom', id: 'login_screen', background:'black', childViews: [ 
          { view: 'Box', rect: '300 300 400 140', anchors: 'top left right', background: 'theme(panel)', childViews:[
            { view: 'Label', rect: '10 10 100 22', anchors: 'top left right', text: 'hackfest' },
            { view: 'TextField', rect: '10 32 380 22', anchors: 'top left right', placeholder: 'username' },
            { view: 'PasswordTextField', rect: '10 64 380 22', anchors: 'top left right', placeholder: 'password' },
            { view: 'Button', rect: '75 96 100 22', anchors: 'top left width', id: 'register', text: 'Register' },
            { view: 'Button', rect: '225 96 100 22', anchors: 'top right width', id: 'login', text: 'Login' }
          ]}
        ]}
        
    );
}
