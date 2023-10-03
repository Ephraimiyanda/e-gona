import {
  Navbar,
  NavbarBrand,
  Input,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownTrigger,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/logo.svg";
import categories from "../public/categories.svg";
import cart from "../public/cart.svg";
import account from "../public/account.svg";
import setting from "../public/setting-2.svg";
import Link from "next/link";
import SearchIcon from "./searchIcon";
import Account from "../public/acount-2.svg"
import drop from "../public/drop.svg"
import savedItems from "../public/saved.svg"
import Orders from "../public/orders.svg"

export default function Nav() {
  return (
    <Navbar maxWidth="xl" className="justify-around shadow px-3 bg-white p-0 sm:px-6" >
      <NavbarBrand className="w-fit flex-grow-[0.2] md:flex-grow-[0.6]" as={Link} href="/">
        <Image src={logo} alt="logo" width={35} height={45} />
        <p className="hidden md:flex text-3xl font-bold text-[#A46E05] ">KASUWA</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex-grow-[1] flex-grow-[1.2]">
        <NavbarItem className="bg-white rounded-md w-full border border-[#A46E05]">
          <Input
            startContent={<SearchIcon />}
            className="text-black  w-full m-auto"
            radius="full"
            style={{
              paddingTop: "7px",
              paddingBottom: "7px",
              width: "100%",
            }}
            placeholder="Search"
          />
          
        </NavbarItem>
        <Button className="bg-[#A46E05BD] rounded-md px-3 py-[7px] text-white">Search</Button>
      </NavbarContent>
      <NavbarContent as="div" justify="end" style={{
        flexGrow:"0.3"
      }} className="">
        <Dropdown placement="bottom-end">
          <DropdownTrigger >
            <div className="flex gap-2 justify-between items-center cursor-pointer">
              <Image
              className="transition-transform"
              src={Account}
              width={25}
              height={25}
              alt="account"
            />
            <span className="hidden sm:flex">Account</span>
            <Image
              className="transition-transform mt-1"
              src={drop}
              width={10}
              height={10}
              alt=""
              
            />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="bg-white rounded-md p-3 shadow"
          >
            <DropdownItem key="team_settings" className="flex gap-1">
             <Button className="w-full bg-[#A46E05BD] py-2 rounded-md ">Sign In</Button>
            </DropdownItem>
            <DropdownItem key="analytics">
             <Button className="w-full bg-[#A46E05BD] py-2 rounded-md ">Sign Up</Button>
            </DropdownItem>
            <DropdownItem key="system">
              <div className="flex gap-1 justify-start items-center">
                <Image src={account} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"#"}>My Account</Link>
                </span>{" "}
              </div>
            </DropdownItem>
            <DropdownItem key="settings">
              <div className="flex gap-1 justify-start items-center">
                <Image src={Orders} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"#"}>My Orders</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem key="sell">
              <div className="flex gap-2 justify-start items-center">
              <Image src={savedItems} alt="logo" width={20} height={20} />
                <span>
                  {" "}
                  <Link href={"#"}>Saved Items</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem className="flex sm:hidden">
            <div className="flex gap-1 justify-start items-center">
                <Image src={cart} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"/cart"}>Cart</Link>
                </span>
              </div>
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
        <NavbarItem className="hidden sm:flex">
        <div className="flex gap-1 justify-start items-center">
                <Image src={cart} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"/cart"}>Cart</Link>
                </span>
              </div>
        </NavbarItem>
    </Navbar>
  );
}
