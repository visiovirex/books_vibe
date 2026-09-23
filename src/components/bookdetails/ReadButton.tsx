"use client";
import { BookContext } from "@/context/BookContext";
import { Book } from "@/types/books";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: Book }) => {
  const { readBooks, setReadBooks } = useContext(BookContext);

  const handleReadBook = () => {
    setReadBooks((prevReadBooks: Book[]) => [...prevReadBooks, book]);
    toast.success(`You have read "${book.bookName}" by ${book.author}.`);
  };
  return (
    <div>
      <button
        onClick={() => handleReadBook()}
        className="rounded-md border border-gray-300 px-5 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
