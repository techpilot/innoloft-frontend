const DetailsSection = ({ product }) => {
  return (
    <div className="bg-white rounded-lg w-[100%] border xl:w-[70%] mb-5 p-3">
      {/* <p className="text-xl font-semibold">Details</p> */}
      <div className="mb-2">
        <div className="mb-2">
          <p className="text-lg text-[#374151] font-semibold">Categories</p>
          <div className="text-[#6B7280] ">
            {product?.categories?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <p className="text-lg text-[#374151] font-semibold">
            Business Models
          </p>
          <div className="text-[#6B7280]">
            {product?.businessModels?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </div>
        </div>

        <div className="flex gap-1 mb-2">
          <p className="text-lg text-[#374151] font-semibold">TRL:</p>
          <p className="text-[#6B7280] mt-[3px]">{product?.trl?.name}</p>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <p className="text-lg text-[#374151] font-semibold">
            Investment Effort:
          </p>
          <p className="text-[#6B7280]">{product?.investmentEffort}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
