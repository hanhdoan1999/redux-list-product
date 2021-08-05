
const initialState = {
    products:[],
    totalPrice:0,
    totalQuantities:0,
}

export const cartReducer = (state=initialState,action) =>{
    let findPro;
    let index;
   switch (action.type) {
    case 'ADD_TO_CART':
        const {product, quantity} = action.payload;
        const check = state.products.find(el => el.id ===product.id)
        if(check) {
            return state;
        }else {
            const tPrice = state.totalPrice +product.price * quantity;
            const tQuantity = state.totalQuantities + quantity;
            product.quantity = quantity;
            return {
                ...state,products:[...state.products,product],totalPrice:tPrice,totalQuantities:tQuantity
            }
        }
        case 'INC':
            findPro = state.products.find(product => product.id === action.payload);
            // index = state.products.findIndex(product => product.id === action.payload);
            // findPro.quantity += 1;
            // state.products[index] = findPro;
            return {
                ...state,
                products: state.products.map(p => p.id === action.payload ? {...p,quantity:p.quantity+1}: p),
                totalPrice: state.totalPrice + findPro.price, totalQuantities: state.totalQuantities+1
            }
          case "DES":
          findPro = state.products.find(product => product.id === action.payload);
        //   index = state.products.findIndex(product => product.id === action.payload);
          if(findPro.quantity > 1){
            //  findPro.quantity -= 1;
            //  state.products[index] = findPro;
             return {
                 ...state,
                 products: state.products.map(p => p.id === action.payload ? {...p,quantity:p.quantity-1}: p),
                 totalPrice: state.totalPrice - findPro.price, totalQuantities: state.totalQuantities - 1
             }
          } else {
              return state;
          }
          case 'REMOVE':
          findPro = state.products.find(product => product.id === action.payload);
          const filtered = state.products.filter(product => product.id !== action.payload);
          return {
              ...state,
              products: filtered,
              totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
          }
          default: 
          return state;
      }
}