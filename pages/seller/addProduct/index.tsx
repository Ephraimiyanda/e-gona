import { Button, Card, Input, Spacer, Textarea } from "@nextui-org/react";
import React, { useReducer } from "react";
import Footer from "@/components/footer";
import bag from "public/bag.svg";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import uploadIcon from "../../../public/upload.svg";

//interface for form
interface reducerInterface {
  image: any;
  nameOfProduct: string;
  salePrice: string;
  originalPrice: string;
  quantityAvailable: string;
  productDescription: string;
  productCategory: string;
  subCategory: string;
}
//interface for action in reducer function
interface actionInterface {
  payload: any;
  type: string;
}


const Dashboard: React.FC = () => {
  const [form, setForm] = useReducer(reducer, {
    image: null,
    nameOfProduct: "",
    salePrice: "",
    originalPrice: "",
    quantityAvailable: "",
    productDescription: "",
    productCategory: "",
    subCategory: "",
  });
//reducer function for handling state changes for form
  function reducer(state: reducerInterface, action: actionInterface): reducerInterface {
    switch (action.type) {
      case "image-change":
        return { ...state, image: action.payload };
      case "nameOfProduct-change":
        return { ...state, nameOfProduct: action.payload };
      case "salePrice-change":
        return { ...state, salePrice: action.payload };
      case "originalPrice-change":
        return { ...state, originalPrice: action.payload };
      case "quantityAvailable-change":
        return { ...state, quantityAvailable: action.payload };
      case "productDescription-change":
        return { ...state, productDescription: action.payload };
      case "productCategory-change":
        return { ...state, productCategory: action.payload };
      case "subCategory-change":
        return { ...state, subCategory: action.payload };
      default:
        return { ...state };
    }
  }
  
//handling input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ type: `${name}-change`, payload: value });
  };

  return (
    <div>
      <div
        className="px-6"
        style={{
          backgroundColor: "#f2f2f2",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
      >
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div className="w-full flex flex-col px-10 pt-6 pb-6">
            <Card className=" mt-6 h-[100px]">
              <div className="">
                <div className="flex items-center">
                  <Image
                    src={bag}
                    alt="logo"
                    width={35}
                    height={45}
                    className="mr-2"
                  />
                  <h1 className="font-bold text-2xl">Add Products</h1>
                </div>
                <Spacer y={2} />
                <Spacer y={20} />
              </div>
            </Card>
            <form
              className="flex flex-col gap-8 sm:px-4 border border-black py-6 rounded-lg"
              action=""
            >
              <div className="px-6">
                <span className="text-xl font-semibold">Product Details</span>
                <p>Basic Product Details</p>
              </div>
              <div className="flex flex-col">
                <div className="px-6 font-semibold pb-2">
                  <span>Images*</span>
                  <br />
                  <p className="text-sm font-normal">
                    Your image needs to be at least 300×300 pixels, preferably a square image
                  </p>
                </div>
                <Input
                  startContent={
                    <Image
                      src={uploadIcon}
                      alt="logo"
                      width={35}
                      height={45}
                      className="mr-2"
                    />
                  }
                  className="fileInput border px-6 shadow-none"
                  type="file"
                  label={""}
                  labelPlacement="outside"
                  accept="image/png, image/gif, image/jpeg,image/svg,"
                  placeholder="Drag and drop your product images or Browse"
                  onChange={(e) => {
                    setForm({
                      type: "image-change",
                      payload: e.target.files?.[0],
                    });
                  }} 
                ></Input>
              </div>
              <Input
                name="nameOfProduct" // Add a name attribute
                placeholder="Name of Product"
                label="Name of Product"
                labelPlacement="outside"
                className="p-0 myProductInput px-6"
                style={{
                  border: "1px solid black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "7px",
                  width: "100%",
                }}
                onChange={handleInputChange} // Handle input change
              >
              </Input>
              <div className="flex flex-col md:flex-row">
                <Input
                  name="salePrice" // Add a name attribute
                  type="number"
                  label="Sale Price (NGN)*"
                  labelPlacement="outside"
                  className="p-0 myProductInput px-6"
                  style={{
                    border: "1px solid black",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "7px",
                    width: "100%",
                  }}
                  placeholder="0"
                  onChange={handleInputChange} // Handle input change
                >
                </Input>
                <Input
                  name="originalPrice" // Add a name attribute
                  type="number"
                  label="Original Price (NGN)*"
                  labelPlacement="outside"
                  className="p-0 myProductInput px-6"
                  style={{
                    border: "1px solid black",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "7px",
                    width: "100%",
                  }}
                  placeholder="0"
                  onChange={handleInputChange} // Handle input change
                >
                </Input>
                <Input
                  name="quantityAvailable" // Add a name attribute
                  type="number"
                  label="Quantity Available*"
                  labelPlacement="outside"
                  className="p-0 myProductInput px-6"
                  style={{
                    border: "1px solid black",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "7px",
                    width: "100%",
                  }}
                  placeholder="0"
                  onChange={handleInputChange} // Handle input change
                >
                </Input>
              </div>
              <Textarea
                name="productDescription" // Add a name attribute
                label="Product Description"
                labelPlacement="outside"
                className=" myProductInput productDescriptionInput px-6 "
                style={{
                  border: "1px solid black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  width: "100%",
                  overflow: "auto",
                }}
                placeholder={"insert text here..."}
                onChange={handleInputChange} // Handle input change
              >
              </Textarea>
              <Input
                name="productCategory" // Add a name attribute
                label="Product Category*"
                labelPlacement="outside"
                className="p-0 myProductInput px-6"
                style={{
                  border: "1px solid black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "7px",
                  width: "100%",
                }}
                placeholder="Enter product category"
                onChange={handleInputChange} // Handle input change
              >
              </Input>
              <Input
                name="subCategory" // Add a name attribute
                label="Sub Category"
                labelPlacement="outside"
                className="p-0 myProductInput px-6"
                style={{
                  border: "1px solid black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "7px",
                  width: "100%",
                }}
                placeholder="Enter sub category"
                onChange={handleInputChange} // Handle input change
              >
              </Input>
              <div className="px-6 mx-auto w-full flex justify-end">
                <Button className="bg-[#A46E05BD] rounded-md px-3 w-[200px] py-[7px] ml-auto text-white">
                  Add Product
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
