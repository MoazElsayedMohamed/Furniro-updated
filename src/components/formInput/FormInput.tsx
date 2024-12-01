import React from "react";

interface FormProps {
  labelName: string;
}

const FormInput: React.FC<FormProps> = ({ labelName }) => {
  return (
    <div>
      <label
        htmlFor="firstName"
        className="block my-5 capitalize max-md:text-sm"
      >
        {labelName}
      </label>
      <input
        type="text"
        className="py-6 border border-gray-200 rounded-lg w-full max-md:py-3"
      />
    </div>
  );
};

export default FormInput;
