import React from "react";

const StyledSelect = ({ options, width, title, value, setValue }) => {
  return (
    <select
      className={`h-12 px-4 border rounded-lg focus-visible:outline-[#37B9CB] ${
        width || "w-full"
      } poppins capitalize select-wrapper`}
      value={value}
      onChange={setValue}
    >
      <option value="" disabled selected>
        {title}
      </option>
      {options.map((opt, i) => (
        <option value={opt} key={i} className="capitalize">
          {opt}
        </option>
      ))}
    </select>
  );
};

export default StyledSelect;
