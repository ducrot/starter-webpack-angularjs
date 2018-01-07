/* @ngInject */
export default function routes($stateProvider) {

    $stateProvider
        .state('grids', {
            url: '/grids/',
            template: require('./grids.html'),
            controller: 'GridsController',
            controllerAs: 'grids'
        })

}