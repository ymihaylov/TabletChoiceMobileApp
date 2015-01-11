Ext.define('TabletChoice.controller.Menu', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainWindow: 'main',
            toggleCategoriesButton: 'menutab titlebar button[action=toggleCategories]',
            categoriesList: 'menutab categorieslist',
            itemsList: 'menutab itemslist',
            itemDetails: 'menutab itemdetails'
        },
        control: {
            toggleCategoriesButton: {
                tap: 'onToggleCategoriesClick'
            },
            categoriesList: {
                itemtap: 'onCategorySelected'
            },
            itemsList: {
                itemtap: 'onItemSelected'
            },
            itemDetails: {
                hide: 'onHideDetails',
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
    onCategorySelected: function(component, index, target, record){
        var categoryId = record.get('id'),
            itemsStore = this.getItemsList().getStore();
        itemsStore.loadCategory(categoryId);
    },
    onItemSelected: function(component, index, target, record){
        var navigationView = component.up('navigationview')
            itemDetails = Ext.create('TabletChoice.model.Item');

        TabletChoice.model.Item.load(
            record.get('id'),
            {
                scope: this,
                success: function(itemDetails){
                    this.record = itemDetails;
                    navigationView.push({
                        title: itemDetails.get('name'),
                        xtype: 'itemdetails',
                        record: itemDetails
                    });
                    this.getToggleCategoriesButton().hide();
                },
                failure: function(){
                    Ext.Msg.alert(
                        'Loading failed',
                        [
                            'Failed to load the selected item.',
                            ' Please try again!'
                        ].join('<br />')
                    );
                }
            }
        );

        
    },
    onHideDetails: function(){
        this.getToggleCategoriesButton().show();
    }
});