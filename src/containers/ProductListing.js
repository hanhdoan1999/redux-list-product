import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent'
import axios from 'axios';
import { setProducts } from '../redux/actions/productsActions'
import Header from './Header';

function ProductListing() {
    const products = useSelector(state => state.allProducts.products)

    const dispatch = useDispatch();
    const fetchProduct = async () => {
        const res = await axios.get("https://fakestoreapi.com/products").catch((err) => console.log('ERROR', err))
        dispatch(setProducts(res.data))

    }

    useEffect(() => {
        fetchProduct()
    }, [])


    return (
        <>
            {products.length === 0
                ?
                <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className="container">
                    <Header />
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="row">
                            <ProductComponent />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductListing
