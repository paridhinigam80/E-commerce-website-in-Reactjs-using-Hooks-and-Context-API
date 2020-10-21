import React from 'react'
import './App1.css';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from './Navbar'

import ProductContextProvider from '../Global/ProductContext'
import CartContextProvider from '../Global/CartContext'
import Products from './Products'
import Cart from './Cart'
import NotFound from './NotFound'

function App1()
{
    return(
        <div >
<ProductContextProvider>
    <CartContextProvider>
    <Router>
        <Navbar/>
     
        <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route component={NotFound}/>
            </Switch>
    </Router>


    </CartContextProvider>

</ProductContextProvider>
        </div>
    );
}
export default App1;