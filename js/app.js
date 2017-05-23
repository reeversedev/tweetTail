/**
 * Created by ReeVerse on 24-04-2017.
 */
var app = angular.module('tweet-tail', ['ngRoute']);


app.config(function ($routeProvider) {
   $routeProvider

       .when('/', {
           templateUrl: 'pages/home.html',
           controller: 'mainController'
       })
       .when('/about', {
           templateUrl: 'pages/about.html',
           controller: 'aboutController'
    })
       .when('/contact', {
           templateUrl: 'pages/blog.html',
           controller: 'blogController'
       });
});

app.controller('mainController', function ($scope) {
    $scope.message = 'Tweet more than just a classic version..';
});

app.controller('aboutController', function ($scope) {
    $scope.message = 'This is about';
    $scope.about = {
        firstLine: 'is a project that was made out of frustration. Really? Lol. No!',
        secondLine: 'It was back then when I ',
        thirdLine: 'I applied for an internship and a task was given to me in order to grab that opportunity.',
        forthLine: 'I coded like a crazy person, that too when I had the least knowledge of ',
        fifthLine: 'It took me like two weeks to understand the logic behind it properly. I actually took a deep dive into Angular.js that time. I never got accepted to that internship till date ' +
        'but I am glad they gave me this task, I actually made something that I can be proud of.',
        ps : 'Never ever give up on something you love, keep on doing your best and you will eventually have it. Trust me it actually works.',
        pps: ' I personally feel that this was never in my strength to build this. But I always had one thing in my chemical mind.'
    }
});

app.controller('contactController', function ($scope) {
    $scope.message = 'This is Contact';
});

app.controller('tweet-controller', function ($scope) {
    $scope.header = {
        heading: 'tweet-tail',
        quote: 'tweet in more than just a classic way..',
        login: 'Login',
        logout: 'Logout'
    }
    $scope.middle = {
        category1: 'Home',
        category2: 'About',
        category3: 'GitHub'
    }

})