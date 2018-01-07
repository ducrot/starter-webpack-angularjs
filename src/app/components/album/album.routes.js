/* @ngInject */
export default function routes($stateProvider) {

    $stateProvider
        .state('album', {
            url: '/album/',
            template: require('./album.html'),
            controller: 'AlbumController',
            controllerAs: 'album'
        })

}