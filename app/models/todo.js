import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  task: DS.attr('string'),
  isComplete: DS.attr('boolean', { defaultValue: false })
});
