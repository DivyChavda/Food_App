import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const selectedCategory = useSelector((store) => store.category.category);
    const [categorySelected, setCategorySelected] = useState(selectedCategory);
    useEffect(() => {
        const listUniqueCategory = () => {
            const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
            setCategories(uniqueCategories)
        }
        listUniqueCategory();
    }, [])


    return (
        <div className='mx-6'>
            <h3 className="text-xl font-semibold">Find the best food</h3>
            <div className="flex overflow-x-scroll lg:overflow-x-hidden gap-2 my-3">
                <button
                    onClick={() => {
                        dispatch(setCategory('All'))
                        setCategorySelected('All')
                    }}
                    className={`px-3 py-2 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${categorySelected === 'All' && "bg-green-500 text-white"}`}>All</button>
                {
                    categories.map((category, index) => {
                        return <button
                            onClick={() => {
                                dispatch(setCategory(category))
                                setCategorySelected(category)
                            }}
                            key={index} className={`px-3 py-2 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${categorySelected === category && "bg-green-500 text-white"}`}>{category}</button>
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu
