Ext.define('TabletChoice.view.menu.ItemsList', {
    extend: 'Ext.List',

    xtype: 'itemslist',

    config: {
        emptyText: 'No data found!',
        store: 'Items',
        itemTpl : [
            '<div>',
                '<p>{name}</p>',
                '<span style="color: darkred">{price}<span>',
                '<div style="font-size: 0.75em; color: darkgray">{short_description}</div>',
            '<div>'
        ].join('')

    }

});
