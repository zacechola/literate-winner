import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      appName: 'orgMaint',
      appStatus: 'Up!'
    }
  }
});
