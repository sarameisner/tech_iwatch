"use client";
const Button = ({ text, onClick }) => {
  return (
    <button className="mt-6 bg-white text-blue-500 font-bold py-2 px-6 rounded-lg" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
