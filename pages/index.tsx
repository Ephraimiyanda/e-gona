import dairy from "../public/dairy.svg"
import legumes from "../public/leghumes.svg"
import Tubers from "../public/tubers.svg"
import grains from "../public/grains.svg"
import livestock from "../public/livestock.svg"
import vegetable from "../public/vegetables.svg"
import fertilizer from "../public/fertilizers.svg"
import bagpic from "../public/Cloth sack on white.svg"
import Image from "next/image"
import { Button } from "@nextui-org/react"
export default function Home(){
    return(
        <div className="pt-10">
        <div className="max-w-[1280px] m-auto px-6 flex gap-3">
            <div>
                <div className="px-6 py-3 flex flex-col gap-4 border-black border rounded-md w-full max-w-[200px]">
                    <div className="flex gap-2 justify-start items-center">
                        <Image src={dairy} width={20} height={20} alt=""></Image>
                        <span>Dairy products</span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <Image src={legumes} width={20} height={20} alt=""></Image>
                        <span>Legumes</span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <Image src={Tubers} width={20} height={20} alt=""></Image>
                        <span>Tubers</span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <Image src={grains} width={20} height={20} alt=""></Image>
                        <span>Grains</span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <Image src={livestock} width={20} height={20} alt=""></Image>
                        <span>Livestock</span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <Image src={vegetable} width={20} height={20} alt=""></Image>
                        <span>Vegetables</span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <Image src={fertilizer} width={20} height={20} alt=""></Image>
                        <span>Fertilizers</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="flex justify-between w-[84%] bg-[#3E382E] rounded-md pl-6 pr-16 z-[2] relative backdrop-blur-sm">
                <div className="flex flex-col gap-3 pl-5 py-3">
                <div>
                    <span className="text-[#38B419]">Categories</span>
                    <h1 className="text-3xl font-semibold text-white ">Enhance Your <span className="text-[#38B419]">Plant</span> <br />
                    Growth Experience
                    </h1>
                    <p className="text-[#38B419]">The Best Fertilizer Nature Can Offer</p>
                </div>
                <div className="flex gap-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Button className="bg-[#38B419] w-[100px] py-3 px-3 text-xs text-white">Buy Now!</Button>
                </div>
                <Image
                src={bagpic}
                width={100}
                height={100}
                alt="sack cloth"
                className="relative z-0 blur-sm"
                />
            </div>
        </div>
        </div>
    )
}