import { useBook } from "@/hooks/useBook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Description } from "./components/Description";
import { ImagesButtons } from "./components/ImagesButtons";
import { InformationBook } from "./components/InformationBook";
import { CardPagesTypes } from "./components/CardPagesType";
import { CardGenrer } from "./components/CardGenrer";
import { useQuery } from "@tanstack/react-query";
import { SpecificBookType } from "@/providers/BookshelfProvider";

export type SpecificBookProps = {
  children?: string | undefined;
  data: SpecificBookType;
  isLoading: boolean;
}

export const SpecificBook = () => {
  const { id } = useParams();
  const { searchSpecificBook } = useBook();

  const {data, isLoading, refetch} = useQuery({
    queryKey: ["specificBook"],
    queryFn: () => searchSpecificBook(id!),
    enabled: !!id,
  })

  useEffect(() => {
    refetch()
  }, [id])

  return (
    <main className="flex justify-center items-center pb-20">
      <div className="max-w-[24rem] w-full flex flex-col gap-8">
        {data && (
          <section className="flex flex-col justify-center items-center gap-4 text-center">
            <ImagesButtons data={data} isLoading={isLoading}/>
            <InformationBook data={data} isLoading={isLoading}/>
            <CardPagesTypes data={data} isLoading={isLoading}/>
            <Description>
              {data.volumeInfo.description || "Nenhuma Descrição definida"}
            </Description>
            <CardGenrer data={data} isLoading={isLoading}/>
          </section>
        )}
      </div>
    </main>
  );
};
