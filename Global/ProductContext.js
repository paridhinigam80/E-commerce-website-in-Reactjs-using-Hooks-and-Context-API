import React, {createContext,useState} from 'react'
import b1 from '../ecomm/b1.jpg'
import b2 from '../ecomm/b2.jpg'
import b3 from '../ecomm/b3.jpg'
import b4 from '../ecomm/b4.jpg'
import b5 from '../ecomm/b5.jpg'
import b6 from '../ecomm/b6.jpg'
import b7 from '../ecomm/b7.jpg'
import b10 from '../ecomm/b10.jpg'
import b11 from '../ecomm/b11.jpg'
import b12 from '../ecomm/b12.jpg'
import b13 from '../ecomm/b13.jpg'
import b14 from '../ecomm/b14.jpg'


 export const ProductContext=createContext();
const ProductContextProvider = (props) =>
{
    const[products]=useState([
        {id:1, name:'Bracelet', price:100, image:b1, status:'hot'},
        {id:2, name:'Shoes', price:200, image:b2, status:'hot'},
        {id:3, name:'Picture', price:300, image:b3, status:'new'},
        {id:4, name:'Watch', price:400, image:b4, status:'new'},
        {id:5, name:'Sunglass', price:500, image:b5, status:'new'},
           {id:6, name:'Coat', price:700, image:b6, status:'hot'},
           {id:7, name:'Tops', price:600, image:b7, status:'hot'},
           {id:10, name:'Bags', price:700, image:b10, status:'hot'},
           {id:11, name:'Sandel', price:800, image:b11, status:'new'},
           {id:12, name:'DSLR', price:900, image:b12, status:'hot'},
           {id:13, name:'Speaker', price:200, image:b13, status:'new'},
           {id:14, name:'Microphone', price:800, image:b14, status:'hot'}



    ]);
    return(
       < ProductContext.Provider value={{products:[...products]}}>
{props.children}
       </ProductContext.Provider>
    )
}
export default ProductContextProvider;