import Link from "next/link"
import facebook from "../public/facebok.svg"
import youtube from "../public/youtube.svg"
import instagram from "../public/instagram.svg"
import twitter from "../public/twitter.svg"
import Image from "next/image"
import verve from "../public/verve.svg"
import masterCard from "../public/mastercard.svg"
import interSwitch from "../public/interswitch.svg"
export default function Footer(){
    return(
        <div className="bg-[#151515]">
            <div className="max-w-[1280px] mx-auto w-full px-6 py-8 flex flex-col">
                <div className="flex justify-between flex-wrap">
                    <ul className="w-[150px] pt-[20px]">
                        <li className="text-lg text-white  font-semibold">NEED HELP</li>
                        <li><Link href={"#"} className="text-white">Chat with us</Link></li>
                        <li><Link href={"#"} className="text-white">Contact Us</Link></li>
                        <li><Link href={"#"} className="text-white">Help centre</Link></li>
                    </ul>
                    <ul className="w-[150px] pt-[20px]">
                        <li className="text-lg text-white font-semibold">ABOUT KASUWA</li>
                        <li><Link href={"#"} className="text-white">About Us</Link></li>
                        <li><Link href={"#"} className="text-white">FAQ</Link></li>
                        <li><Link href={"#"} className="text-white">Privacy Policy</Link></li>
                        <li><Link href={"#"} className="text-white">Flash Sales</Link></li>
                    </ul>
                    <ul className="w-[150px] pt-[20px]">
                        <li className="text-lg text-white font-semibold">EARN ON KASUWA</li>
                        <li><Link href={"#"} className="text-white">Become a Seller</Link></li>
                        <li><Link href={"#"} className="text-white">Become an Affiliate</Link></li>
                        <li><Link href={"#"} className="text-white">Become a Delivery Partner</Link></li>
                    </ul>
                    <ul className="w-[150px] pt-[20px]">
                        <li className="text-lg text-white font-semibold">KASUWA PRESENCE</li>    
                        <li><Link href={"#"} className="text-white">Plateau State</Link></li>
                        <li><Link href={"#"} className="text-white">Benue State</Link></li>
                        <li><Link href={"#"} className="text-white">Niger State</Link></li>
                        <li><Link href={"#"} className="text-white">Adamawa State</Link></li>
                        <li><Link href={"#"} className="text-white">Taraba State</Link></li>
                        <li><Link href={"#"} className="text-white">Anambra State</Link></li>
                        <li><Link href={"#"} className="text-white">Delta State</Link></li>
                        <li><Link href={"#"} className="text-white">Oyo State</Link></li>
                        <li><Link href={"#"} className="text-white">Kano State</Link></li>
                    </ul>
                </div>
                <div className="flex justify-between flex-col sm:flex-row flex-wrap max-w-[650px] mx-auto sm:m-0 sm:pt-0 pt-10 sm:gap-0 gap-8 ">
                    <div className="flex flex-col sm:m-0 m-m-auto sm:text-left text-center ">
                        <span className="text-lg text-white font-semibold">JOIN US</span>
                        <div className="flex justify-normal items-center gap-4 sm:gap-3 w-fit sm:m-0 m-auto">
                        <Link href={"#"}><Image src={facebook} alt="logo" width={25} height={15} /></Link>
                        <Link href={"#"}><Image src={youtube} alt="logo" width={25} height={15} /></Link>
                        <Link href={"#"}> <Image src={instagram} alt="logo" width={25} height={15} /></Link>
                        <Link href={"#"}> <Image src={twitter} alt="logo" width={25} height={15} /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-fit">
                        <p className="text-lg text-white font-semibold gap-3">PAYMENT AND DELIVERY PARTNERS</p>
                        <div className="w-fit gap-3 m-auto flex justify-center items-center">
                        <Link href={"#"}> <Image src={verve} alt="logo" width={70} height={35} /></Link>
                        <Link href={"#"}> <Image src={masterCard} alt="logo" width={50} height={35} /></Link>
                        <Link href={"#"}> <Image src={interSwitch} alt="logo" width={70} height={45} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}