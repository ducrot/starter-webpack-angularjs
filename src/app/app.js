import '../styles/app.scss'

import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import collapse from 'ui-bootstrap4/src/collapse'
import uirouter from '@uirouter/angularjs'
import routing from './app.config'
import AppController from './app.controller'

import home from './components/home';
import blog from './components/blog';
import grids from './components/grids';
import album from './components/album';

angular
    .module('app', [ngAnimate, ngTouch, collapse, uirouter, home, blog, grids, album])
    .config(routing)
    .controller('AppController', AppController)