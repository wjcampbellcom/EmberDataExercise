import Ember from 'ember';

export default Ember.Component.extend({

  currencyFlag:"usd.png" ,
  name:"",
  code:"",
  selected:false,
  changed : null,

  init : function (){
    this._super();
    this.set('name', this.get('currency').get('name'));
    this.set('code', this.get('currency').get('code'));
    this.set('changed', this.get('changed'));
   // this.set('selected', this.get('selected'));
    this.setFlag();
  },

  watchSelected : function(){
    if (this.changed != null){
      this.changed( this.get('currency'), this.selected);
    }
  }.observes('selected'),

  setFlag : function(){
    if (this.code==="USD"){
      this.set('currencyFlag', "images/usd.png");
    }else if(this.code==="GBP"){
      this.set('currencyFlag', "images/gbp.png");
    }else if (this.code==="EUR"){
      this.set('currencyFlag', "images/eur.png");
    }
  },
});
