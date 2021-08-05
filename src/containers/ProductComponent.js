import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function ProductComponent({posts}) {
    // const products = useSelector(state => state.allProducts.products)
    const products=posts
     const dispatch = useDispatch()

   
    const renderList = products.map((product,index) => {
        const {title,id,image,price} = product;
        const quantity = 1;
        return (
            <div className="col-md-3 col-sm-6 col-xs-1 my-3 " key={index}>
            {/* <Link to={`product/${id}`} className="card p-2 h-100 "> */}
            <div className="card p-2 h-100 ">
            <div style={{width:120}} className="h-100 mx-auto d-flex justify-content-center align-items-center">
            <img src={image} className="img-fluid" alt={image}/>
            </div>
            <div className="card-body ">
                <h6 className="card-title ">{title}</h6>
                <p className="card-subtitle mb-2 text-muted">{price} $</p>
                <button className="btn btn-primary" onClick={()=> dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}>Add to card</button>
            </div> 
            {/* </Link> */}
            </div>
            </div>   
        )
    })




    return (
        <>{renderList}</>
    )
}

export default ProductComponent
