import './album.scss'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import holder from '../../directives/holder.directive'
import routing from './album.routes'
import AlbumController from './album.controller'


export default angular.module('app.album', [uirouter, holder])
    .config(routing)
    .controller('AlbumController', AlbumController)
    .name