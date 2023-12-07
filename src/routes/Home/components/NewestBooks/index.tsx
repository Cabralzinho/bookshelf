import { useEffect } from "react";
import { useBook } from "@/hooks/useBook";
import { useNavigate } from "react-router-dom";

type BookData = {
  id: string;
};

export const NewestBooks = () => {
  const {
    searchRandomNewestBook,
    searchRandomNewestBookInApi,
    searchBookInApi,
  } = useBook();
  const navigate = useNavigate();

  const handleNewestBookClick = (book: BookData) => {
    searchBookInApi(book.id);

    navigate(`/books/v1/volumes/${book.id}`);
  };

  useEffect(() => {
    searchRandomNewestBookInApi();
  }, []);

  return (
    <section className="flex justify-center pb-[4.5rem]">
      <div className="flex flex-col w-full max-w-[24rem] gap-4">
        <h4>Newest</h4>
        {searchRandomNewestBook && (
          <ul className="flex flex-col gap-6">
            {searchRandomNewestBook.items.map((book: any) => (
              <li
                key={book.etag}
                onClick={() => handleNewestBookClick(book)}
                className="flex items-center gap-5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-36 h-52 rounded-lg object-cover drop-shadow-xl"
                    src={
                      book.volumeInfo.imageLinks?.thumbnail ||
                      "./images/generic-cover.jpg"
                    }
                    alt="Imagem não encontrada"
                  />
                  <div className="w-full max-w-[22rem] flex flex-col flex-wrap gap-2">
                    <h6 className="text-sm">
                      {book.volumeInfo.title}
                    </h6>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {book.volumeInfo.authors?.[0]}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
