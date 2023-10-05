import { Button,Image } from "@nextui-org/react"
import { useState,useContext } from "react";
import { AppContext } from "@/utils/AppContext";
interface cartItem {
    img: string;
    index: number;
    price: string;
    saleScale: string;
    title: string;
    seller:string
  }

export default function Cartitem({img,index,title,saleScale,seller,price}:cartItem){
    const [count, setCount] = useState(0);
    const {cartItems,list,removeFromCart} =useContext(AppContext)
    const increament = () => {
      setCount(count + 1);
    };
    const decreament = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
   function deleteFromCart(index:number){
      removeFromCart(index)
    }

  
    return(
        <div className="cartItem w-full flex gap-2 " key={index}>
        <Image
          removeWrapper
          className="w-[150px] h-[120px] object-cover max-w-[150px]"
          src={img}
          alt="logo"
          width={100}
          height={100}
        />
        <div className="goods flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">
              A {saleScale} of {title}
            </p>
            <div className="flex gap-1">
              <span className="text-stone-600">seller:</span>
              <p className="font-semibold">{seller}</p>
            </div>
            <span className="text-stone-600">In stock</span>
          </div>
          <div className="flex flex-col">
            <p className="text-center">{price}</p>
            <div className="flex justify-center gap-1 text-white items-center">
              <Button
                className="w-[25px] h-[25px] p-1 bg-[#A46E0580]"
                onClick={decreament}
              >
                -
              </Button>
              <span className="text-black">{count}</span>
              <Button
                className="w-[25px] h-[25px] p-1 bg-[#A46E05]"
                onClick={increament}
              >
                +
              </Button>
            </div>
            <Button onClick={()=>{deleteFromCart(index)}} className="p-2 bg-[#A46E05BD] text-white rounded-md mt-auto">Remove Item</Button>
          </div>
        </div>
      </div>
    )
}