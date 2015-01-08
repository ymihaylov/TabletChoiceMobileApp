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
            '<div style="font-size: 0.75em; color: darkgray">{description}</div>'
        ].join('')

    }

});
