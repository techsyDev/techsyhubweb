import React from "react";

const StyledTextarea = ({ height, title, value, setValue }) => {
  return (
    <textarea
      className="w-full p-4 border focus-visible:outline-[#37B9CB] poppins rounded-md"
      style={{ height: height || "100px" }}
      value={value}
      onChange={setValue}
      placeholder={title}
    />
  );
};

export default StyledTextarea;
