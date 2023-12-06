import { Icons } from "@/components/Icons";
import { useBook } from "@/hooks/useBook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type BookData = {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
};

export const NavbarSearch = () => {
  const { searchBook, searchBookInApi } = useBook();
  const [inputSearch, setInputSearch] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setIsListVisible(false);
      return;
    }

    setIsListVisible(true);
    searchBookInApi(value);
  };

  const handleBookClick = (book: BookData) => {
    setIsListVisible(false);
    setInputValue("");

    navigate(`/books/v1/volumes/${book.id}`);
  };

  return (
    <>
      {inputSearch ? (
        <>
          <div className="flex flex-col gap-1 items-end">
            <input
              className="w-full max-w-[10rem] py-1 pl-3 rounded-lg bg-gray-100 dark:text-black focus:outline-none"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search for a book"
              autoComplete="off"
            />
            <div className="flex flex-col items-center w-full max-w-[10rem] h-0 z-[999]">
              <div className="flex bg-slate-100 dark:bg-gray-800 rounded-lg">
                {isListVisible && searchBook && (
                  <ul className="flex flex-col divide-y-2 divide-zinc-200 dark:divide-gray-700">
                    {searchBook.items.map((book) => {
                      return (
                        <li
                          key={book.id}
                          className="flex items-center w-[280px] cursor-pointer text-center py-1"
                          onClick={() => handleBookClick(book)}
                        >
                          <img
                            className="w-24 h-28 object-cover rounded-lg text-xs"
                            src={
                              book.volumeInfo.imageLinks?.thumbnail ||
                              "../images/generic-cover.jpg"
                            }
                            alt="imagem nao encontrada"
                          />
                          <div className="text-xs flex items-center flex-col gap-1 w-60">
                            <span className="font-bold w-40">
                              {book.volumeInfo.title}
                            </span>
                            <span className="font-thin">
                              {book.volumeInfo.authors?.[0]}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <Icons.Close
            className="cursor-pointer w-full max-w-[1.5rem]"
            onClick={() => {
              setInputSearch(false);
              setInputValue("");
              setIsListVisible(false);
            }}
          />
        </>
      ) : (
        <Icons.Search
          className="cursor-pointer w-full max-w-[1.5rem]"
          onClick={() => setInputSearch(true)}
        />
      )}
    </>
  );
};
