import React, { useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import ItemCard from './ItemCard'
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/slices/CartSlice'
import toast from 'react-hot-toast';

const Cart = () => {
    const [activeCart, setActiveCart] = useState(false);
    const cartItems = useSelector((store) => store.cart.cart);
    const totalQty = cartItems.reduce((acc, item) => {
        return acc + item.qty;
    }, 0)

    const totalAmount = cartItems.reduce((acc, item) => {
        return acc + item.price * item.qty;
    }, 0);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isButtonDisabled = totalQty === 0;
    return (
        <>
            <div className={`flex flex-col justify-between fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">My Order</span>
                        <FaRegWindowClose className="hover:text-red-400 text-xl" onClick={() => {
                            setActiveCart(!activeCart)
                        }} />
                    </div>
                    {
                        cartItems.length > 0 ?
                            cartItems.map((cartItem) => {
                                return <ItemCard key={cartItem.id} cartItem={cartItem} />
                            })
                            :
                            <h2 className="text-center font-semibold">Your Cart is empty</h2>
                    }
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
                    <h3 className="font-semibold text-gray-800">Total Amount : {totalAmount}</h3>
                    <hr className="my-2 text-gray-400" />
                    <button className="bg-green-500 w-full font-semibold px-3 py-2 text-white rounded-lg cursor-pointer"
                        onClick={() => {
                            if (isButtonDisabled) {
                                toast("Cart can`t be empty", {
                                    icon: '❌',
                                })
                            }
                            else {
                                dispatch(clearCart())
                                navigate("/success")
                            }
                        }}>Checkout</button>
                </div>
            </div>
            <FaCartShopping className={`${totalQty > 0 && "animate-bounce delay-500 transition-all"} rounded-full bg-white shadow-md p-3 text-5xl fixed bottom-5 right-2`} onClick={() => {
                setActiveCart(!activeCart)
            }} />
        </>
    )
}

export default Cart
