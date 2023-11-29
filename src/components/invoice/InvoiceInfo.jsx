function InvoiceInfo({ setInvoiceData, invoiceData }) {
  const handleChange = (e) => {
    setInvoiceData({
      ...invoiceData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="flex flex-col md:w-[50%]">
        <input
          className="outline-0 border border-[#949494] px-2 pb-8 mb-5"
          type="text"
          name="invoiceDsc"
          placeholder="Who is this invoice from (required)"
          onChange={handleChange}
          value={invoiceData.invoiceDsc}
        />
        <div className="md:flex md:item-center md:gap-5">
          <div className="flex flex-col mb-5 md:w-[50%]">
            <label className="mb-2 text-[20px]">Bill To</label>
            <input
              onChange={handleChange}
              className="outline-0 border border-[#949494] px-2 py-3"
              type="text"
              name="bill"
              value={invoiceData.bill}
            />
          </div>
          <div className="flex flex-col mb-5 md:w-[50%]">
            <label className="text-[20px] mb-2">Ship To</label>
            <input
              onChange={handleChange}
              className="outline-0 border border-[#949494] px-2 py-3"
              type="text"
              name="ship"
              value={invoiceData.ship}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:gap-1 md:justify-evenly">
          <label className="mb-2 text-[20px]">Date</label>
          <input
            className="outline-0 border border-[#949494] px-2 py-3 md:w-[180px]"
            type="date"
            onChange={handleChange}
            name="date"
            value={invoiceData.date}
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-1 md:justify-evenly">
          <label className="mb-2 md:relative md:-top-0 md:-left-[20px] text-[20px]">
            Du Date
          </label>
          <input
            className="outline-0 border border-[#949494] px-2 py-3 md:relative md:-top-0 md:-right-[-10px] md:w-[180px]"
            type="date"
            onChange={handleChange}
            name="duDate"
            value={invoiceData.duDate}
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-1 md:justify-evenly">
          <label className="mb-2 text-[20px]">PO</label>
          <input
            className="outline-0 border border-[#949494] px-2 py-3 md:w-[180px]  md:relative md:-top-0 md:-left-[-5px]"
            type="text"
            onChange={handleChange}
            name="phone"
            value={invoiceData.phone}
          />
        </div>
      </div>
    </>
  );
}

export default InvoiceInfo;
