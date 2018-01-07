import home from './index';

describe('Controller: Home', function() {

    let $controller;

    beforeEach(angular.mock.module(home));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));


    it('name is initialized to \'Foo\'', function() {
        let ctrl = $controller('HomeController');
        expect(ctrl.name).toBe('Foo');
    });


    it('helloWorld is initialized to \'Hellow world!\'', function() {
        let ctrl = $controller('HomeController');
        expect(ctrl.helloWorld).toBe('Hellow world!');
    });

});