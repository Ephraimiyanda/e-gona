"use client"
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import { useState ,useContext} from "react";
import { AppContext } from "@/utils/AppContext";
import cart from "../public/cart.svg";
interface card {
  src: string;
  index: number;
  price: string;
  saleScale: string;
  title: string;
  item:any;
  count:number
}
export default function ProductCard({
  item,
  src,
  index,
  title,
  saleScale,
  price,
  count
}: card) {
  const [localCount, setLocalCount] = useState(count);
  const {addToCart} =useContext(AppContext)

  const increament = () => {
    if(localCount<10){
    setLocalCount(localCount + 1);
  };
}
  const decreament = () => {
    if(localCount>0){
        setLocalCount(localCount - 1);
    }
  };
  return (
    <Card
      shadow="md"
      key={index}
      className="shadow-sm rounded-md w-full sm:w-[230px] p-0 bg-white mx-auto" style={{
        padding:"0px"
      }}
    >
      <CardBody className="p-0 max-w-[unset] w-full" style={{
        maxWidth:"unset"
        
      }}>
        <Image removeWrapper src={src} className="w-full m-auto  h-[200px] object-cover max-w-[unset]" alt="img"  />
        <CardFooter className="text-small justify-between flex flex-col gap-3 w-full p-0 pt-2">
          <div className="px-2 w-full">
            <div className="flex justify-between">
              <b>{title}</b>
              <div className="flex justify-center gap-1 items-center">
                <Button className="w-[25px] h-[25px]  p-1" onClick={decreament}>
                  -
                </Button>
                <span>{localCount}</span>
                <Button className="w-[25px] h-[25px]  p-1" onClick={increament}>
                  +
                </Button>
              </div>
            </div>
            <div className="flex justify-between">
              <p>price(per {saleScale}):</p>
              <p className="text-default-500">₦{price}</p>
            </div>
          </div>
          <Button className="flex gap-2 w-full bg-[#38B419] text-white py-2" onClick={()=>{addToCart(item,localCount)}}>
            <Image src="cart copy.svg" />
            <span>Add to cart</span>
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
