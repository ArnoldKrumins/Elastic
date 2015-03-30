/**
 * Created by arnoldkrumins on 30/03/15.
 */
app.controller('mainCtrl',['$scope','MobileFriendlyService', function($scope,MobileFriendlyService){

    $scope.url;
    $scope.stats;

    $scope.checkSite = function(){

        MobileFriendlyService.GetSiteInfo($scope.url).then(function (data) {
            $scope.stats = data;
        })

    };


}])