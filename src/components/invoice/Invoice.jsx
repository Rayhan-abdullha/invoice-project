import { FaPlus } from "react-icons/fa6";
import AddLogo from "./AddLogo";
import DownloadButton from "./DownloadButton";
import ProductLabel from "./ProductLabel";
import ProductInputSection from "./ProductInputSection";
import InvoiceInfo from "./InvoiceInfo";
import TotalInfo from "./TotalInfo";
import InvoiceInput from "./InvoiceInput";
import { useState } from "react";
function Invoice() {
  const [file, setFile] = useState("");
  const [invoiceData, setInvoiceData] = useState({
    invoice: "",
    date: "",
    duDate: "",
    phone: "",
    invoiceDsc: "",
    bill: "",
    ship: "",
    itemDsc: "",
    quantity: 0,
    rate: 0.0,
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    console.log(invoiceData);
  };

  return (
    <div className="m-auto max-w-[1400px] px-10 my-[50px]">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="p-10 border border-[#949494] rounded-xl lg:basis-[80%]">
          <div className="top sm:flex sm:justify-between mb-5 sm:gap-5">
            <AddLogo setFile={setFile} />
            <InvoiceInput
              setInvoiceData={setInvoiceData}
              invoiceData={invoiceData}
            />
          </div>
          <div className="middle md:flex md:flex-row md:justify-between">
            <InvoiceInfo
              setInvoiceData={setInvoiceData}
              invoiceData={invoiceData}
            />
          </div>
          <div className="bottom mt-10">
            <ProductLabel />
            <ProductInputSection
              setInvoiceData={setInvoiceData}
              invoiceData={invoiceData}
            />
            <div className="link-item mt-5 mb-[50px]">
              <button className="bg-[#009E74] text-white px-5 font-semibold py-2">
                <FaPlus className="float-left mt-1 mr-2" />
                Link Item
              </button>
            </div>
            <div className="">
              <h3 className="text-[20px] mb-5">Notes</h3>
              <TotalInfo
                setInvoiceData={setInvoiceData}
                invoiceData={invoiceData}
              />
            </div>
          </div>
        </div>
        <DownloadButton handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Invoice;
