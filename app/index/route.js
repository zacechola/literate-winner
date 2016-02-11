import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var applicationModel = this.modelFor('application');
    return {
      defaultRcId: applicationModel.defaultRcId
    };

  },
  afterModel(model) {
    this.transitionTo('institutions', model.defaultRcId);
  }
});
