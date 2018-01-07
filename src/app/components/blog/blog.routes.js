/* @ngInject */
export default function routes($stateProvider) {

    $stateProvider
        .state('blog', {
            url: '/blog/',
            template: require('./blog.html'),
            controller: 'BlogController',
            controllerAs: 'blog'
        })

}