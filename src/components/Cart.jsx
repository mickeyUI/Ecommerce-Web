import {ShoppingBagIcon, BrushCleaningIcon, PlusIcon, MinusIcon} from 'lucide-react'; 
import {useCart} from './Context'
function Cart() {
    const {cart, total, addToCart, removeFromCart, clearCart, purchase} = useCart();
    const active = false

    return (
        <div className="flex flex-col gap-2 w-80  bg-yellow-700  rounded-2xl shadow-lg shadow-black p-3 py-5">
            <div className='flex justify-between items-center gap-5 px-5 pb-3 border-b-2 rounded-lg'>
                <div className='flex gap-2'>
            <ShoppingBagIcon className='font-bold '/>
            <h1 className='font-bold text-2xl'>Cart</h1>
                </div>
                <div className='bg-yellow-500/60 hover:bg-yellow-300/70 p-1 px-3 rounded-2xl'>

            <BrushCleaningIcon
            onClick={clearCart}
             className='rounded-2xl  h-9' />
                </div>
            </div>
            <div className='items-list  flex flex-col gap-2 max-h-72 overflow-auto custom-scrollbar '>
                {cart?.length > 0 ? cart.map(item => (
                    <div key={item.id} className=' flex gap-1 p-2 rounded-2xl justify-between shadow-2xl border-2'>
                <div>
                    <h1 className='font-bold'>{item.name}</h1>
                    <h2 className='font-bold '>{item.price}</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-white/30 flex rounded-2xl p-1 gap-1 shadow-2xl shadow-black'>
                        <MinusIcon
                        onClick={() => removeFromCart(item.id)}
                          className='bg-white/50 rounded-l-2xl hover:bg-black/10'/>
                        <h1>{item.quantity}</h1>
                        <PlusIcon 
                        onClick={() => addToCart(item.id)}
                        className='bg-white/50 rounded-r-2xl hover:bg-black/10'/>
                    </div>
                </div>
                </div>
                )): <h1>Empty cart. add products</h1>}
                
            </div>
            <div className="  h-10 rounded-2xl p-2 w-full border-t-2 ">Total: {total} Birr</div>
            <button className='bg-green-500 rounded-2xl p-2 w-full shadow-2xl shadow-black '>BUY</button>
        </div>
    )
}

export default Cart;