import React, { Component } from 'react';
import UseStateHooks from './components/useStateHooks';
import UseEffectHooks from './components/useEffectHooks';
import UseEffectFetch from './components/useEffectFetch';
import UseEffectUnmount from './components/useEffectUnmount';
import UseCallback from './components/useCallback';
import MemoDemo from './layout/useMemo';
import TodoListUserReducers from './layout/todoListUseReducer';
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
	      <UseEffectUnmount />
	      <MemoDemo />
	      <UseCallback />
	      <TodoListUserReducers/>
      </div>
    );
  }
}

export default App;