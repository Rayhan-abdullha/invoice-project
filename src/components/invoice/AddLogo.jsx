import { FaPlus } from "react-icons/fa6";

function AddLogo({ setFile }) {
  return (
    <div className="bg-[#F5F5F5] p-5 flex justify-center items-center mb-5 sm:mb-0 sm:w-[300px] sm:h-[170px]">
      <label htmlFor="fileInput" className="cursor-pointer">
        <FaPlus id="file" />
      </label>
      <label
        htmlFor="fileInput"
        className="ml-2 text-[#494949] text-[20px] cursor-pointer"
      >
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name="file"
          id="fileInput"
        />
        Add Your Logo
      </label>
    </div>
  );
}

export default AddLogo;
