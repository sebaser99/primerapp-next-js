'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { useEffect } from "react";
import { initCounterState } from "@/store/counter/counterSlice";
import { IoCartOutline } from "react-icons/io5";


export const WidgetGrid = () => {
    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(initCounterState(count))
    }, [dispatch, count])

  return (
    <div className="flex flex-wrap p-2 mt-3">
        <SimpleWidget label="Contador" icon={<IoCartOutline className='text-blue-500' size={50} />} title={`${count}`} href="counter" subTitle="Carrito de Compras"  />
    </div>
  )
}
