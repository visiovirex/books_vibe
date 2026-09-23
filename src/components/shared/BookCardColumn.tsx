import { Book } from "@/types/books";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookCardProps {
  book: Book;
}

const BookCardColumn = ({ book }: BookCardProps) => {
  return (
    <div className="mb-3 flex flex-col gap-4 rounded-xl border border-gray-200 p-3 sm:flex-row">
      {/* Book Image */}
      <div className="flex h-37.5 w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 sm:h-30 sm:w-30">
        <Image
          src={book.image}
          alt={book.bookName}
          width={90}
          height={120}
          className="h-30 w-auto object-contain"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col">
        <h3 className="font-serif text-lg font-bold text-gray-800">
          {book.bookName}
        </h3>

        <p className="mt-1 text-xs text-gray-600">
          By : <span className="font-medium">{book.author}</span>
        </p>

        {/* Tags + Year */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="font-serif text-xs font-semibold text-gray-700">
            Tag
          </span>

          {book.tags?.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
            >
              #{tag}
            </span>
          ))}

          <span className="text-xs text-gray-500">
            <span className="mr-1">◉</span>
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher + Pages */}
        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span>
            <span className="mr-1">♧</span>
            Publisher: {book.publisher}
          </span>

          <span>
            <span className="mr-1">▧</span>
            Page {book.totalPages}
          </span>
        </div>

        {/* Divider */}
        <div className="my-2 border-t border-gray-200" />

        {/* Bottom Information */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-2 text-xs text-blue-500">
            Category: {book.category}
          </span>

          <span className="rounded-full bg-orange-50 px-3 py-2 text-xs text-orange-400">
            Rating: {book.rating}
          </span>

          <Link href={`/books/${book.bookId}`} className="rounded-full bg-green-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-green-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCardColumn;