import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({ data, handleToast }) => {
    const { img, name, price, desc, rating } = data;
    const dispatch = useDispatch();
    return (
        <div className="font-semibold w-[250px] p-5 bg-white flex flex-col gap-2 rounded-lg">
            <img src={img}
                alt=""
                className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out ' />
            <div className="flex justify-between">
                <h2>{name}</h2>
                <span className="text-green-500">₹{price}</span>
            </div>
            <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
            <div className="flex justify-between">
                <span className="flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-400" /> {rating}
                </span>
                <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm" onClick={() => {
                    dispatch(addToCart({ qty: 1, ...data }))
                    handleToast(name);
                }}>Add to cart</button>
            </div>
        </div>
    )
}

export default FoodCard
