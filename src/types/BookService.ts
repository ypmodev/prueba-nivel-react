export interface BookService {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genre: string;
  publishedYear: number;
  isbn: string;
}

export interface BookCardProps {
  bookProps: BookService;
}
