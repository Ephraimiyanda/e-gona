//million-ignore
"use client"
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import { AppContext } from "@/utils/AppContext";
import Head from "next/head";
import Notification from "@/components/notification";
import "../app/globals.css";      
import { 
  saveCartItems,
  loadCartItems,
  saveSavedItems,
  loadSavedItems,} from "@/utils/localstorageHook";
interface cartItem {
  img: string;
  index: number;
  originalPrice: string;
  saleScale: string;
  title: string;
  seller: string;
}

interface product {
  src: string;
  index: number;
  originalPrice: string;
  saleScale: string;
  title: string;
}

function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState(loadCartItems());
  const [savedItems, setSavedItems] = useState(loadSavedItems());
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [notification, setNotification] = useState("");
  const [notificationAction, setNotificationAction] = useState("");
  const [notificationVisibles, setNotificationVisible] = useState(false);
  const [list, setList] = useState([]);
  const API_URL = "https://kasuwa-b671.onrender.com";

  const FetchProducts = async () => {
    try {
      const allProduct = await fetch(`${API_URL}/products`);
      const allProductRes = await allProduct.json();
      setList(allProductRes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchProducts();
  }, []);
  const showNotification = (message: any) => {
    setNotification(message);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotification("");
      setNotificationVisible(false);
    }, 3000); // Hide the notification after 3 seconds (adjust the duration as needed)
  };

  useEffect(() => {
    if(typeof window !== "undefined" ){
 saveCartItems(cartItems);
    saveSavedItems(savedItems);
    }
    // Save cart items to local storage whenever they change
   
  }, [cartItems, savedItems]);

 
  const addToCart = (product: any, count: number) => {
    const itemWithCount = { ...product, quantity: count };
    setCartItems([...cartItems, itemWithCount]);
    showNotification(product.name);
    setNotificationAction("added to cart");
  };
  const addToSavedItems = (product: any) => {
    setSavedItems([...savedItems, product]);
    showNotification(product.title);
    setNotificationAction("added to saved items");
  };

  const removeFromSavedItems = (title: string, item: any) => {
    const updatedSavedItems = savedItems.filter(
      (savedItem: any) => savedItem !== item
    );
    setSavedItems(updatedSavedItems);
    showNotification(title);
    setNotificationAction("removed from saved items");
  };

  const removeFromCart = (title: string, cartItemIndex: number) => {
    const updatedCart = cartItems.filter(
      (cartItem: any, index: number) => index !== cartItemIndex
    );
    setCartItems(updatedCart);
    showNotification(title);
    setNotificationAction("removed from cart");
  };

  const increaseQuantity = (index: number) => {
    // Create a new array with the updated quantity for the specific item
    const updatedCartItems = cartItems.map((item: any, i: any) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };
  const decreaseQuantity = (index: number) => {
    // Create a new array with the updated quantity for the specific item
    const updatedCartItems = cartItems.map((item: any, i: any) =>
      i === index ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };
  const router = useRouter();
  return (
    <NextUIProvider>
      <AppContext.Provider
        value={{
          cartItems,
          setCartItems,
          addToCart,
          list,
          removeFromCart,
          isNavOpen,
          setIsNavOpen,
          count,
          setCount,
          increaseQuantity,
          decreaseQuantity,
          savedItems,
          setSavedItems,
          addToSavedItems,
          removeFromSavedItems,
          showNotification,
          setNotification,
          setNotificationAction,
        }}
      >
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
        {!router.pathname.includes("auth/") &&
          !router.pathname.includes("seller/sellerForm") && <Nav />}
        {notificationVisibles && (
          <Notification name={notification} action={notificationAction} />
        )}
        <Component {...pageProps} />
        {!router.pathname.includes("auth/") && <Footer />}
      </AppContext.Provider>
    </NextUIProvider>
  );
}

export default App;
