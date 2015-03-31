/**
 * Created by arnoldkrumins on 31/03/15.
 */
app.directive('siteStats',function(){

    return{
          restrict:'EA',
          scope:{ result:'='},
          template:'<div class="site-stats" ng-hide="result === NULL">' +
                        '{{ angular.isUndefined(result) }}' +
                        '<p>score : {{ result.ruleGroups.USABILITY.score }}</p>'+
                        '<p><i class="fa" ng-class="{\'fa-thumbs-up\':result.ruleGroups.USABILITY.pass,\'fa-thumbs-down\':!result.ruleGroups.USABILITY.pass}"></i></p>'+
                    '</div>',
          link:function(scope,element,__){


              var l = scope.result;
          }
    }


})