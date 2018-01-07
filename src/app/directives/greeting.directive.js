import angular from 'angular'

/* @ngInject */
function greeting() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: '<h3>Hello, {{name}}</h3>'
    }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name