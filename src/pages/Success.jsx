import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners'

const Success = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {
                loading ? <PropagateLoader color="#297561" /> :
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-3xl font-semibold text-center">Order Successful!</h2>
                        <p>Your Order has been successfully placed</p>
                        <button className="text-xl bg-green-500 w-[100px] rounded-lg text-white cursor-pointer" onClick={() => {
                            navigate('/');
                        }}>Home</button>
                    </div>
            }
        </div>
    )
}

export default Success
