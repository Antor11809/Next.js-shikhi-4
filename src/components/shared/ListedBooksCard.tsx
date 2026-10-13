import { IBook } from '@/types/books.type';
import React from 'react';

const ListedBooksCard = ({book}:{book: IBook}) => {
    return (
       <div
        key={book.bookId}
        className="flex flex-row items-center gap-5 bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition-all"
      >
        {/* Left - Book Image */}
        <img
          src={book.image}
          alt={book.bookName}
          className="w-[120px] h-[160px] object-contain rounded-lg shrink-0"
        />

        {/* Right - Book Information */}
        <div className="flex-1 min-w-0 space-y-4 pl-10 md:pl-16">
          <h2 className="text-xl font-bold text-indigo-800">
            {book.bookName}
          </h2>

          <p className="text-sm text-slate-600 font-medium">
            By: {book.author}
          </p>

          <p className="text-sm text-teal-700 font-semibold">
            Category: {book.category}
          </p>

          <div className="flex flex-wrap gap-8 text-sm font-medium text-indigo-600">
            <span>📄 {book.totalPages} Pages</span>
            <span>⭐ {book.rating}</span>
            <span>📅 {book.yearOfPublishing}</span>
          </div>

          <a
            href={`/books/${book.bookId}`}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700"
          >
            View Details →
          </a>
        </div>
      </div>
    );
};

export default ListedBooksCard;