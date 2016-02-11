import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    // TODO: Replace with Ajax call
    return {
      orgUnit: {
        id: 1,
        name: 'Institution 1',
      },
      parentId: null,
      children: [
        {
          orgUnit: {
            id: 2,
            name: 'Campus 1'
          },
          parentId: 1,
          children: [
            {
              orgUnit: {
                id: 5,
                name: 'School 4'
              },
              parentId: 2,
              children: [
                {
                  orgUnit: {
                    id: 7,
                    name: 'Department 1'
                  },
                  children: [],
                  parentId: 5
                }
              ]
            },
            {
              orgUnit: {
                id: 6,
                name: 'School 5'
              },
              parentId: 2,
              children: []
            }
          ]
        },
        {
          orgUnit: {
            id: 3,
            name: 'Campus 2'
          },
          parentId: 1,
          children: []
        },
        {
          orgUnit: {
            id: 4,
            name: 'Campus 3'
          },
          parentId: 1,
          children: []
        }
      ]
    };
  },

});
