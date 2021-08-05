import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const products = useSelector(state => state.cartReducer.products)
    const totalItem = useSelector(state => state.cartReducer.totalQuantities)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)



    const dispatch = useDispatch();

    return (
        <>
        {products.length === 0 
        ? 
        <div className="fw-bold fs-4 vh-100 d-flex justify-content-center align-items-center">No Item</div>
        :
        <div className="p-5 vh-100">
            <div className=" p-3 bg-white rounded-3 overflow-auto">
                <h3 className="mb-3">Your cart</h3>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Img</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Inc/Des</th>
                                <th scope="col">TotalPrice</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product,index) => 
                            <tr key={index}>
                                <td><img src={product.image} alt={product.image} width="50"/></td>
                                <td>{product.title}</td>
                                <td>{product.price} $</td>
                                <td>
                                    <div>
                                        <span className="cursor p-2 border border-dark"  onClick={()=> dispatch({type:'DES',payload:product.id})}>-</span>
                                        <span className="border border-dark p-2">{product.quantity}</span>
                                        <span className="cursor p-2 border border-dark" onClick={()=> dispatch({type:'INC',payload:product.id})}>+</span>
                                    </div>
                                </td>
                                <td>{product.price * product.quantity} $</td>
                                <td onClick={()=>dispatch({type:'REMOVE',payload:product.id})} style={{cursor:'pointer'}}>X</td>
                            </tr>
                            )}

                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <p>Check out</p>
                        <div>Total Item : <span>{totalItem}</span></div>
                        <div>Total price : <span>{Math.round(totalPrice * 100)/100} $</span></div>
                        <button className="btn d-block w-100 btn-primary mt-5">Check Out</button>
                    </div>
                    
                </div>
            </div>
        </div>
                            }
                            </>
    )
    
}

export default Cart
