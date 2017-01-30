import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteTodo(todo) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                todo.destroyRecord();
            }
        },
        markComplete(isComplete) {
            this.store.findRecord('todo', isComplete.id).then(function (todoo) {
                todoo.set('isComplete', true);
                todoo.save();
            });
        }
    }
});
