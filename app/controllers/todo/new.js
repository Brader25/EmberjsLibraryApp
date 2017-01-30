import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

        saveTodo(newTodo) {
            newTodo.save().then(() => this.transitionTo('todo'));
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});
