import InventoryItem from '../InventoryItem/InventoryItem';
import { useSelector } from 'react-redux';

function InventoryList(props){
    const inventory = useSelector( ( store )=>{
        return store.inventory;
    })

    return(
        <>
        <h2>InventoryList</h2>
        <ul>
            {  inventory.map( ( item, index )=>
                <InventoryItem item={ item } key={ index }/>
            )}
        </ul>
        </>
    )
}

export default InventoryList;