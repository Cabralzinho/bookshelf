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

export const SearchBook = () => {
  const { searchBook, searchBookInApi } = useBook();
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

  const handleClickInputClear = () => {
    setInputValue("");
    setIsListVisible(false);
  }

  const handleBookClick = (book: BookData) => {
    setIsListVisible(false);
    setInputValue("");

    navigate(`/books/v1/volumes/${book.id}`);
  };

  return (
    <div className="flex flex-col h-full gap-1 pt-10 pb-20">
      <div className="flex items-center bg-gray-100 dark:text-black rounded-lg px-2">
        <input
          className="w-full max-w-[24rem] py-1 pl-3 rounded-lg focus:outline-none"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for a book"
          autoComplete="off"
        />
        <Icons.Close onClick={handleClickInputClear} className="cursor-pointer"/>
      </div>
      <div className="flex flex-col items-center w-full max-w-[24rem] pb-20">
        <div className="flex bg-slate-100 dark:bg-gray-800 rounded-lg ">
          {isListVisible && searchBook && (
            <ul className="flex flex-col divide-y-2 divide-zinc-200 dark:divide-gray-700 h-full ">
              {searchBook.items.map((book) => {
                return (
                  <li
                    key={book.id}
                    className="flex items-center w-full cursor-pointer text-center py-1"
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
  );
};
