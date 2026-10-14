
"use client";

import { createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { IBook } from "@/types/books.type";

interface BooksContextType {
  readbooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType>({
  readbooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const Booksprovider = ({ children }: { children: ReactNode }) => {
  const [readbooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData = {
    readbooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default Booksprovider;
