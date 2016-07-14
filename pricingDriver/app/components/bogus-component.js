import Ember from 'ember';
import AppAdapter from '../adapters/application';

export default Ember.Component.extend({

  adapter : AppAdapter.create(),

  actions :{
    doIt(){
      console.log("doing it");
      console.log(this.adapter);
      console.log(this.adapter.get('headers').access_token);
    }
  },


});
