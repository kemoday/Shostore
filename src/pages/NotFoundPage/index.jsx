import React from "react";
import { Link } from "react-router-dom";
import { InnerContaner } from "../../components/InnerContaner";

export const NotFoundPage = () => {
  document.title = "Shostore - page not found";
  return (
    <InnerContaner>
      <div className="text-center">
        <div className="text-center text-[10rem] ">404</div>
        <h1 className="text-center text-[5rem]">Page not found</h1>
        <Link
          to="/"
          className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
        >
          go to the home page
        </Link>
      </div>
    </InnerContaner>
  );
};
