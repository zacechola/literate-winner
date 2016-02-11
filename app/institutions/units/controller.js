import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'institutions',
  init() {
    var inst = this.get('controllers.institutions');
    inst.set('fullWidth', false);
  },
  deleteConfirmation: false,
  actions: {
    confirmDelete(unitId, unitName) {
      this.set('deletingName', unitName);
      this.set('toDelete', unitId);
      this.set('deleteConfirmation', true);
    },

    willDelete() {
      var children = this.get('model.children');
      var toDelete = this.get('toDelete');
      var match = children.find(function(f) {
        if (f.orgUnit.id === toDelete) {
          return f;
        }
      });
      children.removeObject(match);
      this.set('deleteConfirmation', false);
    },

    willNotDelete() {
      this.set('deleteConfirmation', false);
    }
  }
});
