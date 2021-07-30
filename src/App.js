import { BrowserRouter,Switch,Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {
  return (
   
    <BrowserRouter>
       <Switch>
       <Route path="/" exact component={ProductListing}/>
       <Route path="/product/:productId" exact component={ProductDetail}/>
       <Route>404 </Route>  
     </Switch>
   
     

    
    </BrowserRouter>
  );
}

export default App;
