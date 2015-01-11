Ext.define('TabletChoice.view.menu.MenuTab', {
    extend: 'Ext.NavigationView',

    requires: [
        'TabletChoice.view.menu.CategoriesList',
        'TabletChoice.view.menu.ItemsList',
        'TabletChoice.view.menu.ItemDetails'
    ],

    xtype: 'menutab',

    config: {
        navigationBar: {
            items: [{
                xtype: 'button',
                align: 'left',
                iconCls: 'list',
                iconMask: true,
                text: 'Categories',
                action: 'toggleCategories'
            }]
        },

        items:[{
            title: 'Menu',
            xtype: 'container',
            layout: 'hbox',
            items:[{
                docked: 'left',
                xtype: 'categorieslist',
                width: 250
            }, {
                xtype: 'itemslist',
                flex: 1
            }]
        }
        //TODO Add Item view here. NavigationView acts like container with card layout
        ]
    }

});


