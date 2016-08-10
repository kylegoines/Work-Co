require('./scss/main.scss');

import angular from 'angular';
import ngRoute from 'angular-route';

import cartModule from './js/controllers/cartCtrl.js';
import storeModule from './js/controllers/storeCtrl.js';

import dataService from './js/services/dataService.js';

angular.module( 'shoppingApp', [] )
			.factory( 'dataService', dataService )
			.controller( 'cartCtrl', ['$scope','dataService', cartModule] )
			.controller( 'storeCtrl', ['$scope', 'dataService', storeModule] )