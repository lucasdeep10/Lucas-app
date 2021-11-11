import React, {useEffect, useState} from 'react';
import Stock from "../productos/stock"; //Productos
import ItemDetail from './ItemDetail';

const getItem = new Promise((res, rej) => { 
    const condition = true;

    if(condition){
        setTimeout(() =>{
            res(Stock)
        },2000)
    }else{
        rej('Error 404')
    }
})

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() =>{
        getItem
                .then(res => setItem(res))
                .catch(err => console.log(err))
                .finally(() => console.log('cargando...'))

                console.log(item)
    },[item])
    return(
        <div>
            <ItemDetail key={item[0]} />
        </div>
    )
}
export default ItemDetailContainer