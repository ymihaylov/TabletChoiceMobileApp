Ext.define('TabletChoice.model.Item', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Direct'
    ],
    config: {
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'short_description',  type: 'string'},
            {name: 'description',  type: 'string'},
            {name: 'img_url', defaultValue: 'noimg.png', convert: function(value, record){
                if (value == ''){
                    return null;
                }
                return globalConfig.pathToServer + 'upload/items/thumbs/big/' +value;
            }}, 
            {name: 'price', type: 'float'}
        ],
        proxy: {
            type: 'direct',
            directFn: 'Ext.rpc.Item.show',
            paramOrder: 'id'
        },
    },
});