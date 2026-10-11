export interface IBook  {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags: string[];
  totalPages: number;
  yearOfPublishing: number;
};