import bookServiceData from "@/data/bookService.json";
import type { BookService } from "../types/BookService";
import { useState } from "react";
import BookCard from "@/components/BookCard";
import { useNavigate } from "react-router";

const BookList = () => {
  const [book] = useState<BookService[]>(bookServiceData);

  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/books/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {book.map((book) => (
        <BookCard key={book.id} bookProps={book} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default BookList;
