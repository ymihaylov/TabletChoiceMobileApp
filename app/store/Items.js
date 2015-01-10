Ext.define('TabletChoice.store.Items', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Direct'
    ],
    config:{
        autoLoad: true,
        fields: [
            'name', 'short_description', 
            {name: 'img_url', defaultValue: 'noimg.png'}, 
            {name: 'price', type: 'float'}
        ],
        proxy: {
            type: 'direct',
            directFn: 'Ext.rpc.Category.show',
            paramOrder: 'categoryId',
            extraParams:{
                categoryId: 1
            }
        }
    },
    loadCategory: function(categoryId){
        this.getProxy().getExtraParams().categoryId = categoryId
        this.load();
    }
});
