import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//reducers
const inventory = ( state=[], action )=>{
  console.log( 'in inventory reducer', action );
  if( action.type === 'setInventory' ){
    state = [...action.payload]
  }

  return state;
}

const store = createStore (
  combineReducers({
    inventory: inventory,
  }
), applyMiddleware( logger )
)

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
