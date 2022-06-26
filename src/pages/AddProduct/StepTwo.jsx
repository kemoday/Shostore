import React, { useState } from "react";

export const StepTwo = () => {
  const [imgs, setImgs] = useState([]);

  const handleChange = (e) => console.log(setImgs([...e.target.files]));
  const handleDelete = (name) => {
    const imgArry = imgs.filter((img) => img.name !== name);
    setImgs(imgArry);
  };

  return (
    <section className="p-4">
      <h2 className=" text-gray-700 font-bold my-2 text-2xl">
        Upload product's images
      </h2>
      <form
        onChange={handleChange}
        className="text-center p-4 mb-4 border-dashed py-10 border w-full border-gray-500 rounded-r-sm"
      >
        <label
          htmlFor="file-upload"
          className="hover:bg-gray-200 rounded-sm cursor-pointer border border-gray-400 p-2"
        >
          <li className="fa fa-cloud-upload"></li> Upload
        </label>
        <input required id="file-upload" type="file" hidden multiple />
      </form>

      {imgs.length > 0 && (
        <>
          <h3 className=" text-gray-700 font-bold my-2 text-xl">
            Choose your featured image
          </h3>
          <section>
            {imgs.map((img) => (
              <div key={img.name} className="flex border p-2 my-2 rounded-sm">
                <div className="flex-1 whitespace-nowrap overflow-hidden max-w-full text-ellipsis">
                  <input
                    className="cursor-pointer mr-2"
                    type="radio"
                    id="img-1"
                    name="featured-img"
                    value="male"
                  />
                  <label
                    htmlFor="img-1"
                    className="cursor-pointer select-none flex-1"
                  >
                    {img.name}
                  </label>
                </div>
                <button onClick={(e) => handleDelete(img.name)}>
                  <li className="fa fa-x p-2 cursor-pointer hover:text-red-500"></li>
                </button>
              </div>
            ))}
          </section>
        </>
      )}
    </section>
  );
};
