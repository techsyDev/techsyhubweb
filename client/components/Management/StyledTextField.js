import React from "react";
import { TextField } from "@mui/material";

const StyledTextField = ({
  title,
  type,
  value,
  setValue,
  width,
  readOnly,
}) => {
  return (
    <input
      type={type || "text"}
      value={value}
      onChange={setValue}
      className={`h-12 px-4 border rounded-lg focus-visible:outline-[#37B9CB] ${width || "w-full"} poppins`}
      placeholder={title}
      readOnly={readOnly}
    />
  );
};

export default StyledTextField;
