var app = angular.module('AdsMaker',[]);

app.controller('home', function($scope) {
     $scope.greeting = "Jawahar greeting here";


});

app.controller('AdsOptionsController', ['$scope','$http',function($scope, $http) {
    this.headLines = "Invoking request";
    this.subheadLines = "";
    this.buttons = "";
    this.images = "";
    $scope.activeHeading = {};
    $scope.activeSubHeading = {};
    $scope.activeButton = {};
    $scope.activeImage = {};

    $http.get("http://localhost:8080/adelement/ads/listHeadlines")
        .success(function (response) {
            $scope.headLines = response;
            $scope.activeHeading = $scope.headLines[0];
        });
    $http.get("http://localhost:8080//adelement/ads/listSubHeadlines")
        .success(function (response) {
            $scope.subheadLines = response;
        });
    $http.get("http://localhost:8080/adelement/ads/listButtons")
        .success(function (response) {
            $scope.buttons = response;
        });
    $http.get("http://localhost:8080/adelement/images/list")
        .success(function (response) {
            $scope.images = response;
            $scope.activeImage = $scope.images[0];
        });


    $scope.setActiveHeading = function (heading) {
        $scope.activeHeading = heading;
    };

    $scope.getActiveHeadingClass = function (headingId) {
        if(headingId === $scope.activeHeading.hid) {
            return " list-group-item-success";
        } else {
            return "";
        }
    };

    $scope.setActiveSubHeading = function (subheading) {
        $scope.activeSubHeading = subheading;
    };

    $scope.getActiveSubHeadingClass = function (subheadingId) {
        if(subheadingId === $scope.activeSubHeading.shid) {
            return " list-group-item-danger";
        } else {
            return "";
        }
    };

    $scope.setActiveButton = function (button) {
        $scope.activeButton = button;
    };

    $scope.getActiveButtonClass = function (buttonId) {
        if(buttonId === $scope.activebutton.btnid) {
            return " list-group-item-success";
        } else {
            return "";
        }
    };

    $scope.setActiveImage = function (image) {
        $scope.activeImage = image;
    };

    $scope.getActiveImageClass = function (image) {
        if(image === $scope.activeImage) {
            return " active";
        } else {
            return "";
        }
    };

    $scope.saveAds = function () {
        var requestparams = {headline:$scope.activeHeading.headline, subheadline:$scope.activeSubHeading.subheadline,imageUrl:$scope.activeImage, button:$scope.activeButton.btnLabel};
        $http.post("http://localhost:8080//adelement/ads/save",requestparams)
            .success(function (response) {
                console.log("Ads Saved");
            });
    };

}]);


