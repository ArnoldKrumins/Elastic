/**
 * Created by arnoldkrumins on 31/03/15.
 */
app.directive('siteStats',function(){

    return{
          restrict:'EA',
          scope:{ result:'='},
          template:'<div class="site-stats">' +
                        '<p><i class="fa" ng-class="{\'fa-thumbs-up\':result.ruleGroups.USABILITY.pass,\'fa-thumbs-down\':!result.ruleGroups.USABILITY.pass}"></i><span>{{ result.ruleGroups.USABILITY.score }}%</span></p>'+
//                        '<img  src="{{ \'data:image/jpeg;base64,\' + result.screenshot.data }}" >' +
                    '</div>',
          link:function(scope,element,__){

            scope.$watch('result',function(){

                if(!angular.isUndefined(scope.result))
                {
                    var t = new TimelineMax();

                   t.to(element,0.1,{autoAlpha:1});
                   t.to(element.find('i'), 0.1, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:2, ease:Power1.easeInOut});
                    t.play();
                }
                else
                {
                    TweenMax.to(element, 0, {autoAlpha:0});
                }
            })

          }
    }


})