import Layout from "@/layout/Layout";
import Books from "@/pages/Books";
import BookDetail from "@/pages/BookDetail";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Books },
      { path: "books/:id", Component: BookDetail },
    ],
  },
]);

export default router;
