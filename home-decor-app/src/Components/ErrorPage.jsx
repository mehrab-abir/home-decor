import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center pt-24">
        <h1 className="text-red-500 text-4xl font-bold">
          404: Page not found!
        </h1>
      </div>

        <div className="fixed bottom-0">
            <Footer></Footer>
        </div>
      
    </div>
  );
};

export default ErrorPage;
