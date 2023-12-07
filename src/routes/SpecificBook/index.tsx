import { useBook } from "@/hooks/useBook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Description } from "./components/Description";
import { ImagesButtons } from "./components/ImagesButtons";
import { InformationBook } from "./components/InformationBook";
import { CardPagesTypes } from "./components/CardPagesType";
import { CardGenrer } from "./components/CardGenrer";

export const SpecificBook = () => {
  const { id } = useParams();
  const { searchSpecificBook, specificBook } = useBook();

  useEffect(() => {
    if (typeof id !== "string") {
      throw new Error("ID is not a string");
    }

    searchSpecificBook(id);
  }, [id]);

  return (
    <main className="flex justify-center items-center pb-20">
      <div className="max-w-[24rem] w-full flex flex-col gap-8">
        {specificBook && (
          <section className="flex flex-col justify-center items-center gap-4 text-center">
            <ImagesButtons specificBook={specificBook} />
            <InformationBook specificBook={specificBook} />
            <CardPagesTypes specificBook={specificBook} />
            <Description>
              {specificBook.volumeInfo.description || "Nenhuma Descrição definida"}
            </Description>
            <CardGenrer specificBook={specificBook} />
          </section>
        )}
      </div>
    </main>
  );
};
