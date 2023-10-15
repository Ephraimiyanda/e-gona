import React, { useState } from "react"; // Import React and useState
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
  Badge,
  NavbarMenuToggle,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/logo.svg";
import categories from "../public/categories.svg";
import cart from "../public/cart.svg";
import account from "../public/account.svg";
import setting from "../public/setting-2.svg";
import Link from "next/link";
import SearchIcon from "./searchIcon";
import Account from "../public/acount-2.svg";
import drop from "../public/drop.svg";
import savedItems from "../public/saved.svg";
import Orders from "../public/orders.svg";
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import { useRouter } from "next/router";
import logout from "../public/logout copy.svg";

export default function Nav() {
  const router = useRouter();
  const { cartItems, list, setIsNavOpen, isNavOpen } = useContext(AppContext);
  const userDetails =
    typeof window !== "undefined" ? window.localStorage.getItem("user") : false;
  const user = JSON.parse(userDetails as string);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Use state to control the dropdown

  const handleDropdownClick = () => {
    if (!user) {
      // If no user is logged in, redirect to the Sign In page
      router.push("/auth/signIn");
    } else {
      // If a user is logged in, toggle the dropdown
      setDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <Navbar
      maxWidth="xl"
      className="justify-around shadow px-3 bg-white p-0 sm:px-6"
    >
      {router.pathname.includes("/seller") && (
        <NavbarMenuToggle
          className="flex sm:hidden"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
        />
      )}
      <NavbarBrand
        className="w-fit flex-grow-[0.2] md:flex-grow-[0.6]"
        as={Link}
        href="/"
      >
        <Image src={logo} alt="logo" width={35} height={45} />
        <p className="hidden md:flex text-3xl font-bold text-[#A46E05] ">
          KASUWA
        </p>
      </NavbarBrand>
      <NavbarContent className="sm:flex-grow-[1] flex-grow-[1.2]">
        <NavbarItem className="bg-white rounded-md w-full border ">
          <Input
            startContent={<SearchIcon />}
            className="text-black  w-full m-auto border border-[#A46E05] rounded-[7px] bg-white"
            radius="sm"
            style={{
              paddingTop: "7px",
              paddingBottom: "7px",
              width: "100%",
              borderColor: "#A46E05",
              background: "white",
            }}
            placeholder="Search"
          />
        </NavbarItem>
        <Button className="bg-[#A46E05BD] rounded-md px-3 py-[6px] text-white">
          Search
        </Button>
      </NavbarContent>
      <NavbarContent
        as="div"
        justify="end"
        style={{
          flexGrow: "0.3",
        }}
        className=""
      >
        <Dropdown placement="bottom-end" onClick={handleDropdownClick}>
          <DropdownTrigger>
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
            className="bg-white rounded-md p-3 flex flex-col gap-[2px]"
          >
            <DropdownItem variant="flat" className="p-0" key="sign in">
            {!user && (
              
                <Link href={"/auth/signIn"}>
                  <Button className="w-full text-white bg-[#A46E05BD] py-2 rounded-md">
                    Sign In
                  </Button>
                </Link>
            )}
            </DropdownItem>

            <DropdownItem variant="flat" className=" p-0 mt-1" key="sign up">
            {!user && (
                <Link href={"/auth/signup"}>
                  <Button className="w-full bg-[#A46E05BD] text-white py-2 rounded-md">
                    Sign Up
                  </Button>
                </Link>
            )}
            </DropdownItem>

            <DropdownItem variant="flat" className=" py-2 mt-1" key="account">
              <div className="flex gap-1 justify-start items-center">
                <Image src={account} alt="logo" width={20} height={20} />
                <span>
                  <Link href="/account">My Account</Link>
                </span>{" "}
              </div>
            </DropdownItem>
            <DropdownItem variant="flat" className=" py-2" key="settings">
              <div className="flex gap-1 justify-start items-center">
                <Image src={Orders} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"#"}>My Orders</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem variant="flat" className=" py-2" key="saved items">
              <div className="flex gap-2 justify-start items-center">
                <Image src={savedItems} alt="logo" width={20} height={20} />
                <span>
                  {" "}
                  <Link href={"/savedItems"}>Saved Items</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem
              variant="flat"
              className="myDropItem flex sm:hidden   py-1"
            >
              <div className="flex gap-2 justify-start items-center">
                {cartItems.length > 0 ? (
                  <Badge
                    className="bg-[#A46E05] bg-opacity-100 text-white p-1 pt-0 z-10 mt-[2px] opacity-100"
                    color="primary"
                    content={cartItems.length}
                  >
                    <Image src={cart} alt="logo" width={21} height={20} />
                  </Badge>
                ) : (
                  <Image src={cart} alt="logo" width={21} height={20} />
                )}

                <span>
                  <Link href={"/cart"}>Cart</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                localStorage.removeItem("user");
                router.push("/");
              }}
              variant="flat"
              className="text-danger"
              key="logout"
              color="danger"
            >
              <div className="flex gap-1 justify-start items-center">
                <Image src={logout} alt="logo" width={21} height={20} />
                <span>
                  <Link href="/account">Logout</Link>
                </span>{" "}
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarItem className="hidden sm:flex">
        <div className="flex gap-[6px] justify-start items-center">
          {cartItems.length > 0 ? (
            <Badge
              className="bg-[#A46E05BD] text-white p-1 pt-0 z-10 mt-[1px]"
              color="primary"
              content={cartItems.length}
              variant="flat"
            >
              <Image src={cart} alt="logo" width={21} height={20} />
            </Badge>
          ) : (
            <Image src={cart} className="pt-0" alt="logo" width={21} height={20} />
          )}
          <span>
            <Link href={"/cart"}>Cart</Link>
          </span>
        </div>
      </NavbarItem>
    </Navbar>
  );
}
