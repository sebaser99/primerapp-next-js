import { CartCounter } from "@/app/shopping-cart/components/CartCounter"
import { title } from "process"


export const metadata = {
    title: 'Shopping Cart',
    description: 'Contador Shopping Cart'
}
export default function CounterPage (){
 
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
        <span>Productos en el carrito de compras</span>
        <CartCounter initialValue={20} />
    </div>
  )
}
