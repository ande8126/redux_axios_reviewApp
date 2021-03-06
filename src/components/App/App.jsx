import { useState, useEffect } from 'react';
import './App.css';
import InventoryList from '../InventoryList/InventoryList';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  //lets us send info to redux store
  const dispatch = useDispatch();
  useEffect( ()=>{
    getInventory();
  }, [])

  const [ tempItem, setTempItem ] = useState( { size: 'Tiny', color: 'Red', description: '' } );
  const [ inventory, setInventory ] = useState( [] );
  let addItem=()=>{
    console.log( ' in addItem:', tempItem );
    axios.post( '/inventory', tempItem ).then( ( response )=>{
      console.log( 'back from POST with:', response );
      getInventory();
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    })
  }

  let getInventory=()=>{
    console.log( 'in getInventory' );
    axios.get( '/inventory' ).then( (response)=>{
      console.log( 'back from GET with:', response );
      //replace with dispatch
      // setInventory( response.data );
      dispatch( { type: 'setInventory', payload: response.data } )
    } ).catch( ( err ) =>{
      console.log( err );
      alert( 'err' );
    })
  }

  let handleColorChange=(event)=>{
    console.log( 'in handleColorChange:', event.target.value );
    setTempItem( { ...tempItem, color: event.target.value })
  }

  let handleNameChange=(event)=>{
    console.log( 'in handleNameChange:', event.target.value );
    setTempItem( { ...tempItem, description: event.target.value })
  }

  let handleSizeChange=(event)=>{
    console.log( 'in handleSizeChange:', event.target.value );
    setTempItem( { ...tempItem, size: event.target.value })
  }

  return (
    <div className="App">
      <h1>React Review App</h1>
      <div>
        <select onChange={ handleColorChange }>
          <option>Red</option>
          <option>Orange</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Purple</option>
        </select>
        <select onChange={ handleSizeChange }>
          <option>Tiny</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Huge</option>
          <option>Enormous</option>
        </select>
        <input type="text" placeholder="name" onChange={ handleNameChange}></input>
        <button onClick={ addItem }>Add Item</button>
        <button onClick={ getInventory }>Refresh</button>
      </div>
      <InventoryList inventory={ inventory }/>
      <p>{ JSON.stringify( tempItem ) }</p>
    </div>
  );
}

export default App;
