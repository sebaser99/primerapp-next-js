'use client';

import { useState } from "react";

interface Props {
    initialValue?: number
}

export const CartCounter = ({initialValue = 0}:Props) => {
    const [counter, setCounter] = useState(initialValue);

    const handleCounter = (value: number)=> {
        if(counter === 0 && value < 0) return;
        setCounter(prev => prev + value)
    }
  return (
    <>
        <span className='text-9xl'>{counter}</span>
        <div className="flex ">
            <button
             onClick={()=>handleCounter(-1)}
            className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
            >-1</button>
            <button
            onClick={()=>handleCounter(1)}
            className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
            >+1</button>
        </div>
    </>
  )
}
