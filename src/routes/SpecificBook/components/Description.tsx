import { Skeleton } from "@mui/material";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

const MAX_LETTERS_LENGTH_IN_RESUMED_DESCRIPTION = 210;

export const Description = ({ children, isLoading }: any) => {
  const [description, setDescription] = useState(children);
  const [isResumedDescription, setIsResumedDescription] =
    useState<boolean>(true);

  useEffect(() => {
    if (isResumedDescription) {
      setDescription(
        children.slice(0, MAX_LETTERS_LENGTH_IN_RESUMED_DESCRIPTION)
      );
      return;
    }

    setDescription(children);
  }, [isResumedDescription, children]);

  return (
    <>
      {isLoading ? (
        <Skeleton variant="text" width={400} height={200} />
      ) : (
        <div className="flex flex-col items-start gap-1 w-full">
          <h5>About this book</h5>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
            className="text-justify text-sm text-gray-700 dark:text-slate-200"
          ></div>
          {isResumedDescription &&
            children.length > MAX_LETTERS_LENGTH_IN_RESUMED_DESCRIPTION && (
              <span
                className="hover:text-gray-500 cursor-pointer"
                onClick={() => setIsResumedDescription(false)}
              >
                Ver mais...
              </span>
            )}

          {!isResumedDescription &&
            children.length > MAX_LETTERS_LENGTH_IN_RESUMED_DESCRIPTION && (
              <span
                className="hover:text-gray-500 cursor-pointer"
                onClick={() => setIsResumedDescription(true)}
              >
                Ver menos...
              </span>
            )}
        </div>
      )}
    </>
  );
};
