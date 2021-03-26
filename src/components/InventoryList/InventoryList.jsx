import InventoryItem from '../InventoryItem/InventoryItem';

function InventoryList(props){
    return(
        <>
        <h2>InventoryList</h2>
        <ul>
            {  props.inventory.map( ( item, index )=>
                <InventoryItem item={ item } key={ index }/>
            )}
        </ul>
        
        
        </>
    )
}

export default InventoryList;