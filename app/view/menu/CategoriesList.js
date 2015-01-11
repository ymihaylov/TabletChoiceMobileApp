Ext.define('TabletChoice.view.menu.CategoriesList', {
    extend: 'Ext.List',

    xtype: 'categorieslist',

    config: {
        hideAnimation: 'slideOut',
        showAnimation: {
            type: 'slide',
            direction: 'right'
        },
        emptyText: 'No data found!',
        store: 'Categories',
        itemTpl : [
            '<p>{name}</p>',
            '<div class="description">{description}</div>'
        ].join('')

    }

});
