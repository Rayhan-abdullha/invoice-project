import { RiDownloadLine } from "react-icons/ri";

function DownloadButton({ handleSubmit }) {
  return (
    <div className="ml-0 lg:ml-10 mb-5 lg:mb-0 lg:basis-[20%]">
      <button
        onClick={handleSubmit}
        className="bg-[#009E74] text-white px-5 py-2 font-semibold border-[10px] border-[#F0F2F5]"
      >
        <RiDownloadLine className="float-left mt-[5px] mr-2" />
        Download Invoice
      </button>
    </div>
  );
}

export default DownloadButton;
