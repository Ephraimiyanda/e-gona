"use client";
import dairy from "../public/dairy.svg";
import legumes from "../public/leghumes.svg";
import Tubers from "../public/tubers.svg";
import grains from "../public/grains.svg";
import livestock from "../public/livestock.svg";
import vegetable from "../public/vegetables.svg";
import fertilizer from "../public/fertilizers.svg";
import fruitGrp from "../public/fruitgroup.svg";
import nairabag from "../public/sack-of-naira-removebg-preview 1.svg";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard";
import Flash from "../public/flash.svg";
import logo from "../public/logo.svg";
import { MailIcon } from "@/components/mailIcon";
import ioslogo from "../public/ios store.svg";
import googleplay from "../public/google play.svg";
import Footer from "@/components/footer";
interface card {
  src: string;
  index: number;
  price: string;
  saleScale: string;
  title: string;
}

export default function Home() {
  const date = new Date();
  const seconds = date.getSeconds();
  const hours = date.getHours();
  const days = date.getDay();
  const minutes = date.getMinutes();
  const list = [
    {
      title: "corn",
      saleScale: "kg",
      img: "corn.svg",
      price: "₦5.50",
    },
    {
      title: "Eggs",
      saleScale: "crate",
      img: "eggs.svg",
      price: "₦3.00",
    },
    {
      title: "Egpytian Sheep",
      saleScale: "sheep",
      img: "egyptian sheep.svg",
      price: "₦10.00",
    },
    {
      title: "Fertilizer",
      saleScale: "kg",
      img: "fertilizer.svg",
      price: "₦5.30",
    },
    {
      title: "milk",
      saleScale: "bottle",
      img: "milk.svg",
      price: "₦15.70",
    },
    {
      title: "potatoe",
      saleScale: "kg",
      img: "potatoe.svg",
      price: "₦8.00",
    },
    {
      title: "cattle",
      saleScale: "cattle",
      img: "cattle.svg",
      price: "₦7.50",
    },
    {
      title: "Fertilizer",
      saleScale: "kg",
      img: "fertilizer.svg",
      price: "₦5.30",
    },
    {
      title: "milk",
      saleScale: "bottle",
      img: "milk.svg",
      price: "₦15.70",
    },
    {
      title: "potatoe",
      saleScale: "kg",
      img: "potatoe.svg",
      price: "₦8.00",
    },
  ];

  return (
    <div className="mx-auto flex flex-col w-full">
        

        
      <div className=" m-auto flex-col flex gap-3 lg:flex-row sm:flex-col w-full pt-10 max-w-[1280px] px-6 py-10 ">
      <div className="flex lg:w-[70%] md:w-full gap-2">
        <div className="w-[50px] sm:w-[30%] border-black border rounded-md">
          <div className="px-2 sm:px-6  py-3 flex flex-col gap-4   max-w-[200px]">
            <div className="flex gap-2 justify-start items-center">
              <Image className="mx-auto sm:m-0" src={dairy} width={20} height={20} alt=""></Image>
              <span className="hidden sm:flex">Dairy products</span>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <Image className="mx-auto sm:m-0" src={legumes} width={20} height={20} alt=""></Image>
              <span className="hidden sm:flex">Legumes</span>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <Image className="mx-auto sm:m-0" src={Tubers} width={20} height={20} alt=""></Image>
              <span className="hidden sm:flex">Tubers</span>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <Image className="mx-auto sm:m-0" src={grains} width={20} height={20} alt=""></Image>
              <span className="hidden sm:flex">Grains</span>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <Image className="mx-auto sm:m-0" src={livestock} width={20} height={20} alt=""></Image>
              <span className="hidden sm:flex">Livestock</span>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <Image className="mx-auto sm:m-0" src={vegetable} width={20} height={20} alt=""></Image>
              <span className="hidden sm:flex">Vegetables</span>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <Image className="mx-auto sm:m-0" src={fertilizer} width={20} height={20} alt=""></Image>
              <span className="hidden sm:flex">Fertilizers</span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between w-[91%] bg-[#3E382E] rounded-md pl-2  z-[2] relative blend bg-no-repeat bg-blend-multiply ">
          <div className="flex flex-col gap-3 lg:pl-5 py-3">
            <div>
              <span className="text-[#38B419]">Categories</span>
              <h1 className="text-3xl font-semibold text-white ">
                Enhance Your <span className="text-[#38B419]">Plant</span>{" "}
                <br />
                Growth Experience
              </h1>
              <p className="text-[#38B419]">
                The Best Fertilizer Nature Can Offer
              </p>
            </div>
            <div className="flex gap-2 text-black flex-wrap sm:flex-nowrap">
              <div className="flex flex-col justify-center items-center bg-white rounded-full w-[52px] h-[52px] pb-[6px] leading-[16px]">
                <span suppressHydrationWarning className="font-semibold">
                  {hours}
                </span>
                <span className="text-[11px]">Hours</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white rounded-full w-[52px] h-[52px] pb-[6px] leading-[16px]">
                <span suppressHydrationWarning className="font-semibold">
                  {days}
                </span>
                <span className="text-[11px]">Days</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white rounded-full w-[52px] h-[52px] pb-[6px] leading-[16px]">
                <span suppressHydrationWarning className="font-semibold">
                  {minutes}
                </span>
                <span className="text-[11px]">Minutes</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white rounded-full w-[52px] h-[52px] pb-[6px] leading-[16px]">
                <span suppressHydrationWarning className="font-semibold">
                  {" "}
                  {seconds}
                </span>
                <span className="text-[11px]">Seconds</span>
              </div>
            </div>
            <Button className="bg-[#38B419] w-[100px] py-3 px-6  text-xs text-white">
              Buy Now!
            </Button>
          </div>
        </div>
        </div>
        <div className="flex flex-col lg:flex-col sm:flex-col md:flex-row gap-2 lg:w-[29%] md:w-full text-white">
          <div className="flex  bg-[#008837] rounded-md justify-between p-3 lg:h-[50%] w-full">
            <div className="flex-col flex">
              <span className="font-semibold text-xl">
                The safety of your Money I Guaranteed
              </span>
              <p className="text-sm">
                Money is released to seller after order has been confirmed as
                received.
              </p>
            </div>
            <Image src={nairabag} width={90} height={70} alt="" />
          </div>
          <div className="bg-[#A46E05] justify-between flex rounded-md p-3 lg:h-[50%] w-full">
            <div className="flex flex-col">
              <span className="font-semibold text-xl">
                Delivery to your doorstep
              </span>
              <p className="text-sm">Products are delivery to your door step</p>
            </div>
            <Image src={fruitGrp} width={90} height={70} alt="" />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto ">
        {list.map((items, index) => (
          <ProductCard
            src={items.img}
            index={index}
            price={items.price}
            saleScale={items.saleScale}
            title={items.title}
          />
        ))}
      </div>
      <div className="w-full bg-[#F20E0E]">
        <div className="max-w-[1280px] mx-auto  gap-8    flex justify-between text-white scroll-parent">
          <div className="flex text-2xl font-bold justify-center items-center py-2 scroll-element">
            <Image src={Flash} width={45} height={45} alt="flash" />
            <span className=" whitespace-nowrap">Flash Sales</span>
          </div>
          <div className="text-2xl flex justify-center items-center scroll-element">
            <p className="gap-2 flex">
              TimeLeft:
              <span suppressHydrationWarning className="font-semibold">
                {hours}h
              </span>
              <span suppressHydrationWarning className="font-semibold">
                {minutes}m
              </span>
              <span suppressHydrationWarning className="font-semibold">
                {seconds}s
              </span>
            </p>
          </div>

          <div className="justify-center items-center flex gap-2 text-2xl scroll-element">
            <p className=" whitespace-nowrap">See all</p>
            <span className=" mt-1 -rotate-90">∨</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto  ">
        {list.slice(3, 8).map((items, index) => (
          <ProductCard
            src={items.img}
            index={index}
            price={items.price}
            saleScale={items.saleScale}
            title={items.title}
          />
        ))}
      </div>
      <div className="flex flex-col w-full max-w-[1280px] mx-auto  py-10 gap-2">
        <span className="text-[27px] font-semibold px-6">
          {" "}
          Most Searched Product
        </span>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto ">
          {list.slice(1,6).map((items, index) => (
            <ProductCard
              src={items.img}
              index={index}
              price={items.price}
              saleScale={items.saleScale}
              title={items.title}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#313133]">
        <div className=" max-w-[1280px] px-6  mx-auto flex flex-col gap-4 md:flex-row justify-between md:h-[260px] py-8 pt-14">
          <div className="flex justify-start items-start h-full">
            <Image src={logo} alt="logo" width={35} height={45} />
            <p className=" md:flex text-3xl font-bold text-[#A46E05] ">
              KASUWA
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:m-0 ">
            <span className="text-xl text-white font-semibold">
              NEW TO KASUWA
            </span>
            <p className="text-white">
              Suscribe to our newsletter and get notified about offers
            </p>
            <div className="flex gap-1 max-w-[400px]">
              <Input
                startContent={<MailIcon />}
                className="text-black py-2 rounded-md bg-white"
                placeholder="Enter your email address"
              />
              <Button className="text-white text-sm bg-[#A46E05BD] rounded-md py-2 px-4">
                Suscribe
              </Button>
            </div>
          </div>
          <div className="flex gap-2 items-start justify-start md:justify-center">
            <Image src={logo} alt="logo" width={35} height={45} className="" />
            <div className="flex flex-col gap-2">
              <p className="text-xl text-white font-semibold">
                DOWNLOAD KASUWA MOBILE APP FOR FREE!
              </p>
              <p className="text-white">Get Access to our exclusive offers</p>
              <div className="flex sm:flex-row flex-col gap-2">
                <div className="border border-white rounded-[10px] w-[200px]  ">
                  <Button
                  className="w-full"
                    startContent={
                      <Image
                        src={ioslogo}
                        width={40}
                        height={40}
                        alt="ios"
                        className="pl-2 w-[50px]"
                      />
                    }
                  >
                    <p className="flex flex-col leading-[13px] p-2 h-full w-full text-white">
                      <span className="text-[14px] font-light text-left">
                        Download on the
                      </span>
                      <span className="text-lg text-left font-semibold">
                        App Store
                      </span>
                    </p>
                  </Button>
                </div>
                <div className="border border-white rounded-[10px] w-[200px] ">
                  <Button
                  className="w-full"
                    startContent={
                      <Image
                        src={googleplay}
                        width={40}
                        height={40}
                        alt="ios"
                        className="pl-2 w-[50px]"
                      />
                    }
                  >
                    <p className="flex flex-col leading-[13px] p-2 h-full w-full text-white">
                      <span className="text-[14px] font-light text-left">
                        Get it on
                      </span>
                      <span className="text-lg text-left font-semibold">
                        Play Store
                      </span>
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
