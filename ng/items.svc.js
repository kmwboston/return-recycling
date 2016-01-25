/**
 * Created by Tigjer on 1/19/16.
 */
angular.module('app')
.service('ItemsSvc', function($http){
    this.fetch = function () {
        return $http.get('/api/items')
    }
    this.create = function(item){
        return $http.post('/api/items', item)
    }
})