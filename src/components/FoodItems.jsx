import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItems = () => {
    const handleToast = (name) => toast.success(`Added ${name}`);
    const selectedCategory = useSelector((store) => store.category.category);
    const search = useSelector((store) => store.search.search)

    return (
        <>
            <div className="mx-6 flex flex-wrap justify-center gap-10 my-10">
                {
                    FoodData.filter((food) => {
                        if (selectedCategory === 'All') {
                            return food.name.toLowerCase().includes(search.toLowerCase());
                        }
                        return food.category === selectedCategory && food.name.toLowerCase().includes(search.toLowerCase());
                    }).map((food) => {
                        return <FoodCard key={food.id} data={food} handleToast={handleToast} />
                    })
                }
            </div>
        </>
    )
}

export default FoodItems
