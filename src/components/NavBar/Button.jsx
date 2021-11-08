import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)

    const sumaItem = () => {
        count < stock ?  setCount(count +1) : alert('Superaste el limite de sotck') 
    }
    const resItem = () => {
         count > initial ? setCount(count -1) : alert('Su número de producto es 0')
    }
    const onAdd = ()=> {
        if (count>= 1) alert(`Agregaste ${count} productos`)
    }

    return (
    <div> 
            <button onClick={sumaItem}>+</button>
            <label>Cantidad: {count} </label>
            <button onClick={resItem}>-</button>
            <button onClick={onAdd}>Agregar</button>
    </div>
    );
};

export default ItemCount 