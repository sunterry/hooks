import React, { Component } from 'react';
import UseStateHooks from './components/useStateHooks';
import UseEffectHooks from './components/useEffectHooks';
import UseEffectFetch from './components/useEffectFetch';
import TodoList from './layout/todoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <UseStateHooks />
	      <UseEffectHooks />
	      <TodoList />
	      <UseEffectFetch />
      </div>
    );
  }
}

export default App;
