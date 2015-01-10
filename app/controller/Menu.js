Ext.define('TabletChoice.controller.Menu', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainWindow: 'main',
            toggleCategoriesButton: 'menutab titlebar button[action=toggleCategories]',
            categoriesList: 'menutab categorieslist',
            itemsList: 'menutab itemslist',
        },
        control: {
            toggleCategoriesButton: {
                tap: 'onToggleCategoriesClick'
            },
            categoriesList: {
                itemtap: 'onCategoryTap'
            }
        }
    },
    onToggleCategoriesClick: function(){
        var categoriesList = this.getCategoriesList();
        if (categoriesList.isHidden()){
            categoriesList.show();
        }
        else{
            categoriesList.hide();
        }
    },
    onCategoryTap: function( component, index, target, record, e, eOpts ){
        var categoryId = record.get('id'),
            itemsStore = this.getItemsList().getStore();
        itemsStore.loadCategory(categoryId);
    }
});