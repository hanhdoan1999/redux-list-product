import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function ProductComponent() {
    const products = useSelector(state => state.allProducts.products)

   
    const renderList = products.map(product => {
        const {title,id,image,price} = product;
        return (
            <div className="col-md-3 col-sm-6 col-xs-1 my-3 ">
            <Link to={`product/${id}`} className="card p-2 h-100 ">
            <div style={{width:120}} className="h-100 mx-auto d-flex justify-content-center align-items-center">
            <img src={image} className="img-fluid" alt={image}/>
            </div>
            <div className="card-body ">
                <h6 className="card-title ">{title}</h6>
                <p className="card-subtitle mb-2 text-muted">{price} $</p>
                <button className="btn btn-primary">Add to card</button>
            </div> 
            </Link>
            </div>   
        )
    })




    return (
        <>{renderList}</>
    )
}

export default ProductComponent
