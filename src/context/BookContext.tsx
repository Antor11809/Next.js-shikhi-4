"use client"
import  { ReactNode, useState } from 'react';
import { createContext } from "react";

export const BooksContext = createContext({});

const Booksprovider = ({children}:{children: ReactNode}) => {
    const [readbooks, setReadBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);
const sharedData= {
readbooks, setReadBooks, wishlist, setWishlist
}


    return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
);
      
    
};

export default Booksprovider;