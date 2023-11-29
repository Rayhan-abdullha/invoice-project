function TotalInfo({ setInvoiceData, invoiceData }) {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:gap-2">
        <input
          onChange={(e) =>
            setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value })
          }
          className="basis-[50%] outline-0 border border-[#949494] px-2 pt-1 pb-5 rounded-md"
          type="text"
          name="notes"
          placeholder="Notes any relevent information not already covered"
          value={invoiceData.notes}
        />
        <div className="basis-[20%] flex mt-10 sm:mt-0 justify-end">
          <h3 className="text-[16px] font-semibold sm:font-normal">Total</h3>
          <p className="text-[16px] ml-[30px]">$1200.00</p>
        </div>
      </div>
    </>
  );
}

export default TotalInfo;
