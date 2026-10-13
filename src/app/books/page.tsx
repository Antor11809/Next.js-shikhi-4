"use client"

import BookCard from "@/components/shared/BookCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import WishBook from "@/components/shared/WishBook";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";

const ListedBooks = () => {
     const {readbooks, wishlist} = useContext(BooksContext);
console.log(readbooks, wishlist  );

  return (
    <div className="container mx-auto py-[20px]">
      <h1 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center mt-8">
        Listed Books
      </h1>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books  (${readbooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
      
{
  readbooks.length > 0 ? readbooks.map((book: IBook) => {
    return (
      <ListedBooksCard key={book.bookId} book={book}/>
    );
  }) : (
    <p className="text-center font-bold text-blue-600">
      Nothing i can found
    </p>
  )
}
</div>

<input
  type="radio"
  name="my_tabs_3"
  className="tab"
  aria-label={`Wishlist Books (${wishlist.length})`}
/>

<div className="tab-content bg-base-100 border-base-300 p-6">

{
  wishlist.length > 0 ? wishlist.map((book: IBook) => {
    return (
     <WishBook key={book.bookId} book={book} />
    );
  }) : (
    <p className="text-center font-bold text-blue-600">
      Naire naire nai
    </p>
  )
}

</div>
</div>
</div>
);
};


export default ListedBooks;
   