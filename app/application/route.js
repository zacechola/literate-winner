import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return { defaultRcId: 1234 };
  }
});
