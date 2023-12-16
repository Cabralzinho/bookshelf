import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home/index.tsx";
import { BookshelfProvider } from "./providers/BookshelfProvider.tsx";
import { Error404 } from "./routes/Errors/error404.tsx";
import { SpecificBook } from "./routes/SpecificBook/index.tsx";
import { Config } from "./routes/Config/index.tsx";
import { Account } from "./routes/Account/index.tsx";
import { RegisterPage } from "./routes/RegisterPage/index.tsx";
import { CreateInformationPage } from "./routes/CreateInformationPage/index.tsx";
import { LoginPage } from "./routes/LoginPage/index.tsx";
import { SearchBook } from "./routes/SearchBook/index.tsx";
import { RecoveryPasswordForm } from "./routes/RecoveryPasswords/SendEmail/index.tsx";
import { RedefinePassword } from "./routes/RecoveryPasswords/RedefinePassword/index.tsx";
import { AuthenticatedLayout } from "./components/AuthenticatedLayout.tsx";
import { AuthenticationLayout } from "./components/AuthenticationLayout.tsx";

const AuthenticatedProtected = (
  <BookshelfProvider>
    <AuthenticatedLayout>
      <App />
    </AuthenticatedLayout>
  </BookshelfProvider>
);

const AuthenticationProtected = (
  <AuthenticationLayout>
    <Outlet />
  </AuthenticationLayout>
);

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    element: AuthenticatedProtected,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search-book",
        element: <SearchBook />,
      },
      {
        path: "/books/v1/volumes/:id",
        element: <SpecificBook />,
      },
      {
        path: "/settings",
        element: <Config />,
      },
      {
        path: "/settings/account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/",
    element: AuthenticationProtected,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/register/information",
        element: <CreateInformationPage />,
      },
      {
        path: "/recovery",
        element: <RecoveryPasswordForm />,
      },
      {
        path: "/recovery/password",
        element: <RedefinePassword />
      }
    ],
  },
]);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
