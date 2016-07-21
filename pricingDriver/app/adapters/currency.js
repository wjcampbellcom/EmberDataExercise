import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForFind: function(modelName) {
    return this.host + "/currencies/query";
  },

  urlForFindAll: function(modelName) {
    return this.host + "/currencies";
  },
  urlForQuery: function(modelName) {
    return this.host +  '/currencies/query';
  },

  urlForQueryRecord: function(modelName) {
    return this.host +  '/currencies/query';
  },


});
