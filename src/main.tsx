import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import App from "./App.tsx";
import LogIn from "./components/login.tsx";
import SignUp from "./components/signup.tsx";
import ProtectedRoute from "./components/protectedRoute.tsx";
import MyPosts from "./pages/MyPage.tsx";
import PostForm from "./pages/PostForm.tsx";
import NotFound from "./components/NotFound.tsx";
import PostDetails from "./pages/PostDetails.tsx";

const router = createBrowserRouter([

  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            index: true,
            element: <Navigate to="/posts/user" replace />,
          },
          {
            index: true,
            element: <MyPosts />,
          },
          {
            path: "posts/user",
            element: <MyPosts />,
          },
          {
            path: "newpost",
            element: <PostForm />,
          },
          {
            path: "posts/edit/:id",
            element: <PostForm />,
          },
          {
            path: "posts/:id",
            element: <PostDetails />
          }
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);