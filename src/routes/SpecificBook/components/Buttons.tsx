import { useBook } from "@/hooks/useBook";
import { useState, useEffect } from "react";

export const Buttons = () => {
  const { specificBook } = useBook();

  const [isBuyAvailable, setIsBuyAvailable] = useState(true);
  const [isSampleAvailable, setIsSampleAvailable] = useState(true);

  useEffect(() => {
    if (specificBook?.saleInfo.saleability === "NOT_FOR_SALE") {
      setIsBuyAvailable(false);
    }

    if (specificBook?.accessInfo.accessViewStatus === "NONE") {
      setIsSampleAvailable(false);
      return;
    }

    setIsBuyAvailable(true);
    setIsSampleAvailable(true);
  }, [
    specificBook?.accessInfo.accessViewStatus,
    specificBook?.saleInfo.saleability,
  ]);

  return (
    <div className="">
      {specificBook && (
        <div className="flex w-full max-w-[20rem] bg-stone-100 border border-gray-800/50 drop-shadow-lg text-black rounded-lg relative divide-x divide-black">
          <a
            className="w-full"
            target="_blank"
            href={specificBook.saleInfo.buyLink}
          >
            <button
              disabled={!isBuyAvailable}
              className="hover:bg-slate-300 transition-all rounded-s-lg text-sm w-full h-full py-3 px-2"
            >
              {isBuyAvailable && <p>Buy Now</p>}
              {!isBuyAvailable && <p>Unavailable</p>}
            </button>
          </a>
          <a
            className="w-full"
            target="_blank"
            href={specificBook.accessInfo.webReaderLink}
          >
            <button
              disabled={!isSampleAvailable}
              className="hover:bg-slate-300 transition-all rounded-e-lg text-sm w-full h-full py-3 px-2"
            >
              {isSampleAvailable && <p>Free Sample</p>}
              {!isSampleAvailable && <p>Unavailable</p>}
            </button>
          </a>
        </div>
      )}
    </div>
  );
};
