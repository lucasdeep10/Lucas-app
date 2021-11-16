import React from 'react';
import{useState,useEffect} from 'react';
import {Spinner} from 'react-bootstrap';
import { getFetch } from '../../services/getFeach';
import ItemCount from '../NavBar/Button';
import ItemList from './itemList.jsx';




function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getFetch
                .then(res => setProducts(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
    },[])
    console.log(products)
    return(
        <>
        <h1>{greeting}</h1>
        {loading ? <Spinner animation="border" role="status">
                    <span className="visually-hideen">Loading...</span>
                    </Spinner> :  <ItemList products={products}/>
        }
                        <ItemCount/>
       </>
    )
}

export default ItemListContainer;


