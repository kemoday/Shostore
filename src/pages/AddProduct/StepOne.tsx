import React from "react";
import { useHistory } from "react-router-dom";
import { PaginationBtns } from "../../components/PaginationBtns";
import { ProductInput } from "../../components/ProductInput";
import { ProductTextarea } from "../../components/ProductTextarea";

interface data {
  name: string;
  sizes: string;
  price: string;
  featurers: string;
  description: string;
}

interface Props {
  data: data;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const StepOne: React.FC<Props> = ({ handleChange, data }) => {
  const formRef = React.createRef<HTMLFormElement>();
  const history = useHistory();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (data.name && data.description && data.price) {
      history.push("/product/add/step/2");
    }
  };

  return (
    <section className="px-4">
      <form className="flex flex-col pt-3" ref={formRef}>
        <ProductInput
          placeholder="Nike Shose"
          name="name"
          label="Name"
          onChange={handleChange}
          type="text"
          value={data.name}
          required
        />
        <ProductInput
          name="price"
          label="Price"
          onChange={handleChange}
          type="number"
          value={data.price}
          placeholder="1500"
          required
        />

        <ProductTextarea
          name="description"
          label="description"
          value={data.description}
          onChange={handleChange}
          required
        />

        <ProductTextarea
          name="featurers"
          maxLength={250}
          label="Featurers"
          value={data.featurers}
          placeholder="put every item in a new line (250 character max)"
          onChange={handleChange}
        />

        <ProductTextarea
          maxLength={150}
          name="sizes"
          label="Product's sizes"
          value={data.sizes}
          placeholder="put every item in a new line (150 character max)"
          onChange={handleChange}
        />

        <PaginationBtns handleSubmit={handleSubmit} />
      </form>
    </section>
  );
};
