import React from 'react';
import ItemCount from '../NavBar/Button'
import ItemDetail from './ItemDetail';
import ItemDetailContainer from './ItemDetailConteiner';

const ItemListContainer = ({saludo}) => {
   
    return ( 
            <div> <p>{saludo}</p>
            <ItemCount initial={0} stock={5} />
            <ItemDetailContainer/>
            </div>
    )
}
export default ItemListContainer;


