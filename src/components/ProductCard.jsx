
function ProductCard({
    idx,
    image,
    name,
    discription,
    price,
    category
}) {
    return (
        <div key={idx} className="flex flex-col shadow-2xl bg-primary shadow-2xl shadow-black rounded-2xl  w-auto hover:shadow-white/10 transition-transform duration-500 ease-in-out transform  hover:-translate-y-2" >
            <div className=" w-auto h-52 m-3 shadow-md overflow-hidden rounded-2xl bg-primary">
                <img src={image} alt="image"  className=" w-auto"/>
            </div>
            {/* descriptions */}
            <div className="flex flex-col gap-2 p-4 bg-ternary rounded-b-2xl">
                <div className="border  bg-primary w-fit ml-1 rounded-2xl pl-2 pr-2 p-0.5">{category}</div>
                <h1 className="text-2xl">{name}</h1>
                <p className="text-sm text-gray-400">{discription}</p>
                
                <div className="flex justify-between">
                <p className="text-2xl text-orange-400">{price} Birr</p>
                <button className="bg-[#f08700] rounded-2xl p-2 pr-4 pl-4">Add to cart</button>
                </div>
             
            </div>
        </div>
    )
}
export default ProductCard;