import { Link, useRouteError } from "react-router-dom";

type Error404Props = {
  statusText?: string;
  message?: string;
};

export const Error404 = () => {
  const error = useRouteError() as Error404Props;
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1>Ops...</h1>
      <p>Parece que ocorreu um erro</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        Voltar para o Inicio
      </Link>
    </div>
  );
};
