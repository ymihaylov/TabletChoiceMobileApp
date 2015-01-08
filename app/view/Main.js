Ext.define('TabletChoice.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'TabletChoice.view.menu.MenuTab',
        'TabletChoice.view.order.OrderTab'
    ],

    config: {
        tabBar: {
            docked: 'bottom'
        },

        items: [{
            title: 'Menu',
            iconCls: 'list',
            xtype: 'menutab'
        }, {
            title: 'Order',
            iconCls: 'compose',
            xtype: 'ordertab'
        }]
    }
});