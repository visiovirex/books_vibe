"use client";

import BookCardColumn from "@/components/shared/BookCardColumn";
import { BookContext } from "@/context/BookContext";
import { Book } from "@/types/books";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BookContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: Book[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto px-4">
      <h2 className="my-7 rounded-2xl bg-amber-100 py-10 text-center text-2xl font-bold">
        Listed Books
      </h2>

      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success w-full max-w-xs text-center"
        >
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Publication Year</option>
        </select>
      </div>

      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${sortedReadBooks.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: Book) => (
              <BookCardColumn key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-gray-500">No read books to display.</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${sortedWishlist.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: Book) => (
              <BookCardColumn key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-gray-500">No books in wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;