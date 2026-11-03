import bookServiceData from "@/data/bookService.json";
import { useParams, Link } from "react-router";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const BookDetail = () => {
  const { id } = useParams();
  const bookData = bookServiceData.find((book) => book.id === Number(id));

  if (!bookData) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <Card>
        <CardContent>
          <img src={bookData.coverImage} alt={bookData.title} />{" "}
          <CardTitle> {bookData.title} </CardTitle>
          <CardDescription>
            <p>Descripción:{bookData.description}</p>
            <p>Autor: {bookData.author}</p>
            <p>Género: {bookData.genre}</p>
            <p>Año de publicación: {bookData.publishedYear}</p>
            <p>ISBN:{bookData.isbn}</p>
          </CardDescription>
        </CardContent>
        <Link to="/" className="text-blue-600 hover:underline">
          Volver
        </Link>
      </Card>
    </>
  );
};

export default BookDetail;
