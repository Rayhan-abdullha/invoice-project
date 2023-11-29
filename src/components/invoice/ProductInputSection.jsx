function ProductInputSection({ setInvoiceData, invoiceData }) {
  const handleChange = (e) => {
    setInvoiceData({
      ...invoiceData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex mt-2 gap-2">
      <input
        className="outline-0 border border-[#949494] px-2 py-3 rounded-md overflow-hidden basis-[55%]"
        type="text"
        placeholder="Description of Service or Product"
        onChange={handleChange}
        name="itemDsc"
        value={invoiceData.itemDsc}
      />

      <input
        type="number"
        className="outline-0 border border-[#949494] px-2 py-3 rounded-md overflow-hidden basis-[15%]"
        onChange={handleChange}
        name="quantity"
        value={invoiceData.quantity}
      />

      <input
        type="number"
        className="outline-0 border border-[#949494] px-2 py-3 rounded-md overflow-hidden basis-[15%]"
        onChange={handleChange}
        name="rate"
        value={invoiceData.rate}
      />

      <h3 className="overflow-hidden basis-[15%] text-center">$ 00.00</h3>
    </div>
  );
}

export default ProductInputSection;
