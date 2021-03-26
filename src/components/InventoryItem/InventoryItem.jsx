function InventoryItem(props){
    return(
        <>
        <li>{ props.item.color }, { props.item.size }: { props.item.name }</li>
        </>
    )
}

export default InventoryItem;