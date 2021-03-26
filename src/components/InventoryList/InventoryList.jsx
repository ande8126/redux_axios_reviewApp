import InventoryItem from '../InventoryItem/InventoryItem';

function InventoryList(props){
    return(
        <>
        <h2>InventoryList</h2>
        <p>{ JSON.stringify( props ) }</p>
        <InventoryItem />
        </>
    )
}

export default InventoryList;