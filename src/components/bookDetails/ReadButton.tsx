"use client"
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book: IBook}) => {
    const {readbooks, setReadBooks}  = useContext(BooksContext);
    const handleReadBook = () => {
        console.log("books  a click porse no tension, book")
        setReadBooks([...readbooks, book])
        toast.success(`bal kisu buji na "${book.bookName}" `)
    }
    return (
         <button className="rounded-full bg-green-700 px-8 py-3 font-medium text-white transition hover:bg-green-800" onClick={()=> handleReadBook()}>
              Read
            </button>
    );
};

export default ReadButton;