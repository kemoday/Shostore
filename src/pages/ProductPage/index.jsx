import React, { useRef, useState } from "react";
import { AddToCartBtn } from "./../../components/AddToCartBtn";
import img1 from "../../assets/vapor-cage-t(1).png";
import img2 from "../../assets/vapor-cage-t(2).png";
import img3 from "../../assets/vapor-cage-t(3).png";
import img4 from "../../assets/vapor-cage-t(4).png";
import img5 from "../../assets/vapor-cage-t(5).png";
import img6 from "../../assets/vapor-cage-t(6).png";
import { FavouriteBtn } from "../../components/FavouriteBtn";

export const ProductPage = () => {
  const fimg = useRef();

  const [product, setProduct] = useState({
    name: " Anova Precision Cooker Nano",
    rating: 5,
    reviews: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    question: [{}],
    price: "$129.99",
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
    perferendis quod blanditiis nemo officia, quia voluptates et
    possimus. Eum inventore dolorem sed, perspiciatis alias nam facilis
    velit magnam laboriosam. Iusto!`,
    featurers: [
      "dolor sit amet",
      "dolor sit amet",
      "dolor sit amet",
      "dolor sit amet",
      "dolor sit amet",
      "dolor sit amet",
    ],
    sizes: ["UK 6", "UK 6.5", "UK 7", "UK 7.5"],
    images: [img1, img2, img3, img4, img5, img6],
  });

  const handleChangeImage = (e) => {
    fimg.current.src = e.target.src;
  };

  return (
    <section className=" sm:flex p-2 pt-0 mt-0 box-border ">
      <section className="sm:flex-[3] bg-[#f5f5f5] sm:mx-4 sm:flex  sm:h-full overflow-clip">
        <section className="sm:order-1 flex justify-center  items-center max-h-screen  sm:w-[80%] f">
          <img
            ref={fimg}
            className="w-auto h-full"
            src={product.images[0]}
            alt="product"
          />
        </section>
        <section className="flex sm:grid sm:mt-0 mt-4 list-none items-center gap-2 overflow-auto  max-w-full max-h-screen sm:w-[20%]">
          <ul className="flex sm:flex-col gap-2 my-2 mt-0">
            {product.images.map((img, index) => (
              <li key={index}>
                <img
                  onClick={handleChangeImage}
                  src={img}
                  alt=""
                  className="hover:border-2 border-black  cursor-pointer min-h-[75px] min-w-[75px] img"
                />
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="sm:flex-1 px-4 sm:overflow-auto sm:max-w-full sm:max-h-screen pb-5">
        <main className="sm:pb-14">
          <h1 className="text-[2.5rem] font-thin">{product.name}</h1>
          <section className=" flex-wrap">
            <a href="/">
              <div className="text-yellow-500 flex flex-nowrap">
                <li className="fa fa-star hover:text-yellow-300"></li>
                <li className="fa fa-star hover:text-yellow-300"></li>
                <li className="fa fa-star hover:text-yellow-300"></li>
                <li className="fa fa-star hover:text-yellow-300"></li>
                <li className="fa fa-star hover:text-yellow-300"></li>
              </div>
            </a>
            <a
              className="text-blue-600 whitespace-nowrap mx-2 hover:underline"
              href="/"
            >
              {product.reviews.length} Reviews
            </a>
            <a className="text-blue-600 sm:mx-2  hover:underline" href="/">
              <li className="fa fa-comment-dots"></li> Ask a question
            </a>
          </section>
          <h2 className="text-[2rem] font-medium">{product.price}</h2>
          <hr className="my-2" />
          <p>{product.discription}</p>
          <hr className="my-2" />
          <h3 className="text-gray-400 font-medium ">FEATURERS:</h3>
          <ul className="my-2 pl-8 list-disc">
            {product.featurers.map((featurer, index) => (
              <li key={index}>{featurer}</li>
            ))}
          </ul>
          <hr className="my-2" />
          <h3 className="text-gray-400 font-medium ">CHOOSE YOUR SIZE</h3>
          <ul className="flex flex-wrap gap-2 my-2">
            {product.sizes.map((size, index) => (
              <li key={index}>
                <button className="p-2 px-4 border hover:border-purple-600 whitespace-nowrap font-bold ">
                  {size}
                </button>
              </li>
            ))}
          </ul>
          <section className="flex justify-between flex-col">
            <AddToCartBtn />
            <FavouriteBtn />
          </section>
        </main>
      </section>
    </section>
  );
};
