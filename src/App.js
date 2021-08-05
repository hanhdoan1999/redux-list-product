import { BrowserRouter,Switch,Route } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Cart from "./containers/Cart";


function App() {
  return (
   
    <BrowserRouter>
       <Switch>
       <Route path="/" exact component={ProductListing}/>
       <Route path="/product/:productId" exact component={ProductDetail}/>
       <Route path="/cart" exact component={Cart}/>
       <Route>404 </Route>  
     </Switch>
    </BrowserRouter>
  );
}

export default App;
