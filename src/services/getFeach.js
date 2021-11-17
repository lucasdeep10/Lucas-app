import stock from '../components/productos/stock.jsx'


export const getFetch = new Promise((res, rej) => { 
    const condition = true;

    if(condition){
        setTimeout(() =>{
            res(stock)
        },2000)
    }else{
        setTimeout(()=> {
            rej('Error 404')
        },2000)
    }
}) 


