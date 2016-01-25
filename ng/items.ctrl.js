/**
 * Created by Tigjer on 1/19/16.
 */
angular.module('app')
.controller('ItemsCtrl', function($scope, ItemsSvc) {
    ItemsSvc.fetch().success(function(items){
        $scope.items = items
    })
    $scope.addItem = function() {
        if ($scope.itemName) {
            ItemsSvc.create('/api/items', {
                name: $scope.itemName,
                size: $scope.itemSize,
                brand: $scope.itemBrand,
                type: $scope.itemType
            }).success(function(item){
                $scope.items.unshift(item)
                $scope.itemName = null
                $scope.itemSize = null
                $scope.itemBrand = null
                $scope.itemType = null
            })
        }
    }
})