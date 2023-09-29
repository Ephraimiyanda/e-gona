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

export default function Nav() {
  return (
    <Navbar maxWidth="xl" className="bg-[#A46E05] ">
      <NavbarBrand>
        <Image src={logo} alt="logo" width={35} height={45} />
        <p className="hidden md:flex text-3xl font-bold text-white ">KASUWA</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem className="bg-white rounded-[20px] w-full">
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
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              size="sm"
              src="dropdown.svg"
              radius="none"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="bg-white rounded-md p-3 shadow"
          >
            <DropdownItem key="team_settings" className="flex gap-1">
              <div className="flex gap-1 justify-start items-center">
                <Image src={categories} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"#"}>Categories</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem key="analytics">
              <div className="flex gap-1 justify-start items-center">
                <Image src={cart} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"#"}>Cart</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem key="system">
              <div className="flex gap-1 justify-start items-center">
                <Image src={account} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"#"}>Account</Link>
                </span>{" "}
              </div>
            </DropdownItem>
            <DropdownItem key="settings">
              <div className="flex gap-1 justify-start items-center">
                <Image src={setting} alt="logo" width={20} height={20} />
                <span>
                  <Link href={"#"}>Settings</Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem key="sell">
              <div className="flex gap-2 justify-start items-center">
                <span className="text-black font-light  text-xl  pl-1"> $</span>
                <span>
                  {" "}
                  <Link href={"#"}>Sell on kasuwa</Link>
                </span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
