"use client"

import { BooksContext } from "@/context/BookContext";
import { useContext } from "react";

const ListedBooks = () => {
     const {readbooks} = useContext(BooksContext);
console.log(readbooks, "ami asi");

  return (
     <div>
    <h1>Listed Books</h1>
    <p>Welcome to Books Page</p>
  </div>
  );
};

export default ListedBooks;