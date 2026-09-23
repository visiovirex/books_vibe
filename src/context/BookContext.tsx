"use client";

import { Book } from "@/types/books";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface BookContextType {
  readBooks: Book[];
  setReadBooks: Dispatch<SetStateAction<Book[]>>;
  wishlist: Book[];
  setWishlist: Dispatch<SetStateAction<Book[]>>;
}

export const BookContext = createContext<BookContextType>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>;
};

export default BookProvider;
