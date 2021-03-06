import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    saveMessage(newMessage) {
      newMessage.save().then(() => this.controller.set('responseMessage', true));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();

    }
  }
});
