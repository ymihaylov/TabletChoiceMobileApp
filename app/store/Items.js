Ext.define('TabletChoice.store.Items', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Direct'
    ],
    config:{
        autoLoad: true,
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'short_description',  type: 'string'},
            {name: 'img_url', convert: function(value, record){
                if (value == ''){
                    return null;
                }
                return globalConfig.pathToServer + 'upload/items/thumbs/small/' +value;
            }}, 
            {name: 'price', type: 'float'},
            {name: 'price_display', mapping: 'price', convert: function(value, record){
                if (value == ''){
                    return null;
                }
                return '€ ' + value.toFixed(2);
            }}, 
            {name: 'quantity', type: 'float'}
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
