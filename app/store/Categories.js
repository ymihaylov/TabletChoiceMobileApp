Ext.define('TabletChoice.store.Categories', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Direct'
    ],
    config:{
        autoLoad: true,
        fields: ['name', 'description'],
        proxy: {
            type: 'direct',
            directFn: Ext.rpc.Category.index
        }
    }
});
