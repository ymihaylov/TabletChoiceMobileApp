Ext.define('TabletChoice.view.menu.ItemDetails', {
    extend: 'Ext.Container',
    requires:[
        'TabletChoice.model.Item'
    ],

    xtype: 'itemdetails',
    config: {
        items: [{
            xtype: 'label',
            itemId: 'itemName'
        },{
            xtype: 'label',
            itemId: 'itemDescription'
        }]
    },
    beforeInitialize: function(){
        var config = this.config,
            record = config.record;

        this.down("#itemName").setHtml(record.get('name'));
        this.down("#itemDescription").setHtml(record.get('short_description'));
        this.callParent(arguments);
    }
});
