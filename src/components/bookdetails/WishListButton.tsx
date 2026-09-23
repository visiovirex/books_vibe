"use client";
import { BookContext } from "@/context/BookContext";
import { Book } from "@/types/books";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: Book }) => {
  const { wishlist, setWishlist } = useContext(BookContext);

  const handleAddWishList = () => {
    setWishlist((prevWishlist: Book[]) => [...prevWishlist, book]);
    toast.success(`You have added "${book.bookName}" by ${book.author} to your wishlist.`);
  };
  return (
    <div>
      <button
        onClick={() => handleAddWishList()}
        className="rounded-md border border-gray-300 px-5 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishListButton;