import React from "react";
import img from "../../assets/vapor-cage-t(1).png";
import { AddToCartBtn } from "../../components/AddToCartBtn";
import { MainBtn } from "../../components/AddToCartBtn/MainBtn";

export const CartPage = () => {
  return (
    <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto px-2">
      <h1 className="flex items-center font-sans font-bold break-normal px-2 py-8 text-4xl">
        Your Shipping Cart
      </h1>

      <div id="recipients" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <section className="flex justify-between my-4 text-lg">
          <p>You have 8 items in your shipping cart</p>
          <button className="hover:underline">clear the cart</button>
        </section>
        <table className="stripe hover w-full pt-4 pb-4">
          <thead className="border-b-2">
            <tr>
              <th data-priority="1"></th>
              <th className="text-left" data-priority="2">
                Name
              </th>
              <th className="text-left" data-priority="3">
                Quantity
              </th>
              <th className="text-left" data-priority="4">
                Pricre
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>
                <img
                  className="rounded-full  w-20 h-20 m-4"
                  src={img}
                  alt=""
                  srcset=""
                />
              </td>
              <td>Shose 1</td>
              <td>
                <AddToCartBtn />
              </td>
              <td>$999</td>
            </tr>

            <tr className="border-b">
              <td>
                <img
                  className="rounded-full  w-20 h-20 m-4"
                  src={img}
                  alt=""
                  srcset=""
                />
              </td>
              <td>Shose 1</td>
              <td>
                <AddToCartBtn />
              </td>
              <td>$999</td>
            </tr>

            <tr className="border-b">
              <td>
                <img
                  className="rounded-full  w-20 h-20 m-4"
                  src={img}
                  alt=""
                  srcset=""
                />
              </td>
              <td>Shose 1</td>
              <td>
                <AddToCartBtn />
              </td>
              <td>$999</td>
            </tr>

            <tr className="border-b">
              <td>
                <img
                  className="rounded-full  w-20 h-20 m-4"
                  src={img}
                  alt=""
                  srcset=""
                />
              </td>
              <td>Shose 1</td>
              <td>
                <AddToCartBtn />
              </td>
              <td>$999</td>
            </tr>

            <tr className="py-4 text-2xl">
              <td className="font-bold text-xlg">Total Price</td>
              <td></td>
              <td></td>
              <td className="font-bold text-xlg">$999</td>
            </tr>
          </tbody>
        </table>
        <section className="text-right mt-4">
          <MainBtn text="Ceackout" />
        </section>
      </div>
    </div>
  );
};
