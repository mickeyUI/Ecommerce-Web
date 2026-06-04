import {ShoppingBagIcon} from 'lucide-react'; 
function Cart() {
    const active = false
    return (
        
        <div className="  bg-yellow-600  flex gap-4 px-5 py-3 rounded-2xl shadow-2xl shadow-black">
            <ShoppingBagIcon className='font-bold '/>
            <h1 className='font-bold text-2xl'>Cart</h1>
            <div className='bg-red-700 rounded-2xl px-3 p-1 absolute -top-3 -right-3'>1</div>
        </div>
    )
}

export default Cart;