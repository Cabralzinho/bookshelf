import { Dispatch, SetStateAction, createContext, useState } from "react";

type BookshelfProviderProp = {
  children: React.ReactNode;
};

type SpecificBook = {
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description?: string;
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printedPageCount: number;
    printType: string;
    categories?: string[];
    maturityRating: string;
    imageLinks?: {
      thumbnail: string;
      large: string;
      extraLarge: string;
    };
    language: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
    buyLink: string;
  };
  pdf: {
    isAvailable: boolean;
  };
  accessInfo: {
    webReaderLink: string;
    accessViewStatus: string;
  };
};

export type BookApi = {
  kind: string;
  totalItems: number;
  items: [
    {
      kind: string;
      id: string;
      etag: string;
      selfLink: string;
      volumeInfo: {
        title: string;
        subtitle: string;
        authors?: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        categories: string[];
        imageLinks?: {
          smallThumbnail: string;
          thumbnail: string;
        };
        language: string;
      };
      saleInfo: {
        country: string;
        saleability: string;
        isEbook: boolean;
      };
      accessInfo: {
        country: string;
      };
    }
  ];
};

type BookshelfContextProp = {
  searchBook: BookApi | null | undefined;
  searchRandomPopularBook: BookApi | null | undefined;
  searchRandomNewestBook: BookApi | null | undefined;
  specificBook: SpecificBook | null | undefined;
  requestLastMinute: number[];
  setSearchBook: Dispatch<SetStateAction<BookApi | null | undefined>>;
  setSearchRandomPopularBook: Dispatch<
    SetStateAction<BookApi | null | undefined>
  >;
  setSearchRandomNewestBook: Dispatch<
    SetStateAction<BookApi | null | undefined>
  >;
  setSpecificBook: Dispatch<SetStateAction<SpecificBook | null | undefined>>;
  setRequestLastMinute: Dispatch<SetStateAction<number[]>>;
};

export const BookshelfContext = createContext<BookshelfContextProp>(
  {} as BookshelfContextProp
);

export const BookshelfProvider = ({ children }: BookshelfProviderProp) => {
  const [searchBook, setSearchBook] = useState<BookApi | null | undefined>(
    null
  );
  const [searchRandomPopularBook, setSearchRandomPopularBook] = useState<
    BookApi | null | undefined
  >();
  const [searchRandomNewestBook, setSearchRandomNewestBook] = useState<
    BookApi | null | undefined
  >();
  const [specificBook, setSpecificBook] = useState<
    SpecificBook | null | undefined
  >();
  const [requestLastMinute, setRequestLastMinute] = useState<number[]>([]);

  return (
    <BookshelfContext.Provider
      value={{
        searchBook,
        searchRandomPopularBook,
        searchRandomNewestBook,
        specificBook,
        requestLastMinute,
        setSearchBook,
        setSearchRandomPopularBook,
        setSearchRandomNewestBook,
        setSpecificBook,
        setRequestLastMinute,
      }}
    >
      {children}
    </BookshelfContext.Provider>
  );
};
