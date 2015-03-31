/**
 * Created by arnoldkrumins on 30/03/15.
 */
app.controller('mainCtrl',['$scope','MobileFriendlyService', function($scope,MobileFriendlyService){

    $scope.busy;
    $scope.spinnerelement;
    $scope.url;
    $scope.stats;

    $scope.checkSite = function(){

        $scope.busy = true;
        MobileFriendlyService.GetSiteInfo($scope.url).then(function (data) {
            $scope.stats = data;



            $scope.busy = false;
        })

    };


}])