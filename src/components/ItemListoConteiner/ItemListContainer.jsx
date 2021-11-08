import React from 'react';
import ItemCount from '../NavBar/Button'

const ItemListContainer = ({saludo}) => {
   
    return ( 
            <div> <p>{saludo}</p>
            <ItemCount initial={0} stock={5} />
            </div>
    )
}
export default ItemListContainer;


