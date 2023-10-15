import { useContext } from "react"
import { AppContext } from "@/utils/AppContext"
import ProductCard from "@/components/productCard";

export default function SavedItems(){
    const {savedItems,count} =useContext(AppContext)
    return (
        <div>
        <h1 className="px-6 py-2 text-xl font-semibold">SAVED ITEMS</h1>
        <div className=" grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto ">
        {savedItems.map((items: { img: string; price: string; saleScale: string; title: string; }, index: number) => (
          <ProductCard
            item={items}
            key={index}
            src={items.img}
            index={index}
            price={items.price}
            saleScale={items.saleScale}
            title={items.title}
            count={count}
          />
        ))}
        </div>
        </div>
    )
}