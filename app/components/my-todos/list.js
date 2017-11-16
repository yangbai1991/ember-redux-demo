import Ember from 'ember';
import { connect } from 'ember-redux';

const stateToComputed = state => ({
  items: state.todo.items,
  noItems: state.todo.items.filter(item => item.name.indexOf(state.todo.filter) > -1).length <= 0
});

const App = Ember.Component.extend({
  tagName: 'ul',
  classNames: 'todo-list'
});

export default connect(stateToComputed, {})(App);
