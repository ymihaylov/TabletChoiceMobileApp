Ext.define('TabletChoice.view.menu.ItemsList', {
    extend: 'Ext.List',

    xtype: 'itemslist',

    config: {
        emptyText: 'No items in theis category!',
        store: 'Items',
        itemTpl : [
            '<div class="items-list">',
                '<tpl if="img_url">',
                    '<img src="{img_url}"/>',
                '<tpl else>',
                    '<div class="noimg"></div>',
                '</tpl>',
                '<h2>{name}</h2>',
                '<span class="item-price-container">Price: <span class="item-price">{price_display}</span></span>',
                '<span>Quantity: {quantity}gr</span>',
                '<div class="description">{short_description}</div>',
            '<div>'
        ].join('')

    }

});
