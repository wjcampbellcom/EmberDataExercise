import Ember from 'ember';

export default Ember.Controller.extend({

  actions :{
    doIt(){
      console.log("doing it");
      console.log(this.model);
      console.log(this.get('model'));
    }
  },
});
