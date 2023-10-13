import { Button,Image } from "@nextui-org/react"
import { useState,useContext } from "react";
import { AppContext } from "@/utils/AppContext";
interface cartItem {
    img: string;
    index: number;
    price: string;
    saleScale: string;
    title: string;
    seller:string;
    quantity:number
  }

export default function Cartitem({img,index,title,saleScale,seller,price,quantity}:cartItem){
    const [count, setCount] = useState(quantity);
    const {removeFromCart,increaseQuantity,decreaseQuantity} =useContext(AppContext)
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
    const increaseCountQuantity = () => {
      // Pass the index of the item to update its quantity
      increaseQuantity(index);
    };
    const decreaseCountQuantity = () => {
      // Pass the index of the item to update its quantity
      decreaseQuantity(index);
    };
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
          <div className="flex flex-col gap-3">
            <p className="text-center">₦{price}</p>
            <div className="flex justify-center gap-1 text-white items-center">
              <Button
                className="w-[25px] h-[25px] p-1 bg-[#A46E0580]"
                onClick={()=>{
                  decreaseCountQuantity()
                  decreament()
                }}
              >
                -
              </Button>
              <span className="text-black">{count}</span>
              <Button
                className="w-[25px] h-[25px] p-1 bg-[#A46E05]"
                onClick={()=>{
                  increaseCountQuantity()
                  increament()
                }}
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