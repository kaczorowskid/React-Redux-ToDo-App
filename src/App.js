import React, {Component} from 'react';
import {Provider} from 'react-redux'
import reducer from './reducer/reducer'
import { createStore } from 'redux';
import Todo from './components/Todo'

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <>
        <Provider store = {store}>
         <Todo />
        </Provider>
      </>
    )
  }
}

export default App;
