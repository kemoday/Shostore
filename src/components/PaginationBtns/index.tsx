import React from "react";
import { useHistory } from "react-router-dom";
import { PrimaryBtn } from "../PrimaryBtn";
import { SecondaryBtn } from "../SecondaryBtn";

interface Props {
  handleSubmit: (e: React.SyntheticEvent) => void;
}

export const PaginationBtns: React.FC<Props> = ({ handleSubmit }) => {
  const history = useHistory();
  return (
    <div className="flex justify-between basis-1/3 mt-8">
      <SecondaryBtn text="< Back" onClick={() => history.goBack()} />
      <PrimaryBtn text="Next >" onClick={handleSubmit} />
    </div>
  );
};
