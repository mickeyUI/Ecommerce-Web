import {useState, useEffect} from 'react'
import Banner from './Banner'
import ProductCard from './ProductCard'
import Products from '../products/products.json'
import BannerItems from '../products/BannerItems.json'
import {ArrowRight, ArrowLeft, Search, ShoppingBagIcon} from 'lucide-react'
import Cart from './Cart'
import { useCart } from './Context';
function Home() {
    const {cart} = useCart();

    const [bannerItem, setBannerItem] = useState({});
    const [itemNumb, setItemNumb] = useState(1);
    const [activeCart, setActiveCart] = useState(false);

    const nextItem = () => {
            setItemNumb(prev => {
                return prev < BannerItems.length? prev + 1: 1;
            });
        
    }
     const privItem = () => {
         setItemNumb(prev => {
                return prev > 1? prev + 1: BannerItems.length;
            });
    }
    useEffect(() => {
  const interval = setInterval(() => {
    nextItem();
  }, 10000);
  return () => clearInterval(interval);
}, []);

    useEffect(() => {
        setBannerItem(BannerItems.find(item => item?.number == itemNumb));
    }, [itemNumb]);

    useEffect(() => {
        if (!activeCart) return;

        const timer = setTimeout(() => {
            setActiveCart(false);
        }, 10000);
        return () => clearTimeout(timer);
      
    }, [activeCart, cart.length]);
    return (
        <div className="flex flex-col p-5">
            {/* banner controls plus the actual banner */}
            <div className='flex w-full justify-center rounded-2xl gap-5'>
                <div className='flex justify-center items-center'>
            <ArrowLeft 
            onClick={privItem}
            className='bg-white/30 rounded-2xl p-3 w-14 h-14 shadow-2xl hover:bg-white/50'/>
                </div>
             {
                <Banner
                itemNumber={bannerItem.number}
                heading={bannerItem.heading}
                img={bannerItem.image}
                description={bannerItem.description}/>
            } 
            <div className='flex justify-center items-center'>
                <ArrowRight
                onClick={nextItem} 
                className='bg-white/30 rounded-2xl p-3 w-14 h-14 shadow-2xl hover:bg-white/50'/>
            </div>
            </div>

        {/* filtering and searching section */}
            <div className='grid grid-cols-2 w-full  justify-around px-10 py-5 '>
                {/* filtering */}
                <div className='flex gap-2 '>
                    <h1 className='text-white text-2xl '>Filter</h1>
                <select name="Category " className='bg-secondary border-2 rounded-2xl p-1 pr-2 pl-2 focus:rounded-2xl focus-outline-none' >
                    <option value="All">None</option>
                    <option value="">Electronics</option>
                    <option value="">Cloth</option>
                </select>
                <select name="Price " className='bg-secondary border-2 rounded-2xl p-1 pr-2 pl-2 focus:rounded-2xl focus-outline-none' >
                    <option value="All">All Price</option>
                    <option value="">200birr-500birr</option>
                    <option value="">500birr-1,000birr</option>
                </select>
                </div>
                {/* search */}
                <div className='flex gap-2'>
                <input className=' rounded-2xl w-64 focus:w-full transition-input text-white/90 bg-white/30 border-white border-2 pl-2' type="text" />
                <button className='hover:bg-white/20 rounded-2xl'>
                    <Search className='text-white h-6 w-6 m-2'/>
                </button>
                </div>
            </div>

            <main className=' w-full grid grid-cols-4 gap-5 '>
                {Products.map((product) => {
                    return(
                    <ProductCard 
                    key={product.id}
                    idx={product.id}
                    image={product.image}
                    name={product.name}
                    discription={product.description}
                    price={product.price}
                    category={product.category}
                    />)
                })}
                <div className='flex justify-end col-start-4 sticky-div transition-transform duration-1000 ease-in-out transform'>
                {activeCart? <Cart/>
            :<div onClick={() => {setActiveCart(true)}} className="  bg-yellow-600  flex gap-4 px-5 py-3 rounded-2xl shadow-2xl shadow-black">
            <ShoppingBagIcon className='font-bold '/>
            <h1 className='font-bold text-2xl'>Cart</h1>
            {cart.length > 0 &&
            <div className='bg-red-700 rounded-2xl px-3 p-1 absolute -top-3 -right-3'>{cart.length}</div>
            }
        </div>}
                
                </div>
            </main>
        </div>
    )
}

export default Home;