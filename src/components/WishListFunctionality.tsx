"use client";
import React from 'react';
import { wishlistAtom, itemQuantity } from "@/lib/atom"; // Ensure both atoms are imported
import { toast, Bounce, ToastContainer } from "react-toastify";
import { FaRegHeart } from 'react-icons/fa';
import { useAtom } from 'jotai';

interface Product {
  product: {
    imageUrl: string;
    rating: {
      count: number;
      rate: number;
    };
    tags: string[];
    price: number;
    discount: number;
    originalPrice: number;
    slug: string;
    categoryName: string;
    name: string;
    stock: number;
    dimensions: {
      depth: number;
      width: number;
      height: number;
    };
    id: number;
    description: string;
    Quantity: number;
    Finalprice: number;
  };
  quantity: number;
}
const WishListFunctionality = (product:Product) => {

  const [wishlistItems, setWishlistItems] = useAtom(wishlistAtom);
  const [quantity, setQuantity] = useAtom(itemQuantity);

  function addProductToWishlist(slug:string) {
    // Check if the product is already in the wishlist
    const currentWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.product.name === slug
    );

    if (currentWishlistItem) {
      // Update quantity if the product is already in the wishlist
      const updatedWishlistItems = wishlistItems.map((wishlistItem) =>
        wishlistItem.product.name === slug
          ? { ...wishlistItem, quantity: wishlistItem.quantity + quantity }
          : wishlistItem
      );
      setWishlistItems(updatedWishlistItems);
    } else {
      // Add new product to the wishlist
      setWishlistItems((prevWishlist) => [
        ...prevWishlist,
        {...product, quantity: product.quantity },
      ]);
    }

    // Reset the local quantity to 1 after adding to the wishlist
    setQuantity(1);

    // Display a toast notification
    toast.success("Product added to wishlist successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  }


  return (
    <>
      <section>
        <button
          className="hover:text-primary flex items-center"
          onClick={ () =>addProductToWishlist(product.product?.slug)}
        >
          <FaRegHeart />
          Like
        </button>
      </section>
      <section>
        <ToastContainer />
      </section>
    </>
  );
}

export default WishListFunctionality;