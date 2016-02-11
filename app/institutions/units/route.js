import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    var unitId = params.unitId;
    var instModel = this.modelFor('institutions');
    var model;

    function searchObj(node) {
      var result;
      if (unitId == node.orgUnit.id) {
        return node;
      } else {
        for (var i = 0; i < node.children.length; i++) {
          result = searchObj(node.children[i]);

          if (result) {
            return result;
          }
        }
      }
      return false;
    }

    model = searchObj(instModel);
    return model;

  },

  afterModel(model) {
    if (model && !model.children.length) {
      this.transitionTo('institutions.units.new');
    }
  },
});
