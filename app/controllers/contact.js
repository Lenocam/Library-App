import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  //original properties
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),//starts as false
  validMessage: Ember.computed.gte('message.length', 5),//starts as false

  //my reversing boolean properties
  notValidAddressYet: Ember.computed.not('isValid'),//starts as true
  notLongEnoughMessage: Ember.computed.not('validMessage'),//starts as true


//proerty disabling button must be true to disabled
  isDisabled: Ember.computed.or('notValidAddressYet', 'notLongEnoughMessage'),//starts as true

  actions: {
    sendMessage() {
      alert(`Sending your message: ${this.get('message')} from ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thanks for your thoughts! We'll check'em out.`);
      this.set('message', '');
      this.set('emailAddress', '');
    }
  }
});
