import { useContext, useState } from "react";
import { AppContext } from "@/utils/AppContext";
import cart from "/public/cart.svg";
import { Image, Button } from "@nextui-org/react";
import ProductCard from "@/components/productCard";
import Cartitem from "@/components/cartItem";
export default function Cart() {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const { cartItems, list } = useContext(AppContext);
  console.log(cartItems.length);
  return (
    <div className="pt-6">
      <div className="flex max-w-[1280px] mx-auto px-6 gap-3 md:flex-row flex-col">
        <div
          className={`${
            cartItems.length < 3 && "h-[55vh]"
          } w-full h-full flex flex-col gap-3 bg-white p-4`}
        >
          <h1 className="border-b border-b-black text-3xl font-semibold">
            Cart({cartItems.length})
          </h1>
          {cartItems.length > 0 ? (
            cartItems.map((items: any, index: number) => (
            <Cartitem img={items.img} index={index} price={items.price} saleScale={items.saleScale} title={items.title} seller={items.seller}/>
            ))
          ) : (
            <div className="h-[50vh] gap-2 flex justify-center items-center w-full">
              <p>you have no items in your cart</p>
              <Image src="cart.svg" alt="logo" width={20} height={20} />
            </div>
          )}
        </div>

        <div className="lg:w-[30%] h-[180px] bg-white">
            <div className="flex flex-col gap-2 px-3 bg-white py-3">
                <h2 className="border-b border-b-black text-xl font-semibold">Cart Summary</h2>
                <div className="flex justify-between">
                    <div className="flex flex-col"> 
                        <span className="font-bold text-md">Subtotal</span>
                        <p  className="text-stone-600">Delivery not included yet</p>
                    </div>
                    <span>₦10,000</span>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1280px] mx-auto  py-10 gap-2">
        <span className="text-[27px] font-semibold px-6">
          {" "}
          Most Searched Product
        </span>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto ">
          {list.slice(1, 6).map(
            (
              items: {
                img: string;
                price: string;
                saleScale: string;
                title: string;
              },
              index: number
            ) => (
              <ProductCard
                item={items}
                key={index}
                src={items.img}
                index={index}
                price={items.price}
                saleScale={items.saleScale}
                title={items.title}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
