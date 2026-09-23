"use client";

import React, { createContext, ReactNode, useState } from "react";

export const BookContext = createContext({});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>;
};

export default BookProvider;
