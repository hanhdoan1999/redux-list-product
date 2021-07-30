import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productsActions';
import { useSelector,useDispatch } from 'react-redux';


function ProductDetail() {

    const product = useSelector(state => state.product)
    const {title,image,description,category,price} = product
    const dispatch = useDispatch()
    const {productId} =useParams();

    

    const fetchProductDetail = async() => {
        const res = await axios.get('https://fakestoreapi.com/products/' + productId).catch((err) => console.log('Error', err));
        dispatch(selectedProduct(res.data))
    }

    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div>
            {Object.keys(product).length === 0 
            ? 
            <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span> 
            </div>
            <div className="mt-2 fw-bold">Loading...</div>
            </div>
            : 
            <>
            <div className="res vh-100 position-relative d-flex justify-content-center align-items-center">
                <div className="res res- p-3 mx-5 bg-white position-absolute d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                          <img src={image} alt={image} className="rounded mx-auto d-block" style={{width:'50%'}}  />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="p-3">
                            <h3 className="fw-bold">{title}</h3>
                            <p className="my-3">{description}</p>
                            <h2 className="fw-bold">{price} $</h2>
                            <div className="my-3">
                            Tags: <span class="badge bg-secondary">{category}</span>
                            </div>
                            <button className="btn btn-primary">Add to card</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
            }
        </div>
    )
}

export default ProductDetail
