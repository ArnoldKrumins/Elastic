/**
 * Created by arnoldkrumins on 29/03/15.
 */
app.factory('MobileFriendlyService',function($http,$q,$log){


    var baseUrl ='https://www.googleapis.com/pagespeedonline/v3beta1/mobileReady?key=AIzaSyDm_EokJZ-ke7LP183GSUgBH5JAgX3qYsY&screenshot=true&snapshots=true&locale=en_US&url=';
    var postfix ="&strategy=mobile&filter_third_party_resources=false&callback=JSON_CALLBACK";

    return{

       // apipath:  baseUrl + callback,

        GetSiteInfo: function (url) {

            var url = baseUrl + url + postfix;

            var deferred = $q.defer();
            $http.jsonp(url).success(function (data) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                $log.info(data);
                $log.info(status);
                $log.info(headers);
                $log.info(config);
                deferred.reject("an error occured while calling Service");
            });

            return deferred.promise;
        }
    }

});