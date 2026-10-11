
import Image from "next/image";
import React from "react";
import BookCard from './../shared/BookCard';

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};



const Books = async () => {
  const booksdata = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">

      <h1 className="mb-12 text-center text-4xl font-light tracking-tight text-gray-900">
        Explore Our{" "}
        <span className="font-semibold text-green-700">Books</span>
      </h1>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

      {booksdata.map((book, ind) => (
  <BookCard key={ind} book={book} />
 ))}
      </div>
    </section>
  );
};

export default Books;
