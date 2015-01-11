Ext.define('TabletChoice.view.menu.ItemDetails', {
    extend: 'Ext.Container',
    requires:[
        'TabletChoice.model.Item'
    ],

    xtype: 'itemdetails',
    config: {
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items:[{
                xtype: 'img',
                width: 300,
                height: 300,
                margin: 10
            },{
                xtype: 'container',
                defaults: {
                    xtype: 'label'
                },
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10px 0 0 0',
                    defaults: {
                        xtype: 'label'
                    },
                    items:[{
                        html: 'Price: ',
                        margin: '0 1em 0 0'
                    },{
                        itemId: 'price',
                        cls: 'item-price'
                    },{
                        html: 'Quantity: ',
                        margin: '0 1em 0 0'
                    },{
                        itemId: 'quantity'
                    },{
                        html: 'gr'
                    }]
                },{
                    itemId: 'itemDescription'
                }]
            }]
        }
        //TODO add omments here
        ],
    },
    beforeInitialize: function(){
        var config = this.config,
            record = config.record,
            imgUrl = record.get('img_url');

        this.down("img").show();
        if (imgUrl){
            this.down("img").setSrc(record.get('img_url'));
        }
        else{
            this.down("img").hide();
        }
        this.down("#itemDescription").setHtml(record.get('description'));
        this.down("#price").setHtml(record.get('price_display'));
        this.down("#quantity").setHtml(record.get('quantity'));
        this.callParent(arguments);
    }
});
