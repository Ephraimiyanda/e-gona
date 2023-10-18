//million-ignore
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import "../app/globals.css";
import { useRouter } from "next/router";
import { useState ,useEffect} from "react";
import Footer from "@/components/footer";
import { AppContext } from "@/utils/AppContext";
import Head from "next/head";
import Notification from "@/components/notification";
interface cartItem {
  img: string;
  index: number;
  price: string;
  saleScale: string;
  title: string;
  seller:string
}

interface product {
  src: string;
  index: number;
  price: string;
  saleScale: string;
  title: string;
}
const list = [
  {
    title: "corn",
    saleScale: "kg",
    img: "corn.svg",
    price: "5.50",
    seller: "shadrach",
  },
  {
    title: "Eggs",
    saleScale: "crate",
    img: "eggs.svg",
    price: "3.00",
    seller: "Godman",
  },
  {
    title: "Egpytian Sheep",
    saleScale: "sheep",
    img: "egyptian sheep.svg",
    price: "10.00",
    seller: "Ephraim",
  },
  {
    title: "Fertilizer",
    saleScale: "kg",
    img: "fertilizer.svg",
    price: "5.30",
    seller: "Ephraim backend",
  },
  {
    title: "milk",
    saleScale: "bottle",
    img: "milk.svg",
    price: "15.70",
    seller: "jesse",
  },
  {
    title: "potatoe",
    saleScale: "kg",
    img: "potatoe.svg",
    price: "8.00",
    seller: "E-max b",
  },
  {
    title: "cattle",
    saleScale: "cattle",
    img: "cattle.svg",
    price: "7.50",
    seller: "mallam b",
  },
  {
    title: "Fertilizer",
    saleScale: "kg",
    img: "fertilizer.svg",
    price: "5.30",
    seller: "mallam a",
  },
  {
    title: "milk",
    saleScale: "bottle",
    img: "milk.svg",
    price: "15.70",
    seller: "mallam c",
  },
  {
    title: "potatoe",
    saleScale: "kg",
    img: "potatoe.svg",
    price: "8.00",
    seller: "mallam d",
  },
];
function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState<any>([]);
  const [isNavOpen,setIsNavOpen]=useState(false)
  const [count, setCount] = useState(1);
  const [notification, setNotification] = useState("");
  const [notificationAction, setNotificationAction] = useState("")
  const [notificationVisibles,setNotificationVisible]=useState(false)
  const [savedItems,setSavedItems]=useState<any>([]);


  const showNotification = (message:any) => {
    setNotification(message);
    setNotificationVisible(true)
    setTimeout(() => {
      setNotification("");
      setNotificationVisible(false)
    }, 3000); // Hide the notification after 3 seconds (adjust the duration as needed)
  };

  useEffect(() => {
    // Load cart items from local storage when the app starts
    const savedCartItems = localStorage.getItem("cartItems");
    const savedItems=localStorage.getItem("savedItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
    if(savedItems){
      setSavedItems(JSON.parse(savedItems))
    }
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }, [cartItems,savedItems]);

  const addToCart = (product:any,count:number) => {
    const itemWithCount = { ...product, quantity: count };
    setCartItems([...cartItems, itemWithCount]);
    showNotification(product.title);
    setNotificationAction("added to cart")
    
  };
  const addToSavedItems=(product:any)=>{
    setSavedItems([...savedItems,product]);
    showNotification(product.title);
    setNotificationAction("added to saved items")
  }

  const removeFromSavedItems = (title: string, item: any) => {
    const updatedSavedItems = savedItems.filter((savedItem:any) => savedItem !== item);
    setSavedItems(updatedSavedItems);
    showNotification(title);
    setNotificationAction("removed from saved items");
  };
  

  const removeFromCart = (title:string,cartItemIndex:number) => {
    const updatedCart = cartItems.filter(
      (cartItem:any,index:number) => index !== cartItemIndex
    );
    setCartItems(updatedCart);
    showNotification(title);
    setNotificationAction("removed from cart")
  };

  const increaseQuantity = (index: number) => {
    // Create a new array with the updated quantity for the specific item
    const updatedCartItems = cartItems.map((item:any, i:any) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };
  const decreaseQuantity = (index: number) => {
    // Create a new array with the updated quantity for the specific item
    const updatedCartItems = cartItems.map((item:any, i:any) =>
      i === index ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };
  const router = useRouter();
  return (
    <NextUIProvider>
      <AppContext.Provider value={{ cartItems, setCartItems, addToCart, list,removeFromCart,isNavOpen,setIsNavOpen ,count,setCount,increaseQuantity,decreaseQuantity,savedItems,setSavedItems,addToSavedItems,removeFromSavedItems}}>
        <Head>
          {/* Define metadata for the app */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kasuwa</title>
          <link
            rel="icon"
            href="/icon.svg?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </Head>
        {!router.pathname.includes("auth/")&&!router.pathname.includes("seller/sellerForm") && <Nav />}
        {notificationVisibles&&<Notification name={notification} action={notificationAction}/>}
        <Component {...pageProps} />
        {!router.pathname.includes("auth/") && <Footer />}
      </AppContext.Provider>
    </NextUIProvider>
  );
}

export default App;
