
import React from 'react'

export const Item = ({prod}) => {
    return (

<div className="card w-25 mt-5" style={{ width: '18rem' }} key={prod.id}>

<div className="card-header">
    {`${prod.nombre} - ${prod.tipo}` }
</div>
<div className="card.header">
<img  src={prod.img} alt= ""/>
    <div className="list-group-flush">
        <p>$ {prod.precio}</p>
        <p>Talle: {prod.talle}</p> 
    </div>
</div>
<div className="card-footer">
    <button className="btn btn-outline-primary btn-block">
        detalle del producto
    </button>
</div>
</div>
    )
}

