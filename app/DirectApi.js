Ext.define('TabletChoice.DirectApi', { 
    requires: ['Ext.direct.*']
}, function () {
	Ext.Ajax.request({
	    url: '/TabletChoice/public/rpc?javascript',
	    params: {
	        id: 1
	    },
	    async: false,
	    success: function(response){
	        eval(response.responseText);
	    }
	});
});