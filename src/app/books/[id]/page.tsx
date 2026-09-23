import ReadButton from "@/components/bookdetails/ReadButton";
import WishListButton from "@/components/bookdetails/WishListButton";
import { Book } from "@/types/books";
import Image from "next/image";
import React from "react";

interface BooksDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

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

const BooksDetails = async ({ params }: BooksDetailsProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find((book) => book.bookId === Number(id)) as Book;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Book Image */}
        <div className="flex h-125 items-center justify-center rounded-lg bg-[#f4f4f4] p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={420}
            className="h-full w-auto object-contain"
            priority
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col">
          {/* Book Title */}
          <h1 className="text-3xl font-bold text-gray-900">{book.bookName}</h1>

          {/* Author */}
          <p className="mt-2 text-sm text-gray-700">
            By : <span className="font-medium">{book.author}</span>
          </p>

          {/* Divider */}
          <div className="my-4 h-px bg-gray-200" />

          {/* Category */}
          <p className="border-b border-gray-200 pb-3 text-sm text-gray-700">
            {book.category}
          </p>

          {/* Review */}
          <div className="border-b border-gray-200 py-4">
            <p className="text-[15px] leading-5 text-gray-600">
              <span className="font-bold text-gray-800">Review :</span>{" "}
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center gap-3">
              <p className="text-[15px] font-bold text-gray-800">Tag</p>

              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-medium text-green-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="space-y-3 py-4 text-[15px]">
            <div className="flex">
              <span className="w-36 text-gray-500">Number of Pages:</span>

              <span className="font-semibold text-gray-800">
                {book.totalPages}
              </span>
            </div>

            <div className="flex">
              <span className="w-36 text-gray-500">Publisher:</span>

              <span className="font-semibold text-gray-800">
                {book.publisher}
              </span>
            </div>

            <div className="flex">
              <span className="w-36 text-gray-500">Year of Publishing:</span>

              <span className="font-semibold text-gray-800">
                {book.yearOfPublishing}
              </span>
            </div>

            <div className="flex">
              <span className="w-36 text-gray-500">Rating:</span>

              <span className="font-semibold text-gray-800">{book.rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex gap-2 pt-3">
            <ReadButton book={book} />

            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
