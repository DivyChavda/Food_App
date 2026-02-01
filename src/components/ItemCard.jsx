import React from 'react'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, removeCart } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const ItemCard = ({ cartItem }) => {
    const { id, img, name, price, qty } = cartItem;
    const dispatch = useDispatch();
    return (
        <div className="flex gap-2 shadow-md rounded-lg p-1">
            <div>
                <img src={img}
                    alt=""
                    className="w-[60px] h-[50px]" />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                    <h2 className="text-xs text-gray-700 font-bold">{name}</h2>
                    <MdDelete className="text-xl text-gray-800 cursor-pointer hover:text-red-500 transition-all ease-in-out"
                        onClick={() => {
                            dispatch(removeCart({ id }))
                            toast(`${name} Removed!`, {
                                icon: '👋',
                            });
                        }} />
                </div>
                <div className="flex justify-between">
                    <div className="text-green-500 font-semibold">
                        ₹{price}
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiSquareMinus className="text-2xl hover:bg-green-500 hover:text-white rounded-md cursor-pointer transition-all ease-linear" onClick={() => {
                            qty > 1 ?
                                dispatch(decrementQty({ id }))
                                :
                                dispatch(removeCart({ id }))
                        }} />
                        <span className="text-green-500">{qty}</span>
                        <CiSquarePlus className="text-2xl hover:bg-green-500 hover:text-white rounded-md cursor-pointer transition-all ease-linear" onClick={() => {
                            dispatch(incrementQty({ id }))
                        }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemCard
