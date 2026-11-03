import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { BookCardProps } from "@/types/BookService";

const BookCard = ({ bookProps, onClick }: BookCardProps) => {
  return (
    <Card onClick={() => onClick(bookProps.id)} className="cursor-pointer">
      <CardContent>
        <img src={bookProps.coverImage} alt={bookProps.title} />
        <CardTitle> {bookProps.title} </CardTitle>
        <CardDescription> {bookProps.author} </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BookCard;
