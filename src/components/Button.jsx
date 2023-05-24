const Button = props => {
  return (
    <button
      className={`bg-[#2acfcf] text-white font-[Poppins] py-2 px-6 rounded-full md:ml-8 hover:bg-[#209f9f] font-bold text-sm duration-500 ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
