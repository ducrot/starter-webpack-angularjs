import './grids.scss'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routing from './grids.routes'
import GridsController from './grids.controller'


export default angular.module('app.grids', [uirouter])
    .config(routing)
    .controller('GridsController', GridsController)
    .name