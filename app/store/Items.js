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
            {name: 'img_url', defaultValue: 'noimg.png', convert: function(value, record){
                if (value == ''){
                    return null;
                }
                return globalConfig.pathToServer + 'upload/items/thumbs/small/' +value;
            }}, 
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
