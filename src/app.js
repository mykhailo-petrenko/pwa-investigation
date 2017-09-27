import angular from 'angular';
import angularUIRouter from '@uirouter/angularjs';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

import './stylesheets/app.scss';

angular
    .module('ImPWA', [
        angularUIRouter,
        App,
        Home,
        PageNotFound
    ])
    .config([
        '$stateProvider', '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.when('', '/');
            $urlRouterProvider.otherwise("/404");

            $stateProvider.state(
                'home',
                {
                    url: '/',
                    template: '<home />'
                }
            );

            $stateProvider.state(
                '404',
                {
                    url: '/404',
                    template: '<page-not-found />'
                }
            );
        }
    ]);