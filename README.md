# starter-webpack-angularjs

A starter for a project with AngularJS (1.x), Bootstrap (4.x) and Font Awesome (4.x) powered by Webpack (3.x).

* Webpack configurations for development, production and test.
* ES6, and ES7 support with Babel.
* Add AngularJS DI with annotations (/* @ngInject */).
* Source maps included in all builds.
* Stylesheets with Autoprefixer and SASS (not required, it supports regular css too).
* Development server with live reload and HMR.
* Testing suite with Karma and Jasmine.


## Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone the repo
$ git clone https://github.com/ducrot/starter-webpack-angularjs.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

Go to [http://localhost:8080](http://localhost:8080) in your browser.


## Getting Started

### Dependencies

What you need to run this app:

* `node` and `npm`
* Ensure you're running Node (`v8.x.x`+) and NPM (`5.x.x`+)

### Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

### Developing

After you have installed all dependencies you can now start developing with:

* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and update with Hot Module Replacement (HMR). The application can be checked at `http://localhost:8080`.

### Testing

Have a look at [`tests.webpack.js`](src/tests.webpack.js) and [`src/app/components/home/home.controller.test.js`](src/app/components/home/home.controller.test.js).

* Run: `npm test` or `npm run test:live`

### Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!


## FAQ

#### Do I need to add script / link tags into index.html ?

No, Webpack will add all the needed Javascript bundles as script tags and all the CSS files as link tags. The advantage is that you don't need to modify the index.html every time you build your solution to update the hashes.

#### How to include external angular libraries ?

It's simple, just install the lib via npm and import it in your code when you need it. Don't forget that you need to configure some external libs inside [`/src/app/app.js`](/src/app/app.js).


## Credits

- The ACME logo was created by [Acme Logos - Professional Placeholder Logos](http://acmelogos.com/).
- The basis of this readme and some ideas were taken from [preboot/angularjs-webpack](https://github.com/preboot/angularjs-webpack).
- The fundamentals and best practices are taken from [angular-tips.com](http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/).


## ToDo

* Implement [code splitting](https://webpack.js.org/guides/code-splitting/), [lazy loading](https://webpack.js.org/guides/lazy-loading/).
* ESLint
* Vagrant
* ...


## License

[MIT License](LICENSE)


## Changelog

### Version 1.0.0 (2018-01-07)

Initial release.