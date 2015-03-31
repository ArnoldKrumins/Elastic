/**
 * Created by arnoldkrumins on 31/03/15.
 */
app.directive('siteStats',function(){

    return{
          restrict:'EA',
          scope:{ result:'='},
          template:'<div>' +
                        '<p>score : {{ result.ruleGroups.USABILITY.score }}</p>'+
                        '<p>pass :{{ result.ruleGroups.USABILITY.pass }}</p>'+
                    '</div>',
          link:function(scope,element,__){

            var s = scope.result;

          }
    }


})