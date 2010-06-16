include('../layout.js');

storm.layout.event = function() {
    return uki(
        { view: 'Table', rect: '0 57 1000 800', anchors: 'top left right',
          columns:[
            { view: 'table.NumberColumn', label: 'ID', width: 80 },
            { view: 'table.CustomColumn', label: 'Attacker', width: 260 },
            { view: 'table.NumberColumn', label: 'Defener', width: 200 },
            { view: 'table.NumberColumn', label: 'Type of Attack', width: 200 },
            { view: 'table.NumberColumn', label: 'Service', width: 200 },
            { view: 'table.NumberColumn', label: 'Uptime', width: 200 },
            { view: 'table.CustomColumn', label: 'Time of Attack', width: 200 }
          ]}
    );
}
