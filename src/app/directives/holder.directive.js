import angular from 'angular'
import holderjs from 'holderjs'

/**
 * An AngularJS directive for HolderJS https://github.com/imsky/holder.
 *
 * Use directive one of two ways (use data-src to avoid console 404 errors):
 *
 * <img holder="holder.js/200x200/text:?">
 * <img holder data-src="holder.js/200x200/text:?">
 */
/* @ngInject */
function holder() {
    return {
        link: function(scope, element, attrs) {
            if(attrs.holder)
                attrs.$set('data-src', attrs.holder);
            holderjs.run({images:element[0]});
        }
    }
}

export default angular.module('directives.holder', [])
    .directive('holder', holder)
    .name