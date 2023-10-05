import {
  Button,
  Input,
  extendVariants,
  Select,
  SelectItem,
  Checkbox,
  cn,
  Navbar,
} from "@nextui-org/react";
import { useState, useReducer } from "react";
import CheckIcon from "@/components/checkIcon";
import { MailIcon } from "@/components/mailIcon";

interface Form {
  shopName: string;
  password: string;
  businessType: any;
  phoneNumber: string;
  accountManagerName: string;
  email: string;
  retypeEmail: string;
  retypepassword: string;
  accountManagerPhoneNumber: string;
}

interface ActionType {
  type: string;
  payload: any;
}

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      white: {
        inputWrapper: [
          "bg-white ",
          "text-black",
          "py-[6px]",
          "px-1",
          "ml-auto",
          "w-[270px]",
        ],
      },
    },
  },
  defaultVariants: {
    color: "white",
  },
});

export default function SellerForm() {
  const [hasReadContract, setHasReadContract] = useState(false);
  const [form, setForm] = useReducer(reducer, {
    shopName: "",
    password: "",
    businessType: "",
    accountManagerPhoneNumber: "",
    phoneNumber: "",
    accountManagerName: "",
    email: "",
    retypeEmail: "",
    retypepassword: "",
  });

  function reducer(state: Form, action: ActionType): Form {
    switch (action.type) {
      case "shopName-change":
        return { ...state, shopName: action.payload };

      case "businessType-change":
        return { ...state, businessType: action.payload };
      case "accountManagerName-change":
        return { ...state, accountManagerName: action.payload };
      case "accountManagerPhoneNumber-change":
        return { ...state, accountManagerPhoneNumber: action.payload };
      case "phoneNumber-change":
        return { ...state, phoneNumber: action.payload };
      case "email-change":
        return { ...state, email: action.payload };
      case "retypeEmail-change":
        return { ...state, retypeEmail: action.payload };
      case "password-change":
        return { ...state, password: action.payload };
      case "retypePassword-change":
        return { ...state, retypepassword: action.payload };
      case "show-details":
        alert(JSON.stringify(action.payload));
        return { ...state };
      default:
        return { ...state };
    }
  }
  console.log(form);
  return (
    <div>
      <nav className="py-2 px-2 bg-white shadow-sm top-[0] sticky z-20">
        <div className="max-w-[1280px] flex justify-between px-6 w-full mx-auto ">
          <p className="text-2xl">
            <b>SELLER</b> CENTER
          </p>
          <Button className="bg-[#A46E05] text-white p-2 rounded-md">
            Report a claim
          </Button>
        </div>
      </nav>
      <div className="py-10 px-4 sm:px-8 flex flex-col gap-8 ">
        <p className="font-semibold text-lg text-left md:w-[70%]   md:mx-auto">
          Register and start selling today - Create a seller account
        </p>
        <div className="w-full h-full flex flex-col justify-start lg:justify-center lg:items-center">
          <div className=" bg-[#D9D9D9] flex flex-col py-10 lg:px-8 px-4 w-full  md:w-[70%] h-[80%] m-auto rounded-md">
            <span className="text-xl font-semibold">
              Add Seller Information
            </span>
            <form className=" text-black flex flex-col gap-2 justify-center lg:items-center">
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Shop Name *
                </span>
                <MyInput
                  value={form.shopName}
                  placeholder="kasuwa"
                  isRequired
                  radius="md"
                  style={{
                    backgroundColor: "white",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "shopName-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>

              <p className="text-sm max-w-[600px] mx-auto">
                Choose a unique name for your online shop: this is the name that
                will appear on the kasuwa marketplace! It is forbidden to use a
                registered trademark in your shop name without the brand
                authorisation.
              </p>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold  max-w-[300px] pr-1">
                  Please select if you're an Individual or Business
                  Entity/Company *
                </span>
                <Select
                style={{
                  height:"35px",
                  paddingTop:"5px"
                }}
                placeholder="Choose business organization type"
                value={form.businessType}
                  className="my_form text-black bg-white  max-w-[600px] w-full md:w-[300px]  mr-auto "
                  radius="lg"
                  onChange={(e) => {
                    setForm({
                      type: "businessType-change",
                      payload: e.target.value,
                    });
                  }}
                >
                  <SelectItem className="bg-white " key={"Individual"} value={"Individual"} >
                    Individual
                  </SelectItem>
                  <SelectItem
                    className="bg-white border-t border-t-stone-300 -mt-1 "
                    key={"Registered business company"}
                    value={"Registered business company"}
                  >
                    Registered business company
                  </SelectItem>
                </Select>
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Account Manager First and Last Name *
                </span>
                <MyInput
                  value={form.accountManagerName}
                  placeholder="John doe"
                  isRequired
                  radius="md"
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px] "
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "accountManagerName-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Account manager phone number *
                </span>
                <MyInput
                  value={form.accountManagerPhoneNumber}
                  placeholder="09012345678"
                  type="number"
                  isRequired
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "auto",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "accountManagerPhoneNumber-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Additional phone number *
                </span>
                <MyInput
                  value={form.phoneNumber}
                  placeholder="09012345678"
                  type="number"
                  isRequired
                  radius="md"
                  style={{
                    backgroundColor: "white",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "phoneNumber-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold max-w-[300px] pr-1">
                  Email Address *
                </span>
                <MyInput
                  startContent={<MailIcon />}
                  isClearable
                  isRequired
                  type="email"
                  placeholder="user@example.com"
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({ type: "email-change", payload: e.target.value });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Re-type Email Address *
                </span>
                <MyInput
                  startContent={<MailIcon />}
                  isClearable
                  isRequired
                  type="email"
                  placeholder="user@example.com"
                  radius="md"
                  style={{
                    backgroundColor: "white",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  label=""
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "retypeEmail-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Password *
                </span>
                <MyInput
                  isRequired
                  type="password"
                  placeholder="******"
                  radius="md"
                  style={{
                    backgroundColor: "white",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "password-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Re-type Password *
                </span>
                <MyInput
                  isRequired
                  type="password"
                  placeholder="******"
                  radius="md"
                  style={{
                    backgroundColor: "white",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "retypePassword-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full mx-auto max-w-[600px] py-5">
                <Checkbox
                  isSelected={hasReadContract}
                  onValueChange={setHasReadContract}
                  className="mr-auto"
                  color="primary"
                >
                  I have read and accepted the kasuwa e-contract.{" "}
                </Checkbox>
              </div>
              <div className="w-full mx-auto max-w-[600px] py-5 flex px-6">
                <Button
                  type="submit"
                  className="bg-[#A46E05BD] p-2 px-3 text-white rounded-md m-0 ml-auto"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
