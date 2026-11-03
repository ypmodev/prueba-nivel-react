import bookServiceData from "@/data/bookService.json";
import type { BookService } from "../types/BookService";
import { useState } from "react";
import BookCard from "@/components/BookCard";

const BookList = () => {
  const [book, setBooks] = useState<BookService[]>(bookServiceData);

  return (
    <div>
      {book.map((book) => (
        <BookCard
         key={book.id}
         bookProps={book} />
      ))}
    </div>
  );
};

export default BookList;
