import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardprops{
book: IBook;
}
const BookCard = ({book}:IBookCardprops) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Book Image */}
            <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-green-50 p-6">
               
              <img
               src= {book.image}
                alt="Book Cover"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                width={600}
                height={399}
              />

            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {book.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Category & Rating */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {book.category}
              </span>

              <span className="text-sm font-semibold text-amber-500">
                ★ {book.rating}
              </span>
            </div>

            {/* Book Name */}
            <h2 className="mt-3 line-clamp-2 text-xl font-semibold text-gray-900">
              {book.bookName}
            </h2>

            {/* Author */}
            <p className="mt-2 text-sm text-gray-500">
              By {book.author}
            </p>

            <div className="my-5 border-t border-dashed border-gray-200" />

            {/* Book Details */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>{book.totalPages} Pages</span>
              <span>{book.yearOfPublishing}</span>
            </div>

            {/* Button */}
          <Link href = {`/books/${book.bookId}`}>
            <button className="mt-6 w-full rounded-xl bg-green-700 py-3 font-medium text-white transition-colors duration-300 hover:bg-green-800">
              View Details →
            </button>

          </Link>
          </div>
    );
};

export default BookCard;