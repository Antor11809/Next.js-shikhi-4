"use client"

import BookCard from "@/components/shared/BookCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import WishBook from "@/components/shared/WishBook";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBooks = () => {
     const {readbooks, wishlist} = useContext(BooksContext);
     const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("pages");
console.log(readbooks, wishlist  );

const sortbooks = (books: IBook[]) => {
  const sortedBooks = [...books]

  if(sortBy === "rating"){
    sortedBooks.sort((a, b)=> b.rating -a.rating)
  } else if(sortBy === "pages"){
    sortedBooks.sort((a, b)=> b.totalPages -a.totalPages)
  } else if(sortBy === "year"){
    sortedBooks.sort((a, b)=> b.yearOfPublishing -a.yearOfPublishing)
  }
  return sortedBooks;
}

const sortedReadBooks= sortbooks (readbooks);
const sortedWishList= sortbooks (wishlist);

  return (
    <div className="container mx-auto py-[20px]">
      <h1 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center mt-8">
        Listed Books
      </h1>
<div className= "text-center">

     
      <select 
      value ={sortBy}
      onChange ={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
      defaultValue="Pick a Runtime"
       className="select select-success">

  <option disabled={true}>Sort by</option>
  <option value={"rating"}>Rating</option>
  <option value={"pages"}>Number of pages</option>
  <option value={"year"}>Published year</option>
</select>

</div>


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
  sortedReadBooks.length > 0 ? sortedReadBooks.map((book: IBook) => {
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
  sortedWishList.length > 0 ? sortedWishList.map((book: IBook) => {
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
   