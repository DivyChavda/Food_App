import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <CategoryMenu />
            <FoodItems />
            <Cart />
        </>
    )
}

export default Home
