import Ember from 'ember';

export default Ember.Component.extend({

  activeCurrencies : null,

  init : function(){
    this._super();
    this.activeCurrencies = Ember.ArrayProxy.create({content :Ember.A([])});
    this.decorateCurrencies();
  },

  didUpdateAttrs : function(){
    this.decorateCurrencies();
  },

  actions : {
    onCurrenciesChanged (currency, selected) {
      // test the decorated currency, but add/remove the actual currency
      var supportedCurrencies = this.get('supportedCurrencies');
      var allCurrencies = this.get('currencies');
      var actualCurrency = allCurrencies.findBy('code', currency.get('code'));
      var testCurrency = supportedCurrencies.findBy('code', currency.get('code'));
      if (selected){
        if (testCurrency == null){
          supportedCurrencies.addObject(actualCurrency);
          console.log("current added");
        }
      }else{
        if (testCurrency != null){
          supportedCurrencies.removeObject(testCurrency);
          console.log("removed");
        }
      }
    },
  },

  decorateCurrencies(){
    var that = this;
    var currencies = this.get('currencies');
    var activeCurrencies = this.get('activeCurrencies');
    activeCurrencies.clear();
    currencies.forEach(function (currency) {
      var c = Ember.Object.create();
      c.set('code',  currency.get('code'));
      c.set('name' ,currency.get('name'));
      c.set ('supported', that.isCurrencySupported(currency));
      activeCurrencies.addObject(c);
    });

  },

  isCurrencySupported( currency  ){
    var c = this.get('supportedCurrencies').findBy('code', currency.get('code'));
    return c != null;
  },

});
