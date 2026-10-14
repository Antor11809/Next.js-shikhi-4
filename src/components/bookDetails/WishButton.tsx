"use client"
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({book}:{book: IBook}) => {
    const {wishlist, setWishlist}  = useContext(BooksContext);
    const handleAddtoWishlist = () => {
        console.log("books  a click porse no tension, {book.bookName}")
        setWishlist([...wishlist, book])
        toast.success(`Wishlist E Add holo  "${book.bookName}" `)
    }
    return (
         <button className="rounded-full bg-green-700 px-8 py-3 font-medium text-white transition hover:bg-green-800" onClick={()=> handleAddtoWishlist()}>
             Add to Wishlist
            </button>
    );
};

export default WishListButton;