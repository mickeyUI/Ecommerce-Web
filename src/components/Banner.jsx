function Banner({
    itemNumber,
    heading,
    img,
    description
}) {
    return (
        <div className=" bg-yellow-700 h-60 w-[1100px] rounded-2xl flex shadow-2xl shadow-indigo-500/30" key={itemNumber}>
            {/* image things */}
            <div className=" h-60 rounded-l-2xl overflow-hidden [mask-image:linear-gradient(to_left,transparent,black_20%)]">
                <img src={img} alt="img" className="h-60"/>
            </div>
            {/* headlines */}
            <div className="flex flex-col gap-5 p-6 ">
                <h1 className="text-5xl font-bold">{heading}</h1>
                <p className="font-semibold text-[20px]">{description}</p>
            </div>
            <div className="flex justify-center items-center w-auto h-auto pr-5">
            <button className="bg-slate-800 h-fit p-3 pl-3 pr-3 rounded-2xl w-28 ">shop Now</button>
            </div>
        </div>
    )
}

export default Banner;