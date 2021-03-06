modularAdmin.app

.config(function($stateProvider) {

	$stateProvider

	// App state
	.state('app', {
		abstract : true,
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/app.html'); 
		},
		controller: "AppCtrl as app"
	})

	// Dashboard state
	.state('app.dashboard', {
		url: "/dashboard",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/dashboard/dashboard.html'); 
		},
		controller: "DashboardCtrl as dashboard",
		data: {
			pageTitle: '',
			page: 'dashboard'
		}
	})

	// Dashboard state
	.state('app.itemsList', {
		url: "/items-list",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/items/list/items-list.html'); 
		},
		controller: "ItemsListCtrl as itemsList",
		data: {
			pageTitle: 'Items',
			page: 'items-list'
		}
	});

});