import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Comming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then(() => this.conroller.set('responseMessage', true));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
