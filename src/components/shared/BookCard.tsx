
import { Book } from "@/types/books";
import Image from "next/image";
import React from "react";

interface BookCardProps {
    book: Book;
}

function BookCard({ book }:BookCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
      <div className="flex h-52 items-center justify-center rounded-lg bg-gray-100 p-4">
        <Image
          src={book.image}
          alt={book.bookName}
          width={150}
          height={190}
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="px-1 pt-3">
        <div className="mb-2 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="truncate text-base font-bold text-gray-900">
          {book.bookName}
        </h3>

        <p className="mt-1 text-xs text-gray-500">By : {book.author}</p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-500">{book.category}</span>

          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">{book.rating}</span>
            <span className="text-sm">☆</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
