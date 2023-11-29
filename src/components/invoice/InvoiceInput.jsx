import { RiHashtag } from "react-icons/ri";

function InvoiceInput({ setInvoiceData, invoiceData }) {
  return (
    <div className="invoice">
      <h3 className="uppercase text-[40px] font-medium mb-3 text-[#232323]">
        invoice
      </h3>
      <div className="flex h-[45px]">
        <span className="w-[50px] h-full text-[20px] flex justify-center items-center font-semibold border bg-[#E6E6E6]">
          <RiHashtag />
        </span>
        <input
          onChange={(e) =>
            setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value })
          }
          name="invoice"
          className="outline-0 py-2 w-full border border-[#C7C7C7] px-2"
          type="number"
          value={invoiceData.invoice}
        />
      </div>
    </div>
  );
}

export default InvoiceInput;
