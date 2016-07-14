import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({

  urlForQuery: function(modelName) {
    return this.host +  '/users/query';
  }

});
