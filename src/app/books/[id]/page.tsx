import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishButton';
import { IBook } from '@/types/books.type';
import Link from 'next/link';
import React from 'react';

interface BookDetailpageprops{
   params: Promise< {
id: string;
   }>
}


const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};


const BookDetailpage = async({params}:BookDetailpageprops) => {
    const {id} = await params;
    const booksData = await getBooks();
    const book = booksData.find((book:IBook) => book.bookId == Number(id))
    
    
return (
  <div className="container mx-auto my-16 px-4">
    {book && (
      <div className="grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl">

        {/* Left - Book Image */}
        <div className="md:col-span-4 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-5">
          <div className="w-full max-w-[390px] rounded-2xl bg-white p-3 shadow-lg">
            <img
              src={book.image}
              alt={book.bookName}
              className="h-[494px] w-[351px] max-w-full object-contain rounded-xl mx-auto"
            />
          </div>
        </div>

        {/* Right - Book Information */}
        <div className="md:col-span-8 p-8 md:p-12">

          <div className="flex flex-wrap gap-3 mb-5">
            <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
              {book.category}
            </span>

            <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-600">
              ★ {book.rating}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {book.bookName}
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            By <span className="text-gray-800 font-medium">{book.author}</span>
          </p>

          <div className="my-7 border-t border-gray-100" />

          {/* Book Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400 uppercase">Pages</p>
              <p className="mt-2 font-semibold text-gray-800">
                {book.totalPages}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400 uppercase">Published</p>
              <p className="mt-2 font-semibold text-gray-800">
                {book.yearOfPublishing}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400 uppercase">Category</p>
              <p className="mt-2 font-semibold text-gray-800">
                {book.category}
              </p>
            </div>

          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-400">Publisher</p>
            <p className="mt-1 font-medium text-gray-800">
              {book.publisher}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {book.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              About This Book
            </h3>
            <p className="text-[15px] leading-8 text-gray-600">
              {book.review}
            </p>
          </div>

          {/* Buttons - Design Only */}
          <div className="mt-8 flex flex-wrap gap-4">
         
    
           <ReadButton book = {book} />
            <WishListButton book={book} />
          </div>

        </div>
      </div>
    )}
  </div>
);
}

export default BookDetailpage;