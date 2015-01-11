Ext.define('TabletChoice.view.menu.ItemsList', {
    extend: 'Ext.List',

    xtype: 'itemslist',

    config: {
        emptyText: 'No items in theis category!',
        store: 'Items',
        itemTpl : [
            '<div class="items-list">',
                '<img src="{img_url}"/>',
                '<p>{name}</p>',
                '<span class="item-price">{price}</span>',
                '<div class="description">{short_description}</div>',
            '<div>'
        ].join('')

    }

});
