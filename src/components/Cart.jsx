import {ShoppingBagIcon, BrushCleaningIcon, PlusIcon, MinusIcon} from 'lucide-react'; 
import {useCart} from './Context'
function Cart() {
    const {cart, addToCart, totalItems} = useCart();
    console.log(totalItems);
    const active = false

    return (
        <div className="flex flex-col gap-2 w-80  bg-yellow-700  rounded-2xl shadow-lg shadow-black p-3 py-5">
            <div className='flex justify-between gap-5 px-5'>
                <div className='flex gap-2'>
            <ShoppingBagIcon className='font-bold '/>
            <h1 className='font-bold text-2xl'>Cart</h1>
                </div>
            <BrushCleaningIcon className='rounded-2xl h-9' />
            </div>
            <div className='items-list flex flex-col gap-2'>
                {cart?.length > 0 ? cart.map(item => (
                    <div key={item.id} className='bg-white/20 flex gap-1 p-2 rounded-2xl justify-between shadow-2xl shadow-black'>
                <div>
                    <h1 className='font-bold'>{item.name}</h1>
                    <h2 className='font-bold '>{item.price}</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-white/30 flex rounded-2xl p-1 gap-1 shadow-2xl shadow-black'>
                        <MinusIcon  className='bg-white/50 rounded-l-2xl'/>
                        <h1>{item.quantity}</h1>
                        <PlusIcon className='bg-white/50 rounded-r-2xl'/>
                    </div>
                </div>
                </div>
                )): <h1>none</h1>}
                
            </div>
            <button className='bg-green-500 rounded-2xl p-2 w-full shadow-2xl shadow-black '>BUY</button>
        </div>
    )
}

export default Cart;