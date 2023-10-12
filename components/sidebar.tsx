import Image from "next/image";
import Link from "next/link";
import dashboard from "../public/dashboardIcon.svg";
import products from "../public/product.svg";
import orders from "../public/ordersIcon.svg";
import reviews from "../public/reviews.svg";
import feedback from "../public/feedback.svg";
import logout from "../public/logout.svg";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
export default function Sidebar() {
  const{isNavOpen}=useContext(AppContext)
  const router = useRouter();
  const pathname = router.pathname;


  return (
    <div className={` sm:w-[270px] flex flex-col gap-10 py-8  bg-white transition-all duration-100   left-[0] ${!isNavOpen?"w-[0] overflow-hidden relative  p-0":"w-[270px] z-50 h-full fixed"} `}>
      <ul className="flex flex-col gap-3 px-8">
        <li
          className={`py-2 px-2 w-full  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center ${
            pathname.includes("dashboard") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"/seller/dashboard"}
          >
            <Image src={dashboard} width={20} height={20} alt="img"></Image>
            <span>Dashboard</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("products") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={products} width={20} height={20} alt="img"></Image>
            <span>Products</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("orders") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={orders} width={20} height={20} alt="img"></Image>
            <span>Orders</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("reviews") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={reviews} width={20} height={20} alt="img"></Image>
            <span>Reviews</span>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-3 py-4 border-t border-t-[#A46E05] px-4">
        <li
          className={`py-2 px-2 w-full  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("feedback") && "bg-[#A46E054D]"
          }`}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={feedback} width={20} height={20} alt="img"></Image>
            <span>Send Feedback</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("logout") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={logout} width={20} height={20} alt="img"></Image>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
