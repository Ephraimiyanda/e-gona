import { Button, Card, Input, Select, SelectItem, Spacer, Textarea } from "@nextui-org/react";
import React, { useReducer } from "react";
import Footer from "@/components/footer";
import bag from "public/bag.svg";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import uploadIcon from "../../../public/upload.svg";
import "../../../app/form style.css";
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

const categories=["Dairy products","Legumes","Tubers","Grains","Livestock","Vegetables","Fertilizers"]

const Dashboard: React.FC = () => {
  const API_URL = "https://kasuwa-b671.onrender.com";
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
  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", form.image);
      formData.append("api_key", "743174149656362");
      formData.append("upload_preset", "j1d4ychj");
      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/dg0kdnwt1/auto/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      }catch(error){
        console.log(error);
      }
    }
  const AddProduct=async()=>{
  
    try{
      const productDetails={
        name:form.nameOfProduct,
        description:form.productDescription,
        category:form.productCategory,
        tags:"tag 1",
        stock:form.quantityAvailable,
        discountPrice:(parseFloat(form.originalPrice)-parseFloat(form.salePrice)).toString(),
        originalPrice:form.salePrice,
        images:[form.image]
      }
      const CONFIG = {
        method: "POST",
        body: JSON.stringify(productDetails),
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json", 
        },
      };
      const addProduct=await fetch(`${API_URL}/products/addProduct`,
      CONFIG
      )
      const addProductRes = await addProduct.json()
      console.log(addProductRes);
      console.log(productDetails);
    }
    catch(error){
      console.log(error);
    }
  } 

 return (
    <div >
      <div
        className="px-6 gap-4"
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
          <div className="w-full flex flex-col px-2 sm:px-10 pt-6 pb-6 gap-[20px]">
            <Card className=" mt-6 h-[100px] px-2 sm:px-10 pt-6">
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
             onSubmit={(e)=>{
              e.preventDefault();
              AddProduct()
             }}
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
                isRequired
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
                  multiple
                  label={""}
                  labelPlacement="outside"
                  accept=".png,.gif, .jpeg,.svg,"
                  placeholder="Drag and drop your product images or Browse"
                  onChange={(e) => {
                    setForm({
                      type: "image-change",
                      payload: e.target.files,
                    });
                  }} 
                ></Input>
              </div>
              <Input
              isRequired
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
                isRequired
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
                isRequired
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
                isRequired
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
              <div className="px-6 my_states">
              <Select
                  style={{
                    height: "35px",
                    paddingTop: "5px",
                    background: "white",
                    width:"100%"
                  }}
                  scrollShadowProps={{
                    isEnabled:false
                  }}
                  placeholder="Choose the product category"
                  value={form.productCategory}
                  className=" text-black bg-white  w-full   mr-auto border border-black py-1 pb-0"
                  radius="lg"
                  onChange={(e) => {
                    setForm({
                      type: "productCategory-change",
                      payload: e.target.value,
                    });
                  }}
                >
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                     
                    >
                      {category}
                    </SelectItem>
                  ))}
                </Select>
                </div>
              <div className="px-6 mx-auto w-full flex justify-end">
                <Button type="submit" className="bg-[#A46E05BD] rounded-md px-3 w-[200px] py-[7px] ml-auto text-white">
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
