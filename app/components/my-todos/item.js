import Ember from 'ember';
import { connect } from 'ember-redux';
import { done, del } from '../../actions/todos';

const stateToComputed = state => ({
  filter: state.todo.filter
});

const dispatchToActions = { done, del };

const App = Ember.Component.extend({
  tagName: 'li',
  classNames: ['item'],
  classNameBindings: ["hiddenItem:item-hidden"],

  hiddenItem: Ember.computed('data', 'filter', function () {
    return this.get('data.name').indexOf(this.get('filter')) == -1;
  })
});

export default connect(stateToComputed, dispatchToActions)(App);
