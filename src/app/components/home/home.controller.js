/* @ngInject */
export default class HomeController {

    constructor (randomNames) {
        this.helloWorld = 'Hellow world!'
        this.name = 'Foo';
        this.random = randomNames;
    }

    changeName() {
        this.name = 'Bar';
    }

    randomName() {
        this.name = this.random.getName();
    }

}