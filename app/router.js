import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('site-test');
  this.route('institutions', {path: '/institutions/:rcId'}, function() {
    this.route('units', {path: '/units/:unitId'}, function() {
      this.route('new');
    });
  });
});

export default Router;
