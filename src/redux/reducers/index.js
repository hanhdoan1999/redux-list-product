import { combineReducers } from "redux"
import { productReducer, selectedProductReducer} from "./productsReducer";
import {cartReducer} from './cartReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartReducer,
})

export default reducers