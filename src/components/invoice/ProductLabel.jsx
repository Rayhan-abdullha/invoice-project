function ProductLabel() {
  return (
    <div className="bg-[#232E38] p-[6px] flex text-white gap-2 font-medium">
      <h3 className="basis-[65%]">Item</h3>
      <h3 className="basis-[15%]">Quantity</h3>
      <h3 className="basis-[15%]">Rate</h3>
      <h3 className="basis-[15%]">Amount</h3>
    </div>
  );
}

export default ProductLabel;
