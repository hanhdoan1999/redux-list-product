import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent'
import axios from 'axios';
import { setProducts } from '../redux/actions/productsActions'
import Header from './Header';
import Pagination from './Pagination';
import { useState } from 'react';

function ProductListing() {
    const products = useSelector(state => state.allProducts.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const dispatch = useDispatch();
    const fetchProduct = async () => {
        const res = await axios.get("https://fakestoreapi.com/products").catch((err) => console.log('ERROR', err))
        dispatch(setProducts(res.data))

    }

    useEffect(() => {
        fetchProduct()
    }, [])

      // Get current products
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                            <ProductComponent posts={currentPosts} />
                        </div>
                    </div>
                    <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={products.length}
                    paginate={paginate}
                    
                    />
                </div>
            }
        </>
    )
}

export default ProductListing
