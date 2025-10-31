import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import { Children, Component } from "react";
import Home from "../Components/Home";
import Products from "../Components/Products";
import WishList from "../Components/WishList";
import ErrorPage from "../Components/ErrorPage";
import ProductDetails from "../Components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/products',
        Component: Products,
      },
      {
        path: '/wishlist',
        Component: WishList,
      },
      {
        path : '/products/details/:id',
        Component : ProductDetails
      }
    ],
  },
]);

export default router;
