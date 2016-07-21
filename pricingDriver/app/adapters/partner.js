import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForQuery: function(modelName) {
    return this.host +  '/users/partners/query';
  },

  urlForQueryRecord: function(modelName) {
    return this.host +  '/users/partners/query';
  },

  urlForFindAll: function(modelName) {
    return this.host +  '/users/partners';
  }

});
