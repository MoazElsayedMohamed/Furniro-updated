import React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface FormProps {
  id: string;
  type: string;
  label: string;
  onClick: () => void;
  showPassword: boolean;
  placeholder: string;
  inputName: string;
  minLength: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

const FormRow: React.FC<FormProps> = ({
  id,
  type,
  label,
  onClick,
  showPassword,
  placeholder,
  inputName,
  register,
}) => {
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-gray-300 mb-2 max-sm:text-sm">
          {label}
        </label>
        {id === "password" && (
          <div className="flex items-center gap-2">
            {showPassword ? (
              <IoMdEyeOff className="text-xl text-gray-300 max-sm:text-base" />
            ) : (
              <IoMdEye className="text-xl text-gray-300 max-sm:text-base" />
            )}
            <p
              className="font-normal text-lg text-gray-300 cursor-pointer max-sm:text-sm"
              onClick={onClick}
            >
              {showPassword ? "hide" : "show"}
            </p>
          </div>
        )}
      </div>
      <input
        type={type}
        id={id}
        className="block h-16 border border-gray-800 w-full rounded-xl outline-none p-4 placeholder:text-sm max-xs:placeholder:text-xs max-sm:h-12"
        placeholder={placeholder}
        {...register(inputName)}
      />
    </div>
  );
};

export default FormRow;
