import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForFindAll: function(modelName) {
    return this.host + "/currency";
  }

});
