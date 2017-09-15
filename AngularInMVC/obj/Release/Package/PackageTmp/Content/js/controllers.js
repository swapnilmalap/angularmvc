//controllers
angular.module('app').controller('eventCtrl', function ($scope) {
    $scope.submitted = false;
    $scope.MetaTagList = [{ name: '', value:'' }];

    $scope.addMetaTag = function () {
        var newItemNo = $scope.MetaTagList.length + 1;
        $scope.MetaTagList.push({ name: '', value: '' });
    };

    $scope.removeMetaTag = function (item) {
        var index = $scope.MetaTagList.indexOf(item);
        $scope.MetaTagList.splice(index, 1);
    };

    $scope.resetMetaTag = function () {
        $scope.MetaTagList = [{ name: '', value: '' }];
    };

})
.controller('ctrlContact', function ($scope) {
    $scope.Message = 'Test';
});