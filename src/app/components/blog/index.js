import './blog.scss'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routing from './blog.routes'
import BlogController from './blog.controller'


export default angular.module('app.blog', [uirouter])
    .config(routing)
    .controller('BlogController', BlogController)
    .name