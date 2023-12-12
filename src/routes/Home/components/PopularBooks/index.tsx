import { useBook } from "@/hooks/useBook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/App.css";

type BookData = {
  id: string;
};

export const PopularBooks = () => {
  const {
    searchRandomPopularBook,
    searchRandomPopularBookInApi,
    searchBookInApi,
  } = useBook();
  const navigate = useNavigate();

  const handlePopularBookClick = (book: BookData) => {
    searchBookInApi(book.id);

    navigate(`/books/v1/volumes/${book.id}`);
  };

  useEffect(() => {
    searchRandomPopularBookInApi();
  }, []);

  return (
    <main className="flex justify-center">
      <section className="flex flex-col w-full max-w-[24rem] no-scroll gap-4">
        <h4>Livros Populares</h4>
        {searchRandomPopularBook && (
          <ul className="flex gap-6 w-full max-w-[24rem] overflow-hidden overflow-x-visible items-center pb-1">
            {searchRandomPopularBook.items.map((book: any) => (
              <li
                key={book.etag}
                onClick={() => handlePopularBookClick(book)}
                className="flex flex-col gap-3 cursor-pointer"
              >
                <img
                  className="h-56 rounded-lg object-cover drop-shadow-lg"
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    "../images/generic-cover.jpg"
                  }
                  alt="Imagem não encontrada"
                />
                <div className="flex flex-col text-xs w-40 h-14 gap-2">
                  <h6 className="text-xs overflow-hidden whitespace-nowrap text-ellipsis">
                    {book.volumeInfo.title}
                  </h6>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {book.volumeInfo.authors?.[0]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
