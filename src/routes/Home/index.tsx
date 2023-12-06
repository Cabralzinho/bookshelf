import { BookshelfProvider } from "@/providers/BookshelfProvider";
import "@/App.css";
import { PopularBooks } from "./components/PopularBooks";
import { NewestBooks } from "./components/NewestBooks";
import { Navbar } from "./components/Navbar";

export const Home = () => {
  return (
    <BookshelfProvider>
      <Navbar />
      <PopularBooks />
      <NewestBooks />
    </BookshelfProvider>
  );
};
