import { randomLettersInApi } from "@/helpers/randomLetterInApi";
import { apiKey } from "@/constants/apiKey";
import { BookApi, BookshelfContext, SpecificBookType } from "@/providers/BookshelfProvider";
import { useContext } from "react";

export const useBook = () => {
  const {
    searchBook,
    searchRandomPopularBook,
    searchRandomNewestBook,
    specificBook,
    requestLastMinute,
    setSearchBook,
    setRequestLastMinute,
  } = useContext(BookshelfContext);

  const updateRequestLastMinute = () => {
    setRequestLastMinute((prevRequestsLastMinute: number[]) => {
      const currentTime = Date.now();
      const requestsLastMinuteCopyUpdated = prevRequestsLastMinute.filter(
        (prevRequestLastMinute: number) => {
          return currentTime - prevRequestLastMinute < 60 * 1000;
        }
      );

      return [...requestsLastMinuteCopyUpdated, currentTime];
    });
  };

  const clearDuplicatedBooks = (books: BookApi) => {
    const registredIds: string[] = [];

    const clearedBooks = books.items.filter((book) => {
      const isRegistred = registredIds.includes(book.id);

      if (!isRegistred) {
        registredIds.push(book.id);
        return true;
      }
    });

    return {
      ...books,
      items: clearedBooks,
    };
  };

  const searchBookInApi = async (bookName: string) => {
    updateRequestLastMinute();

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=10&key=${apiKey}`
    );

    const book = await response.json();

    return setSearchBook(book);
  };

  const searchRandomPopularBookInApi = async () => {
    updateRequestLastMinute();

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${randomLettersInApi()}&printType=books&orderBy=relevance&key=${apiKey}`
    );

    const randomPopularBook = await response.json();

    const clearedDuplicatedBooks = clearDuplicatedBooks(randomPopularBook);

    return clearedDuplicatedBooks as BookApi;
  };

  const searchRandomNewestBookInApi = async () => {
    updateRequestLastMinute();

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${randomLettersInApi()}&maxResults=4&printType=books&orderBy=newest&key=${apiKey}`
    );

    const randomNewestBook = await response.json();

    const clearedDuplicatedBooks = clearDuplicatedBooks(randomNewestBook);

    return clearedDuplicatedBooks as BookApi;
  };

  const searchSpecificBook = async (id: string) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
    );

    const specificBook = await response.json();

    return specificBook as SpecificBookType;
  };

  return {
    searchBookInApi,
    searchRandomPopularBookInApi,
    searchRandomNewestBookInApi,
    searchSpecificBook,
    searchRandomPopularBook,
    searchRandomNewestBook,
    searchBook,
    specificBook,
    requestLastMinute,
  };
};
