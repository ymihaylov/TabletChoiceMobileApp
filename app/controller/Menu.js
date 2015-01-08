Ext.define('TabletChoice.controller.Menu', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainWindow: 'main',
            categoriesTab: 'menutab',
            toggleCategoriesButton: 'menutab titlebar button[action=toggleCategories]',
            categoriesList: 'menutab categorieslist'
        },
        control: {
            toggleCategoriesButton: {
                tap: 'onToggleCategoriesClick'
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
    }
});