import React from "react";
import type { Book } from "@/types/books";
import BookCard from "../shared/BookCard";

const getBooks = async (): Promise<Book[]> => {
  try{
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booksData.json`,
  );
  const data = await response.json();
  return data;
  } catch (error){
    console.error("Error fetching books:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-bold">Books</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 6).map((book) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
