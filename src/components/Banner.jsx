import {useState, useEffect, useRef} from 'react';
import { getColorSync } from "colorthief";

function Banner({
    itemNumber,
    heading,
    img,
    description
}) {
     const imgRef = useRef(null);
  const [bg, setBg] = useState("rgb(0, 0, 0)");

  useEffect(() => {
    const imgEl = imgRef.current;
    if (!imgEl) return;

    const updateColor = () => {
      try {
        const rgb = getColorSync(imgEl);
        if (!rgb) return;
        const [r, g, b] = rgb;
        setBg(`rgb(${r}, ${g}, ${b})`);
      } catch (error) {
        console.warn("Could not extract banner color:", error);
      }
    };

    imgEl.addEventListener("load", updateColor);
    if (imgEl.complete && imgEl.naturalWidth) {
      updateColor();
    }

    return () => {
      imgEl.removeEventListener("load", updateColor);
    };
  }, [img]);

    return (
        <div className=" bg-blue-950/20 shadow-2xl shadow-white/20 h-60 w-[1100px] rounded-2xl flex" key={itemNumber}>
            {/* image things */}
            <div className=" h-60 rounded-l-2xl overflow-hidden [mask-image:linear-gradient(to_left,transparent,black_20%)]">
                <img src={img} ref={imgRef} crossOrigin="anonymous" alt="img" className="h-60"/>
            </div>
            {/* headlines */}
            <div className="flex flex-col gap-5 p-6 h-60 w-[500px]">
                <h1 className="text-5xl font-bold">{heading || "None"}</h1>
                <p className="font-semibold text-[20px]">{description || "...."}</p>
            </div>
            <div className="flex justify-center items-center w-auto h-auto pr-5">
            <button className="bg-slate-800 h-fit p-3 pl-3 pr-3 rounded-2xl w-28 ">shop Now</button>
            </div>
        </div>
    )
}

export default Banner;